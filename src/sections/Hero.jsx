import { useRef } from 'react';
import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ACCENT, EASE, StaggerText } from '../motion.jsx';

// Set to true (and point href at the video) once the film is ready.
const SHOW_FILM_BUTTON = false;
const FILM_URL = '#film';

const TICKS = Array.from({ length: 41 }, (_, i) => {
  const d = 172 + i * 2;
  return { d, major: d % 20 === 0 };
});

const intro = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: EASE, delay },
});

export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.12]);
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '8%']);
  const copyY = useTransform(scrollYProgress, [0, 0.8], [0, reduce ? 0 : -90]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const hudOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);

  return (
    <section ref={ref} className="x6-hero" id="overview" aria-label="Insta360 X6">
      <div className="x6-photo">
        <m.div style={{ position: 'absolute', inset: 0, scale: photoScale, y: photoY }}>
          <m.img
            src="/assets/73736d3fa4fcf64860e83e1e9c4dcd78.webp"
            srcSet="/assets/hero-1080.webp 1080w, /assets/73736d3fa4fcf64860e83e1e9c4dcd78.webp 1440w"
            sizes="(max-width: 1180px) 120vw, 1440px"
            alt="Two Insta360 X6 cameras, front screen and rear lens, floating above a mountain summit at sunrise"
            width="1440"
            height="760"
            fetchPriority="high"
            decoding="async"
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease: EASE }}
            style={{ width: 1440, height: 'auto', aspectRatio: '1440 / 760' }}
          />
        </m.div>
        <div
          className="x6-scrim"
          style={{ background: 'linear-gradient(90deg, rgba(5,7,11,.72) 0%, rgba(5,7,11,.46) 26%, rgba(5,7,11,.1) 35%, rgba(5,7,11,0) 58%), linear-gradient(0deg,#05070B 0%,rgba(5,7,11,0) 20%) 75%, linear-gradient(180deg,rgba(5,7,11,.55) 0%,rgba(5,7,11,0) 14%)' }}
        />
      </div>

      <m.div
        className="x6-hud"
        aria-hidden="true"
        style={{ opacity: hudOpacity }}
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: EASE, delay: 0.7 }}
      >
        <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(255,255,255,.14)' }} />
        {[
          { top: -1, left: -1, borderTop: '2px solid #FFF', borderLeft: '2px solid #FFF' },
          { top: -1, right: -1, borderTop: '2px solid #FFF', borderRight: '2px solid #FFF' },
          { bottom: -1, left: -1, borderBottom: '2px solid #FFF', borderLeft: '2px solid #FFF' },
          { bottom: -1, right: -1, borderBottom: '2px solid #FFF', borderRight: '2px solid #FFF' },
        ].map((s, i) => (
          <m.div
            key={i}
            style={{ position: 'absolute', width: 30, height: 30, ...s }}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.9 + i * 0.08 }}
          />
        ))}
        <div className="x6-mono" style={{ position: 'absolute', top: 16, right: 18, fontSize: 11, letterSpacing: '.12em', color: '#FFFFFF', textShadow: '0 1px 8px rgba(0,0,0,.6)' }}>8K · 360° · REFRAME 1:1</div>
        <div className="x6-mono" style={{ position: 'absolute', bottom: 16, left: 18, display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, letterSpacing: '.12em', color: '#FFFFFF', textShadow: '0 1px 8px rgba(0,0,0,.7)' }}>
          <span className="x6-rec" style={{ width: 7, height: 7, borderRadius: '50%', background: '#FF453A' }} />
          REC 00:12:48:06
        </div>
        <div className="x6-mono" style={{ position: 'absolute', bottom: 16, right: 18, fontSize: 11, letterSpacing: '.12em', color: '#FFFFFF', textShadow: '0 1px 8px rgba(0,0,0,.7)' }}>YAW 212° · PITCH −06°</div>
        <div style={{ position: 'absolute', top: 622, left: 0, right: 0, height: 44 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', height: 14 }}>
            {TICKS.map((t) => (
              <div key={t.d} style={{ position: 'relative', width: 1, height: t.major ? 14 : 7, background: t.major ? 'rgba(255,255,255,.6)' : 'rgba(255,255,255,.28)' }}>
                {t.major && (
                  <span className="x6-mono" style={{ position: 'absolute', top: 20, left: 0, transform: 'translateX(-50%)', fontSize: 10, letterSpacing: '.06em', color: '#9AA4B2' }}>{t.d}°</span>
                )}
              </div>
            ))}
          </div>
          <m.div
            style={{ position: 'absolute', top: -6, left: '50%', width: 2, height: 26, marginLeft: -1, background: ACCENT, boxShadow: `0 0 12px ${ACCENT}` }}
            animate={reduce ? undefined : { x: [-40, 0] }}
            transition={{ duration: 1.6, ease: EASE, delay: 1 }}
          />
        </div>
      </m.div>

      <m.div className="x6-content" style={{ y: copyY, opacity: copyOpacity }}>
        <div className="x6-copy">
          <m.div
            className="x6-mono"
            {...intro(0.15)}
            style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 12, fontSize: 12, fontWeight: 500, letterSpacing: '.18em', color: '#A9B2BF' }}
          >
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: ACCENT, boxShadow: `0 0 10px ${ACCENT}` }} />
            <span>NEW · INSTA360 X6</span>
            <span style={{ width: 40, height: 1, background: 'rgba(255,255,255,.25)' }} />
            <span>360° ACTION CAMERA</span>
          </m.div>
          <StaggerText
            as="h1"
            className="x6-h1"
            animateOnMount
            delay={0.3}
            stagger={0.09}
            style={{ margin: '26px 0 0', fontWeight: 700, letterSpacing: '-0.028em', lineHeight: 1.02 }}
            segments={[
              { t: 'Capture Everything.', c: '#F5F7FA', block: true },
              { t: 'Frame It Later.', c: '#7F8B9D', block: true },
            ]}
          />
          <m.p {...intro(0.85)} style={{ margin: '26px 0 0', maxWidth: 500, fontSize: 18, lineHeight: 1.6, color: '#B3BCC8' }}>
            The flagship 8K 360° camera. Shoot in every direction at once, then choose the angle, the frame and the moment in the edit.
          </m.p>
          <m.div className="x6-ctas" {...intro(1)} style={{ marginTop: 40 }}>
            <m.a
              href="#buy"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, height: 54, padding: '0 28px', borderRadius: 999, background: ACCENT, color: '#FFFFFF', fontSize: 16, fontWeight: 600, boxSizing: 'border-box' }}
            >
              <span>Buy Now</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </m.a>
            {SHOW_FILM_BUTTON && (
            <m.a
              href={FILM_URL}
              whileHover={{ scale: 1.03, borderColor: 'rgba(255,255,255,.4)' }}
              whileTap={{ scale: 0.97 }}
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 14, height: 54, padding: '0 24px 0 7px', borderRadius: 999, border: '1px solid rgba(255,255,255,.16)', color: '#F2F4F7', fontSize: 16, fontWeight: 500, boxSizing: 'border-box' }}
            >
              <span style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,.1)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4.5v15l13-7.5z" /></svg>
              </span>
              Watch the film
            </m.a>
            )}
          </m.div>
        </div>
      </m.div>
    </section>
  );
}
