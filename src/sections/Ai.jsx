import { m } from 'framer-motion';
import { StaggerText, Carousel, MotionCard, group, fadeUp } from '../motion.jsx';

export default function Ai() {
  return (
<section className="x6-s4" id="ai" aria-labelledby="x6-s4-title">
<m.div className="x6-s2-head" style={{ maxWidth: "1200px" }} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={group}>
<m.div className="x6-mono" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", fontSize: "12px", fontWeight: "500", letterSpacing: ".18em", color: "#A9B2BF" }} variants={fadeUp}>
<span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#1F6BFF", boxShadow: "0 0 10px #1F6BFF" }}></span>
<span>04 / AI POWERED</span>
</m.div>
<StaggerText as="h2" id="x6-s4-title" className="x6-h2" style={{ margin: "22px 0 0", fontWeight: "700", letterSpacing: "-0.028em", lineHeight: "1.05" }} segments={[{"t": "AI-Powered.", "c": "#F5F7FA", "block": false}, {"t": "More Possibilities.", "c": "#7F8B9D", "block": false}]} />
<m.p style={{ margin: "20px auto 0", maxWidth: "600px", fontSize: "18px", lineHeight: "1.6", color: "#B3BCC8" }} variants={fadeUp}>Your camera. With a gimbal brain.</m.p>
</m.div>
<Carousel className="x6-s4-grid" id="x6-car-ai">
<MotionCard className="x6-ai-card" as="article">
<div className="x6-ai-media" style={{ right: "-120px" }}>
<img loading="lazy" decoding="async" src="/assets/cc0da12e48f3799fa954331d52fbc316.jpg" alt="Hiker on a summit, framed by an AI tracking box" />
<div className="x6-track" aria-hidden="true" style={{ left: "42.5%", top: "56%", width: "20.5%", height: "41%" }}>
<i style={{ top: "0", left: "0", borderTopWidth: "2px", borderLeftWidth: "2px" }}></i>
<i style={{ top: "0", right: "0", borderTopWidth: "2px", borderRightWidth: "2px" }}></i>
<i style={{ bottom: "0", left: "0", borderBottomWidth: "2px", borderLeftWidth: "2px" }}></i>
<i style={{ bottom: "0", right: "0", borderBottomWidth: "2px", borderRightWidth: "2px" }}></i>
<span className="x6-mono" style={{ position: "absolute", bottom: "100%", left: "0", marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap", fontSize: "9px", letterSpacing: ".14em", color: "#FFFFFF", textShadow: "0 1px 6px rgba(0,0,0,.8)" }}><span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#1F6BFF", boxShadow: "0 0 8px #1F6BFF" }}></span>AI TRACKING</span>
</div>
</div>
<div className="x6-ai-scrim"></div>
<div className="x6-ai-text">
<h3 style={{ margin: "0", fontSize: "26px", fontWeight: "700", letterSpacing: "-0.02em", lineHeight: "1.1", color: "#F5F7FA" }}>InstaFrame 2.0</h3>
<p style={{ margin: "12px 0 0", fontSize: "16px", lineHeight: "1.5", color: "#C9D0DA" }}>AI tracking.<br />Effortless shots.</p>
<a className="x6-ai-link" href="#ai" aria-label="Learn more about InstaFrame 2.0">Learn more <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1F6BFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></a>
</div>
</MotionCard>
<MotionCard className="x6-ai-card" as="article">
<div className="x6-ai-media" style={{ right: "-250px" }}>
<img loading="lazy" decoding="async" src="/assets/085fd3e0c3e1d150785a8de554e7db11.webp" alt="City towers lit up at night" width="404" height="297" style={{ width: "404px", height: "auto", aspectRatio: "404 / 297" }} />
</div>
<div className="x6-ai-scrim"></div>
<span className="x6-mono" style={{ position: "absolute", zIndex: "2", top: "22px", right: "22px", padding: "5px 9px", border: "1px solid rgba(255,255,255,.3)", borderRadius: "999px", background: "rgba(5,7,11,.3)", fontSize: "11px", letterSpacing: ".16em", color: "#FFFFFF" }}>LOW LIGHT</span>
<div className="x6-ai-text">
<h3 style={{ margin: "0", fontSize: "26px", fontWeight: "700", letterSpacing: "-0.02em", lineHeight: "1.1", color: "#F5F7FA" }}>PureVideo</h3>
<p style={{ margin: "12px 0 0", fontSize: "16px", lineHeight: "1.5", color: "#C9D0DA" }}>See what your<br />eyes see.<br />Even at night.</p>
<a className="x6-ai-link" href="#ai" aria-label="Learn more about PureVideo">Learn more <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1F6BFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></a>
</div>
</MotionCard>
<MotionCard className="x6-ai-card x6-ai-card--director" style={{ background: "radial-gradient(circle at 76% 50%,#1F6BFF 0%,rgba(11,16,24,0) 56%),#0B1018" }} as="article">
<div style={{ position: "absolute", top: "0", left: "0", right: "0", bottom: "0", background: "rgba(11,16,24,.72)" }}></div>
<div className="x6-ai-collage" aria-hidden="true">
<div className="x6-ai-thumb" style={{  }}>
<img loading="lazy" decoding="async" src="/assets/8c5304eeffa8ead8fb1486d2847b010d.jpg" alt="" />
<span className="x6-mono" style={{ position: "absolute", bottom: "4px", right: "6px", fontSize: "8px", letterSpacing: ".1em", color: "#FFFFFF", textShadow: "0 1px 4px rgba(0,0,0,.9)" }}>00:12</span>
</div>
<div className="x6-ai-thumb" style={{ border: "1.5px solid #FFFFFF", boxShadow: "0 0 0 1px #1F6BFF,0 0 22px #1F6BFF" }}>
<img loading="lazy" decoding="async" src="/assets/7125e450b71f92a33a51af5382660b09.jpg" alt="" />
<span className="x6-mono" style={{ position: "absolute", top: "5px", left: "5px", padding: "2px 5px", borderRadius: "4px", background: "#1F6BFF", fontSize: "8px", letterSpacing: ".12em", color: "#FFFFFF" }}>HIGHLIGHT</span>
<span className="x6-mono" style={{ position: "absolute", bottom: "4px", right: "6px", fontSize: "8px", letterSpacing: ".1em", color: "#FFFFFF", textShadow: "0 1px 4px rgba(0,0,0,.9)" }}>01:47</span>
</div>
<div className="x6-ai-thumb" style={{  }}>
<img loading="lazy" decoding="async" src="/assets/b5bdd5cc87de533a6319f4f400e8f7f0.jpg" alt="" />
<span className="x6-mono" style={{ position: "absolute", bottom: "4px", right: "6px", fontSize: "8px", letterSpacing: ".1em", color: "#FFFFFF", textShadow: "0 1px 4px rgba(0,0,0,.9)" }}>03:05</span>
</div>
<div className="x6-ai-thumb" style={{  }}>
<img loading="lazy" decoding="async" src="/assets/cc0da12e48f3799fa954331d52fbc316.jpg" alt="" />
<span className="x6-mono" style={{ position: "absolute", bottom: "4px", right: "6px", fontSize: "8px", letterSpacing: ".1em", color: "#FFFFFF", textShadow: "0 1px 4px rgba(0,0,0,.9)" }}>04:31</span>
</div>
</div>
<div className="x6-ai-text">
<h3 style={{ margin: "0", fontSize: "26px", fontWeight: "700", letterSpacing: "-0.02em", lineHeight: "1.1", color: "#F5F7FA" }}>AI Director</h3>
<p style={{ margin: "12px 0 0", fontSize: "16px", lineHeight: "1.5", color: "#C9D0DA" }}>Auto edit.<br />Highlight the best moments for you.</p>
<a className="x6-ai-link" href="#ai" aria-label="Learn more about AI Director">Learn more <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1F6BFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></a>
</div>
</MotionCard>
</Carousel>

</section>
  );
}
