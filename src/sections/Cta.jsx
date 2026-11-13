import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ACCENT, EASE, StaggerText, fadeUp, group } from '../motion.jsx';

export default function Cta() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });
  const bgScale = useTransform(scrollYProgress, [0, 1], [reduce ? 1 : 1.14, 1]);
  const bgY = useTransform(scrollYProgress, [0, 1], ['-6%', '0%']);

  return (
    <section ref={ref} className="x6-s9" id="buy" aria-labelledby="x6-s9-title">
      <div className="x6-s9-hero">
        <motion.img
          src="/assets/s9-sunset.webp"
          alt=""
          style={{ scale: bgScale, y: reduce ? 0 : bgY }}
        />
        <div className="x6-s9-scrim" />
        <motion.p className="x6-script" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={{ hidden: {}, show: {} }}>
          <motion.span
            className="block"
            variants={{
              hidden: { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
              show: { clipPath: 'inset(0 0% 0 0)', opacity: 1, transition: { duration: 1.6, ease: EASE, delay: 0.2 } },
            }}
          >
            Your World.<br />Fully Captured.
          </motion.span>
        </motion.p>
        <motion.div
          className="x6-s9-cta"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={group}
        >
          <StaggerText
            as="h2"
            id="x6-s9-title"
            className="x6-h2"
            style={{ margin: 0, fontWeight: 700, letterSpacing: '-0.028em', lineHeight: 1.05, color: '#FFFFFF' }}
            segments={[{ t: 'Insta360 X6' }]}
          />
          <motion.p variants={fadeUp} style={{ margin: '14px 0 0', fontSize: 20, lineHeight: 1.5, color: '#E3E8EF' }}>
            Capture Everything. Go Anywhere.
          </motion.p>
          <motion.a
            href="https://www.insta360.com/product/insta360-x6"
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
            whileHover={{ scale: 1.04, boxShadow: `0 12px 40px ${ACCENT}66` }}
            whileTap={{ scale: 0.97 }}
            style={{ marginTop: 32, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, height: 54, padding: '0 30px', borderRadius: 999, background: ACCENT, color: '#FFFFFF', fontSize: 16, fontWeight: 600, boxSizing: 'border-box', textShadow: 'none' }}
          >
            Buy Now
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </motion.a>
          <motion.a className="x6-ai-link" href="#overview" variants={fadeUp} style={{ marginTop: 10 }}>
            Learn more{' '}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
