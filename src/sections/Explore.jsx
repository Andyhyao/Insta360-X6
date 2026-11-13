import { m } from 'framer-motion';
import { StaggerText, Carousel, MotionCard, group, fadeUp } from '../motion.jsx';

export default function Explore() {
  return (
<section className="x6-s5" id="explore" aria-labelledby="x6-s5-title">
<m.div className="x6-s2-head" style={{ maxWidth: "1200px" }} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={group}>
<m.div className="x6-mono" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", fontSize: "12px", fontWeight: "500", letterSpacing: ".18em", color: "#A9B2BF" }} variants={fadeUp}>
<span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#1F6BFF", boxShadow: "0 0 10px #1F6BFF" }}></span>
<span>05 / BUILT TO EXPLORE</span>
</m.div>
<StaggerText as="h2" id="x6-s5-title" className="x6-h2" style={{ margin: "22px 0 0", fontWeight: "700", letterSpacing: "-0.028em", lineHeight: "1.05" }} segments={[{"t": "Keep Shooting.", "c": "#F5F7FA", "block": false}, {"t": "Go Anywhere.", "c": "#7F8B9D", "block": false}]} />
<m.p style={{ margin: "20px auto 0", maxWidth: "600px", fontSize: "18px", lineHeight: "1.6", color: "#B3BCC8" }} variants={fadeUp}>A camera built for the places worth remembering.</m.p>
</m.div>
<Carousel className="x6-s4-grid" id="x6-car-explore">
<MotionCard className="x6-ai-card x6-batt-card" as="article">
<div className="x6-ai-media" style={{ right: "-110px" }}>
<img loading="lazy" decoding="async" src="/assets/1b5248c529ddd34a9b93932c46118a3d.webp" alt="Mountain ridge in morning light" width="404" height="297" style={{ width: "404px", height: "auto", aspectRatio: "404 / 297" }} />
</div>
<div className="x6-ai-scrim"></div>
<div className="x6-ai-text" style={{ maxWidth: "300px" }}>
<h3 style={{ margin: "0", fontSize: "26px", fontWeight: "700", letterSpacing: "-0.02em", lineHeight: "1.1", color: "#F5F7FA" }}>140-Minute Battery</h3>
<p style={{ margin: "12px 0 0", fontSize: "16px", lineHeight: "1.5", color: "#C9D0DA" }}>All-day adventure.</p>
<div style={{ marginTop: "22px", display: "flex", alignItems: "center", gap: "14px" }}>
<span className="x6-ico" style={{ width: "46px", height: "46px" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="7" width="16" height="10" rx="2"></rect><path d="M21 10.5v3"></path><path d="M7 10v4M10.5 10v4M14 10v4"></path></svg></span>
<div>
<div style={{ fontSize: "20px", fontWeight: "700", letterSpacing: "-0.01em", color: "#F5F7FA" }}>140 min</div>
<div className="x6-mono" style={{ marginTop: "3px", fontSize: "11px", letterSpacing: ".14em", color: "#A9B2BF" }}>AT 8K 30FPS</div>
</div>
</div>
<a className="x6-ai-link" href="#explore" aria-label="Learn more about battery life">Learn more <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1F6BFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></a>
</div>
</MotionCard>
<MotionCard className="x6-ai-card" as="article">
<div className="x6-ai-media" style={{ right: "-210px" }}>
<img loading="lazy" decoding="async" src="/assets/b5bdd5cc87de533a6319f4f400e8f7f0.jpg" alt="" style={{ transform: "scaleX(-1)" }} />
</div>
<div className="x6-ai-scrim"></div>
<div className="x6-art" aria-hidden="true">
<div style={{ position: "absolute", left: "70px", top: "60px", width: "190px", height: "190px", borderRadius: "50%", background: "radial-gradient(circle,#1F6BFF 0%,rgba(11,16,24,0) 68%)", opacity: ".55" }}></div>
<img loading="lazy" decoding="async" src="/assets/03c292d03785acdafa287a0fb2d38317.webp" alt="" style={{ position: "absolute", right: "22px", top: "48px", height: "210px", width: "auto", transform: "rotate(-12deg)", filter: "drop-shadow(0 18px 24px rgba(0,0,0,.6))" }} />
</div>
<div className="x6-ai-text" style={{ maxWidth: "300px" }}>
<h3 style={{ margin: "0", fontSize: "26px", fontWeight: "700", letterSpacing: "-0.02em", lineHeight: "1.1", color: "#F5F7FA" }}>Tough Anywhere</h3>
<ul className="x6-feat-list">
<li><span className="x6-ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3.5s6 6.4 6 10.7a6 6 0 0 1-12 0c0-4.3 6-10.7 6-10.7z"></path></svg></span>20m Waterproof</li>
<li><span className="x6-ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9"></path><path d="M9.5 4.5L12 6.5l2.5-2M9.5 19.5L12 17.5l2.5 2"></path></svg></span>−20°C Cold Ready</li>
<li><span className="x6-ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l7.5 2.8v6c0 4.6-3.2 7.7-7.5 9.2-4.3-1.5-7.5-4.6-7.5-9.2v-6z"></path><path d="M9 12l2.2 2.2L15.5 10"></path></svg></span>Rugged Design</li>
</ul>
<a className="x6-ai-link" href="#explore" aria-label="Learn more about durability">Learn more <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1F6BFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></a>
</div>
</MotionCard>
<MotionCard className="x6-ai-card x6-lens-card" style={{ background: "radial-gradient(circle at 72% 42%,#1F6BFF 0%,rgba(11,16,24,0) 52%),#0B1018" }} as="article">
<div style={{ position: "absolute", top: "0", left: "0", right: "0", bottom: "0", background: "rgba(11,16,24,.7)" }}></div>
<div className="x6-art" aria-hidden="true">
<div style={{ boxSizing: "border-box", position: "absolute", left: "56px", top: "56px", width: "81px", height: "84px", display: "none" }}><i className="x6-disc" style={{ left: "63px", top: "0px", width: "18px", height: "84px", boxShadow: "0 0 14px #1F6BFF" }}></i><i className="x6-disc" style={{ left: "40px", top: "6px", width: "16px", height: "72px", boxShadow: "0 0 14px #1F6BFF" }}></i><i className="x6-disc" style={{ left: "19px", top: "11px", width: "14px", height: "62px", boxShadow: "0 0 14px #1F6BFF" }}></i><i className="x6-disc" style={{ left: "0px", top: "16px", width: "12px", height: "52px", boxShadow: "0 0 14px #1F6BFF" }}></i></div>
<img loading="lazy" decoding="async" src="/assets/lens-kit.webp" alt="" style={{ position: "absolute", right: "-38px", top: "84px", height: "230px", width: "auto", transform: "rotate(-8deg)", filter: "drop-shadow(0 20px 28px rgba(0,0,0,.65))" }} />
</div>
<div className="x6-ai-text">
<h3 style={{ margin: "0", fontSize: "26px", fontWeight: "700", letterSpacing: "-0.02em", lineHeight: "1.1", color: "#F5F7FA" }}>Replaceable<br />Lenses 2.0</h3>
<p style={{ margin: "12px 0 0", fontSize: "16px", lineHeight: "1.5", color: "#C9D0DA" }}>Built to take the risk.</p>
<a className="x6-ai-link" href="#explore" aria-label="Learn more about replaceable lenses">Learn more <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1F6BFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></a>
</div>
</MotionCard>
</Carousel>

</section>
  );
}
