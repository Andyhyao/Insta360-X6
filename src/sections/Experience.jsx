import { useRef, useState } from 'react';
import {
  m,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { ACCENT, EASE, StaggerText, fadeUp, group } from '../motion.jsx';
import data from '../scenes.json';

const R = 470;
const STEPS = [0, 90, 180, 270, 360];

function panelStyle(i, angle) {
  const a = i * 22.5;
  const e = a - angle - 135;
  const n = (((e % 360) + 540) % 360) - 180;
  const fromFront = 180 - Math.abs(n);
  let op = fromFront < 24 ? 0 : fromFront < 42 ? (fromFront - 24) / 18 : 1;
  if (Math.abs(n) < 70) op *= 0.92;
  const live = Math.abs(a - (((Math.round(angle / 22.5) * 22.5) % 360 + 360) % 360)) < 1;
  return {
    live,
    label: String(Math.round(a)).padStart(3, '0') + '°' + (live ? ' · VIEW' : ''),
    style: {
      transform: `rotateY(${e}deg) translateZ(-${R}px)`,
      opacity: op,
      transition: 'border-color .4s ease, box-shadow .4s ease',
      border: live ? '1.5px solid #FFFFFF' : '1px solid rgba(190,215,255,.32)',
      boxShadow: live ? `0 0 0 1px ${ACCENT}, 0 0 36px ${ACCENT}` : `0 0 22px ${ACCENT}55`,
    },
  };
}

export default function Experience() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const [angle, setAngle] = useState(0);

  // Scroll-scrubbed rotation: the ring turns a full 360° while the section crosses the viewport.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start center', 'end center'] });
  const raw = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const smooth = useSpring(raw, { stiffness: 90, damping: 24, mass: 0.6 });
  useMotionValueEvent(smooth, 'change', (v) => {
    if (reduce) return; // reduced motion: the ring stays put while scrolling
    const next = Math.round(Math.max(0, Math.min(360, v)));
    setAngle((prev) => (prev === next ? prev : next));
  });

  const camY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const dashOffset = useTransform(scrollYProgress, [0, 1], [0, -160]);

  // Stepped selector: scroll the page to the point in the scene that matches the angle.
  const jumpTo = (deg) => {
    if (reduce) {
      // Reduced motion: switch the view in place instead of scrolling the page.
      setAngle(deg);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const top = window.scrollY + rect.top;
    const target = top + (deg / 360) * rect.height - window.innerHeight / 2;
    window.scrollTo({ top: target, behavior: 'smooth' });
  };

  const activeStep = STEPS.reduce((best, s) => (Math.abs(s - angle) < Math.abs(best - angle) ? s : best), 0);

  return (
    <section ref={ref} className="x6-s2" id="experience" aria-labelledby="x6-s2-title">
      <div className="x6-s2-bg" aria-hidden="true">
        <img loading="lazy" decoding="async" src="/assets/b281565475d3258cb21552870c4a1db5.jpg" alt="" />
      </div>

      <m.div className="x6-s2-head" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={group}>
        <m.div
          className="x6-mono"
          variants={fadeUp}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, fontSize: 12, fontWeight: 500, letterSpacing: '.18em', color: '#A9B2BF' }}
        >
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: ACCENT, boxShadow: `0 0 10px ${ACCENT}` }} />
          <span>02 / 360 EXPERIENCE</span>
        </m.div>
        <StaggerText
          as="h2"
          id="x6-s2-title"
          className="x6-h2"
          style={{ margin: '22px 0 0', fontWeight: 700, letterSpacing: '-0.028em', lineHeight: 1.05 }}
          segments={[
            { t: 'One Camera.', c: '#F5F7FA' },
            { t: 'Every Angle.', c: '#7F8B9D' },
          ]}
        />
        <m.p variants={fadeUp} style={{ margin: '20px auto 0', maxWidth: 600, fontSize: 18, lineHeight: 1.6, color: '#B3BCC8' }}>
          Shoot first. Reframe later. X6 captures the entire world around you in stunning 8K 360° video.
        </m.p>
      </m.div>

      <m.div
        className="x6-stage"
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: EASE }}
      >
        <div className="x6-scene">
          <div className="x6-ring">
            {Array.from({ length: 16 }, (_, i) => {
              const p = panelStyle(i, angle);
              return (
                <div key={i} className="x6-panel" style={p.style}>
                  <img loading="lazy" decoding="async" src={data.scenes[i % data.scenes.length]} alt={data.alts[i % data.alts.length]} />
                  <span className="x6-mono" style={{ position: 'absolute', top: 8, left: 9, fontSize: 9, letterSpacing: '.14em', color: '#FFFFFF', textShadow: '0 1px 6px rgba(0,0,0,.85)' }}>{p.label}</span>
                </div>
              );
            })}
          </div>

          <div aria-hidden="true" style={{ position: 'absolute', left: -320, top: 140, width: 640, height: 130 }}>
            <div style={{ position: 'absolute', left: 0, top: 0, width: 640, height: 130, borderRadius: '50%', border: `1px solid ${ACCENT}`, opacity: 0.28, boxSizing: 'border-box' }} />
            <div style={{ position: 'absolute', left: 105, top: 24, width: 430, height: 82, borderRadius: '50%', border: `1px solid ${ACCENT}`, opacity: 0.55, boxSizing: 'border-box', boxShadow: `0 0 18px ${ACCENT}` }} />
            <m.div
              style={{ position: 'absolute', left: 190, top: 42, width: 260, height: 46, borderRadius: '50%', border: '1.5px solid #CFE0FF', boxSizing: 'border-box', background: `radial-gradient(ellipse at center,${ACCENT} 0%,rgba(5,7,11,0) 72%)`, boxShadow: `0 0 22px ${ACCENT}, inset 0 0 14px ${ACCENT}` }}
              animate={reduce ? undefined : { opacity: [0.75, 1, 0.75] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          <svg aria-hidden="true" width="220" height="96" viewBox="0 0 220 96" fill="none" style={{ position: 'absolute', left: -110, top: -272, overflow: 'visible' }}>
            <m.path d="M28 66 A82 18 0 0 1 192 66" stroke="rgba(255,255,255,.35)" strokeWidth="1.5" strokeDasharray="3 5" style={{ strokeDashoffset: dashOffset }} />
            <path d="M22 68 A88 20 0 0 0 198 68" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
            <path d="M189 59 L199 67 L187 73" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M31 59 L21 67 L33 73" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <text x="110" y="50" textAnchor="middle" fontFamily="Archivo, sans-serif" fontSize="40" fontWeight="600" letterSpacing="-1" fill="#FFFFFF">360°</text>
          </svg>

          <m.img loading="lazy" decoding="async"
            className="x6-cam"
            src="/assets/03c292d03785acdafa287a0fb2d38317.webp"
            alt="Insta360 X6 front view with its touchscreen"
            style={{ y: reduce ? 0 : camY, z: 1 }}
          />
        </div>

        <div className="x6-steps">
          <div className="x6-mono" style={{ fontSize: 11, letterSpacing: '.16em', color: '#8B95A3', paddingLeft: 4, marginBottom: 10 }}>VIEW ANGLE</div>
          <div className="x6-steps-list" role="group" aria-label="View angle">
            <div className="x6-steps-line" aria-hidden="true" />
            {STEPS.map((v) => {
              const on = v === activeStep;
              return (
                <button key={v} type="button" className="x6-step" aria-pressed={on} onClick={() => jumpTo(v)}>
                  <m.span
                    initial={false}
                    animate={{
                      scale: on ? 1.15 : 1,
                      borderColor: on ? ACCENT : 'rgba(255,255,255,.5)',
                      boxShadow: on ? `0 0 0 4px ${ACCENT}33, 0 0 16px ${ACCENT}` : '0 0 0 0px rgba(0,0,0,0)',
                    }}
                    transition={{ duration: 0.35, ease: EASE }}
                    style={{ position: 'relative', zIndex: 1, width: 14, height: 14, borderRadius: '50%', boxSizing: 'border-box', borderWidth: on ? 2 : 1.5, borderStyle: 'solid', background: on ? `radial-gradient(circle,#FFFFFF 0 3px,${ACCENT} 4px)` : '#05070B' }}
                  />
                  <span className="x6-mono" style={on ? { fontSize: 13, fontWeight: 600, color: '#FFFFFF' } : { fontSize: 13, color: '#A9B2BF' }}>{v}°</span>
                </button>
              );
            })}
          </div>
        </div>
      </m.div>

      <div className="x6-s2-hud x6-mono" style={{ fontSize: 11, letterSpacing: '.14em', color: '#8B95A3' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#FFFFFF' }}>
          <span className="x6-rec" style={{ width: 7, height: 7, borderRadius: '50%', background: '#FF453A' }} />
          8K 360° CAPTURE
        </span>
        <span aria-hidden="true">·</span>
        <span style={{ fontVariantNumeric: 'tabular-nums' }}>YAW {String(angle).padStart(3, '0')}°</span>
        <span className="x6-hud-extra" aria-hidden="true">·</span>
        <span className="x6-hud-extra" suppressHydrationWarning>{reduce ? 'PICK AN ANGLE' : 'SCROLL TO ROTATE'}</span>
      </div>
    </section>
  );
}
