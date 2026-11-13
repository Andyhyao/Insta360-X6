import { m } from 'framer-motion';
import { CountUp, fadeUp } from '../motion.jsx';

const SPECS = [
  { label: 'VIDEO', value: <><CountUp to={8} suffix="K" /> 360°</>, note: 'Stunning detail in every direction' },
  { label: 'PHOTO', value: <CountUp to={120} suffix="MP" />, note: 'Ultra-high-resolution stills' },
  { label: 'LOW LIGHT', value: 'PureVideo', note: 'Clean footage after dark' },
  { label: 'EDITING', value: 'AI Director', note: 'Auto highlight edits' },
  { label: 'WATERPROOF', value: <CountUp to={20} suffix="m" />, note: 'Adventure ready' },
];

export default function Rail() {
  return (
    <section className="x6-rail" aria-label="Key specifications">
      <m.div
        className="x6-rail-inner"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
      >
        {SPECS.map((s) => (
          <m.div key={s.label} className="x6-spec" variants={fadeUp}>
            <div className="x6-mono" style={{ fontSize: 11, letterSpacing: '.16em', color: '#8B95A3' }}>{s.label}</div>
            <div style={{ marginTop: 10, fontSize: 30, fontWeight: 700, letterSpacing: '-0.01em', color: '#F5F7FA', fontVariantNumeric: 'tabular-nums' }}>{s.value}</div>
            <div style={{ marginTop: 6, fontSize: 14, lineHeight: 1.5, color: '#A9B2BF' }}>{s.note}</div>
          </m.div>
        ))}
      </m.div>
    </section>
  );
}
