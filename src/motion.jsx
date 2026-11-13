import { Children, Fragment, useEffect, useRef, useState } from 'react';
import {
  animate,
  m,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';

export const ACCENT = '#1F6BFF';
export const EASE = [0.22, 1, 0.36, 1];

/* ---------- Shared variants ---------- */
export const group = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export const rows = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

export const rowIn = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
};

const cardIn = {
  hidden: { opacity: 0, y: 56, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: EASE } },
};

const word = {
  hidden: { y: '110%', opacity: 0, filter: 'blur(8px)' },
  show: {
    y: '0%',
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: EASE },
  },
};

/* ---------- StaggerText: word-by-word masked reveal ----------
   segments: [{ t: 'Capture Everything.', c: '#F5F7FA', block: true }, …]
   Each word rises out of a clipping mask, staggered across the whole heading. */
export function StaggerText({
  as = 'h2',
  segments,
  stagger = 0.07,
  delay = 0,
  animateOnMount = false,
  className,
  style,
  ...rest
}) {
  const Tag = m[as];
  const label = segments.map((s) => s.t).join(' ');
  const trigger = animateOnMount
    ? { initial: 'hidden', animate: 'show' }
    : { initial: 'hidden', whileInView: 'show', viewport: { once: true, amount: 0.6 } };

  return (
    <Tag
      className={className}
      style={style}
      aria-label={label}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      {...trigger}
      {...rest}
    >
      {segments.map((seg, si) => {
        const words = seg.t.split(' ');
        return (
          <Fragment key={si}>
            <span
              aria-hidden="true"
              className={seg.block ? 'block' : 'inline-block'}
              style={seg.c ? { color: seg.c } : undefined}
            >
              {words.map((w, wi) => (
                <span key={wi}>
                  <span className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]">
                    <m.span className="inline-block will-change-transform" variants={word}>
                      {w}
                    </m.span>
                  </span>
                  {wi < words.length - 1 ? ' ' : null}
                </span>
              ))}
            </span>
            {!seg.block && si < segments.length - 1 ? ' ' : null}
          </Fragment>
        );
      })}
    </Tag>
  );
}

/* ---------- MotionCard: staggered entrance + hover lift + pointer tilt ---------- */
export function MotionCard({ as = 'article', className, style, children, ...rest }) {
  const Tag = m[as];
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const rx = useSpring(0, { stiffness: 220, damping: 22 });
  const ry = useSpring(0, { stiffness: 220, damping: 22 });

  const onMove = (e) => {
    if (reduce || e.pointerType !== 'mouse' || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 7);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 7);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <Tag
      ref={ref}
      className={className}
      style={{ ...style, rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      variants={cardIn}
      whileHover={reduce ? undefined : { y: -6, transition: { duration: 0.4, ease: EASE } }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ---------- Carousel: card grid on desktop, swipe row + dots on phones ---------- */
export function Carousel({ className, style, id, children }) {
  const ref = useRef(null);
  const count = Children.count(children);
  const [current, setCurrent] = useState(0);

  const onScroll = () => {
    const g = ref.current;
    if (!g || g.children.length < 2) return;
    const step = g.children[1].offsetLeft - g.children[0].offsetLeft || g.clientWidth;
    let i = Math.round(g.scrollLeft / step);
    if (g.scrollLeft + g.clientWidth >= g.scrollWidth - 4) i = count - 1;
    setCurrent(Math.max(0, Math.min(count - 1, i)));
  };

  const go = (i) => {
    const g = ref.current;
    if (!g || !g.children[i]) return;
    g.scrollTo({ left: g.children[i].offsetLeft - g.children[0].offsetLeft, behavior: 'smooth' });
    setCurrent(i);
  };

  return (
    <>
      <m.div
        ref={ref}
        id={id}
        className={className}
        style={style}
        onScroll={onScroll}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
      >
        {children}
      </m.div>
      <div className="x6-dots" role="group" aria-label="Choose a card">
        {Array.from({ length: count }, (_, i) => (
          <button
            key={i}
            type="button"
            className="x6-dot"
            aria-label={`Show card ${i + 1} of ${count}`}
            aria-current={i === current ? 'true' : 'false'}
            onClick={() => go(i)}
          >
            <m.span
              className="block h-1.5 rounded-full"
              initial={false}
              animate={{
                width: i === current ? 20 : 6,
                backgroundColor: i === current ? ACCENT : 'rgba(255,255,255,0.32)',
                boxShadow: i === current ? `0 0 10px ${ACCENT}` : '0 0 0px rgba(0,0,0,0)',
              }}
              transition={{ duration: 0.35, ease: EASE }}
            />
          </button>
        ))}
      </div>
    </>
  );
}

/* ---------- CountUp: animates a number when it scrolls into view ---------- */
export function CountUp({ to, prefix = '', suffix = '', duration = 1.6 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const reduce = useReducedMotion();
  const value = useMotionValue(reduce ? to : 0);
  const text = useTransform(value, (v) => `${prefix}${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (!inView || reduce) return undefined;
    const controls = animate(value, to, { duration, ease: EASE });
    return () => controls.stop();
  }, [inView, reduce, to, duration, value]);

  return (
    <m.span ref={ref} aria-label={`${prefix}${to}${suffix}`} suppressHydrationWarning>
      {text}
    </m.span>
  );
}
