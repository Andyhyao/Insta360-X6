import { m } from 'framer-motion';
import { StaggerText, Carousel, MotionCard, group, fadeUp, rows, rowIn } from '../motion.jsx';

export default function Specs() {
  return (
<section className="x6-s8" id="specs" aria-labelledby="x6-s8-title">
<m.div className="x6-s2-head" style={{ maxWidth: "1200px" }} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={group}>
<m.div className="x6-mono" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", fontSize: "12px", fontWeight: "500", letterSpacing: ".18em", color: "#A9B2BF" }} variants={fadeUp}>
<span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#1F6BFF", boxShadow: "0 0 10px #1F6BFF" }}></span>
<span>08 / WHY CHOOSE X6</span>
</m.div>
<StaggerText as="h2" id="x6-s8-title" className="x6-h2" style={{ margin: "22px 0 0", fontWeight: "700", letterSpacing: "-0.028em", lineHeight: "1.05" }} segments={[{"t": "Why", "c": "#F5F7FA", "block": false}, {"t": "X6?", "c": "#7F8B9D", "block": false}]} />
<m.p style={{ margin: "20px auto 0", maxWidth: "600px", fontSize: "18px", lineHeight: "1.6", color: "#B3BCC8" }} variants={fadeUp}>A massive leap in every way.</m.p>
</m.div>
<div className="x6-s8-grid">
<m.div className="x6-box x6-why" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
<div className="x6-why-media">
<img loading="lazy" decoding="async" src="/assets/379b03a88a22dd0b14a3b55810904e93.webp" alt="Insta360 X6 front and back above a mountain summit" style={{ objectPosition: "47% 50%", width: "281px", height: "auto", aspectRatio: "281 / 460" }} width="281" height="460" />
</div>
<div className="x6-why-table">
<table className="x6-spec-table">
<caption className="x6-sr">Insta360 X6 key specifications</caption>
<thead><tr><th scope="col">FEATURE</th><th scope="col">X6</th></tr></thead>
<m.tbody initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={rows}>
<m.tr variants={rowIn}><th scope="row">360 Video</th><td>8K 30fps</td></m.tr>
<m.tr variants={rowIn}><th scope="row">Sensor</th><td>Dual Sony 1/1.7"</td></m.tr>
<m.tr variants={rowIn}><th scope="row">360 Photo</th><td>120MP</td></m.tr>
<m.tr variants={rowIn}><th scope="row">Flat Video</th><td>5K60 / 4K120</td></m.tr>
<m.tr variants={rowIn}><th scope="row">Battery</th><td>140 min @ 8K30</td></m.tr>
<m.tr variants={rowIn}><th scope="row">Display</th><td>2.3" OLED</td></m.tr>
<m.tr variants={rowIn}><th scope="row">Color</th><td>10-bit + H-Log / Dolby Vision</td></m.tr>
<m.tr variants={rowIn}><th scope="row">Lens</th><td>Replaceable Lens 2.0</td></m.tr>
<m.tr variants={rowIn}><th scope="row">AI</th><td>InstaFrame 2.0 + AI Director</td></m.tr>
<m.tr variants={rowIn}><th scope="row">Waterproof</th><td>20m (60m with Dive Case)</td></m.tr>
</m.tbody>
</table>
</div>
</m.div>
<m.div className="x6-box x6-acc" id="accessories" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ delay: 0.12 }}>
<div className="x6-acc-head">
<div>
<h3 style={{ margin: "0", fontSize: "24px", fontWeight: "700", letterSpacing: "-0.02em", lineHeight: "1.15", color: "#F5F7FA" }}>Build Your X6</h3>
<p style={{ margin: "6px 0 0", fontSize: "15px", lineHeight: "1.5", color: "#C9D0DA" }}>Accessories for every adventure.</p>
</div>
<a className="x6-ai-link" href="#accessories" style={{ marginTop: "0" }}>View all accessories <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1F6BFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></a>
</div>
<Carousel className="x6-acc-grid" id="x6-car-acc">
<MotionCard className="x6-acc-tile" href="#accessories" as="a">
<span className="x6-acc-art"><svg width="120" height="80" viewBox="0 0 120 80" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 74L28 64" strokeWidth="8" stroke="#5E6B7D"></path><path d="M28 64L90 20" strokeWidth="3.2"></path><path d="M46 51.5l2.6 3.6M64 38.7l2.6 3.6M80 27.3l2.6 3.6"></path><rect x="86" y="3" width="15" height="26" rx="4.5" transform="rotate(35 93.5 16)"></rect><circle cx="91" cy="12" r="3.2" stroke="#1F6BFF"></circle></svg></span>
<span>Selfie Stick</span>
</MotionCard>
<MotionCard className="x6-acc-tile" href="#accessories" as="a">
<span className="x6-acc-art"><svg width="120" height="80" viewBox="0 0 120 80" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="46" cy="40" r="25"></circle><circle cx="46" cy="40" r="17"></circle><circle cx="46" cy="40" r="9" stroke="#1F6BFF"></circle><path d="M34 31a14 14 0 0 1 9-5" stroke="#FFFFFF" strokeOpacity=".7"></path><circle cx="90" cy="46" r="15"></circle><circle cx="90" cy="46" r="8.5"></circle><circle cx="90" cy="46" r="3" stroke="#1F6BFF"></circle></svg></span>
<span>Lens Kit</span>
</MotionCard>
<MotionCard className="x6-acc-tile" href="#accessories" as="a">
<span className="x6-acc-art"><svg width="120" height="80" viewBox="0 0 120 80" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="30" y="60" width="60" height="9" rx="3"></rect><path d="M60 60V44"></path><circle cx="60" cy="37" r="7.5" stroke="#1F6BFF"></circle><path d="M60 29.5L74 16h16"></path><rect x="86" y="10" width="12" height="12" rx="3"></rect><circle cx="46" cy="50" r="4"></circle><path d="M50 50h10"></path></svg></span>
<span>Mounts</span>
</MotionCard>
<MotionCard className="x6-acc-tile" href="#accessories" as="a">
<span className="x6-acc-art"><svg width="120" height="80" viewBox="0 0 120 80" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="36" y="10" width="48" height="60" rx="11"></rect><circle cx="60" cy="31" r="14"></circle><circle cx="60" cy="31" r="8" stroke="#1F6BFF"></circle><path d="M52 24a10 10 0 0 1 6-4" stroke="#FFFFFF" strokeOpacity=".7"></path><path d="M30 38h6M84 38h6M30 46h6M84 46h6"></path><rect x="50" y="52" width="20" height="9" rx="3"></rect></svg></span>
<span>Dive Case</span>
</MotionCard>
<MotionCard className="x6-acc-tile" href="#accessories" as="a">
<span className="x6-acc-art"><svg width="120" height="80" viewBox="0 0 120 80" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="28" y="20" width="58" height="40" rx="7"></rect><rect x="86" y="32" width="7" height="16" rx="2"></rect><rect x="36" y="28" width="9" height="24" rx="2" fill="#1F6BFF" stroke="none"></rect><rect x="49" y="28" width="9" height="24" rx="2" fill="#1F6BFF" stroke="none"></rect><rect x="62" y="28" width="9" height="24" rx="2" fill="#1F6BFF" stroke="none"></rect><rect x="75" y="28" width="6" height="24" rx="2" strokeOpacity=".5"></rect></svg></span>
<span>Battery</span>
</MotionCard>
<MotionCard className="x6-acc-tile" href="#accessories" as="a">
<span className="x6-acc-art"><svg width="120" height="80" viewBox="0 0 120 80" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M26 58h68l-7 12H33z"></path><path d="M46 58V46h28v12"></path><rect x="40" y="34" width="40" height="12" rx="3"></rect><path d="M60 34v-8"></path><circle cx="60" cy="22" r="4" stroke="#1F6BFF"></circle><path d="M80 52l18-8" strokeWidth="3"></path></svg></span>
<span>Quick Release Mount</span>
</MotionCard>
</Carousel>

</m.div>
</div>
</section>
  );
}
