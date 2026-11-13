import { useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { ACCENT, EASE } from '../motion.jsx';

const LINKS = [
  ['Overview', '#overview', '01'],
  ['360 Experience', '#experience', '02'],
  ['Features', '#features', '03'],
  ['Create', '#create', '06'],
  ['Accessories', '#accessories', '08'],
  ['Specs', '#specs', '08'],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (y) => setSolid(y > 40));

  return (
    <motion.header
      className={`x6-nav${solid ? ' x6-nav--solid' : ''}`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
    >
      <nav className="x6-nav-inner" aria-label="Primary">
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#FFFFFF' }}>
          <span style={{ fontSize: 19, fontWeight: 700, letterSpacing: '-0.01em' }}>Insta360</span>
          <span
            className="x6-mono"
            style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.08em', padding: '3px 7px', border: '1px solid rgba(255,255,255,.4)', borderRadius: 4 }}
          >
            X6
          </span>
        </a>
        <div className="x6-links">
          <a href="#overview" style={{ fontSize: 14, color: '#FFFFFF', padding: '28px 0 26px', borderBottom: `2px solid ${ACCENT}` }}>Overview</a>
          <a href="#features" style={{ fontSize: 14, color: '#C3CAD4' }}>Features</a>
          <a href="#create" style={{ fontSize: 14, color: '#C3CAD4' }}>Create</a>
          <a href="#accessories" style={{ fontSize: 14, color: '#C3CAD4' }}>Accessories</a>
          <a href="#specs" style={{ fontSize: 14, color: '#C3CAD4' }}>Specs</a>
        </div>
        <div className="x6-nav-right">
          <a className="x6-compare" href="#specs" style={{ fontSize: 14, color: '#C3CAD4' }}>Compare</a>
          <motion.a
            className="x6-nav-buy"
            href="#buy"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{ display: 'inline-flex', alignItems: 'center', height: 44, padding: '0 20px', borderRadius: 999, background: ACCENT, color: '#FFFFFF', fontSize: 14, fontWeight: 600 }}
          >
            Buy Now
          </motion.a>
          <button
            className="x6-burger"
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="x6-mobile-menu"
            onClick={() => setOpen((o) => !o)}
            style={{ width: 44, height: 44, alignItems: 'center', justifyContent: 'center', background: 'transparent', border: '1px solid rgba(255,255,255,.2)', borderRadius: 999, color: '#FFFFFF', cursor: 'pointer' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <motion.path
                initial={false}
                animate={{ d: open ? 'M6 6L18 18' : 'M4 8L20 8' }}
                transition={{ duration: 0.3, ease: EASE }}
              />
              <motion.path
                initial={false}
                animate={{ d: open ? 'M18 6L6 18' : 'M4 16L20 16' }}
                transition={{ duration: 0.3, ease: EASE }}
              />
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="x6-mmenu"
            id="x6-mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <motion.nav
              aria-label="Mobile"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } } }}
            >
              {LINKS.map(([label, href, num]) => (
                <motion.a
                  key={label}
                  className="x6-mlink"
                  href={href}
                  onClick={() => setOpen(false)}
                  variants={{ hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE } } }}
                >
                  {label}
                  <span className="x6-mono" style={{ fontSize: 11, letterSpacing: '.14em', color: '#8B95A3' }}>{num}</span>
                </motion.a>
              ))}
            </motion.nav>
            <a
              href="#buy"
              onClick={() => setOpen(false)}
              style={{ marginTop: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, height: 54, borderRadius: 999, background: ACCENT, color: '#FFFFFF', fontSize: 16, fontWeight: 600 }}
            >
              Buy Now
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
