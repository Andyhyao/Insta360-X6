import { m } from 'framer-motion';

export default function Footer() {
  return (
<m.footer className="x6-foot" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1 }}>
<div className="x6-foot-inner">
<a href="#top" style={{ display: "flex", alignItems: "center", gap: "10px", color: "#FFFFFF", minHeight: "44px" }}>
<span style={{ fontSize: "19px", fontWeight: "700", letterSpacing: "-0.01em" }}>Insta360</span>
<span className="x6-mono" style={{ fontSize: "11px", fontWeight: "600", letterSpacing: ".08em", padding: "3px 7px", border: "1px solid rgba(255,255,255,.4)", borderRadius: "4px" }}>X6</span>
</a>
<nav className="x6-foot-links" aria-label="Footer">
<a href="#features">Features</a>
<a href="#create">Create</a>
<a href="#accessories">Accessories</a>
<a href="#specs">Specs</a>
<a href="https://www.insta360.com/support" target="_blank" rel="noopener noreferrer">Support</a>
</nav>
<div className="x6-social">
<a href="https://www.youtube.com/@Insta360" target="_blank" rel="noopener noreferrer" aria-label="Insta360 on YouTube (opens in a new tab)"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2.5" y="5.5" width="19" height="13" rx="4"></rect><path d="M10 9.2v5.6l4.8-2.8z" fill="currentColor"></path></svg></a>
<a href="https://www.instagram.com/insta360/" target="_blank" rel="noopener noreferrer" aria-label="Insta360 on Instagram (opens in a new tab)"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.2" cy="6.8" r=".9" fill="currentColor" stroke="none"></circle></svg></a>
<a href="https://www.tiktok.com/@insta360_official" target="_blank" rel="noopener noreferrer" aria-label="Insta360 on TikTok (opens in a new tab)"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13.5 3.5v11.2a3.3 3.3 0 1 1-3.3-3.3"></path><path d="M13.5 3.5c.4 2.6 2.4 4.4 5 4.6"></path></svg></a>
<a href="https://www.facebook.com/insta360" target="_blank" rel="noopener noreferrer" aria-label="Insta360 on Facebook (opens in a new tab)"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14.5 8H16.5V4.5H14.5A3.5 3.5 0 0 0 11 8v2.5H8.5V14H11v6.5h3.5V14h2.4l.6-3.5h-3V8.6c0-.3.3-.6.6-.6z"></path></svg></a>
<a href="https://x.com/insta360" target="_blank" rel="noopener noreferrer" aria-label="Insta360 on X (opens in a new tab)"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4.5 4.5l15 15M19.5 4.5l-15 15"></path></svg></a>
</div>
</div>
<div className="x6-foot-legal x6-mono" style={{ fontSize: "11px", letterSpacing: ".1em", color: "#8B95A3" }}>
<span>© 2026 INSTA360 X6 · CONCEPT REDESIGN</span>
<span>NOT AN OFFICIAL INSTA360 PAGE</span>
</div>
</m.footer>
  );
}
