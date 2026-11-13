import { m } from 'framer-motion';
import { StaggerText, Carousel, MotionCard, group, fadeUp } from '../motion.jsx';

export default function Features() {
  return (
<section className="x6-s3" id="features" aria-labelledby="x6-s3-title">
<m.div className="x6-s2-head" style={{ maxWidth: "1200px" }} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={group}>
<m.div className="x6-mono" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", fontSize: "12px", fontWeight: "500", letterSpacing: ".18em", color: "#A9B2BF" }} variants={fadeUp}>
<span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#1F6BFF", boxShadow: "0 0 10px #1F6BFF" }}></span>
<span>03 / CORE FEATURES</span>
</m.div>
<StaggerText as="h2" id="x6-s3-title" className="x6-h2" style={{ margin: "22px 0 0", fontWeight: "700", letterSpacing: "-0.028em", lineHeight: "1.05" }} segments={[{"t": "8K 360° Video.", "c": "#F5F7FA", "block": false}, {"t": "Shoot First.", "c": "#7F8B9D", "block": false}, {"t": "Frame Later.", "c": "#7F8B9D", "block": false}]} />
<m.p style={{ margin: "20px auto 0", maxWidth: "600px", fontSize: "18px", lineHeight: "1.6", color: "#B3BCC8" }} variants={fadeUp}>One camera. Infinite compositions.</m.p>
</m.div>
<Carousel className="x6-s3-grid" id="x6-car-features">
<MotionCard className="x6-card" as="article">
<img loading="lazy" decoding="async" src="/assets/e16b30aebc797677e4d891ab75d1bb25.webp" alt="Hiker on a rocky summit facing snowy peaks" style={{ objectPosition: "62% 50%", width: "404px", height: "auto", aspectRatio: "404 / 458" }} width="404" height="458" />
<div className="x6-card-top x6-mono" style={{ fontSize: "11px", letterSpacing: ".16em", color: "#FFFFFF", textShadow: "0 1px 8px rgba(0,0,0,.6)" }}>
<span>01 / 03</span>
<span style={{ padding: "5px 9px", border: "1px solid rgba(255,255,255,.3)", borderRadius: "999px", background: "rgba(5,7,11,.3)" }}>8K · 360°</span>
</div>
<div className="x6-card-body">
<div>
<h3 style={{ margin: "0", fontSize: "30px", fontWeight: "700", letterSpacing: "-0.02em", lineHeight: "1.08", color: "#F5F7FA" }}>8K 360° Video</h3>
<p style={{ margin: "12px 0 0", fontSize: "16px", lineHeight: "1.5", color: "#C9D0DA" }}>Every detail.<br />Every direction.</p>
</div>
<a className="x6-card-more" href="#features" aria-label="Learn more: 8K 360° Video">
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
</a>
</div>
</MotionCard>
<MotionCard className="x6-card" as="article">
<img loading="lazy" decoding="async" src="/assets/50fba34030e67966d32d2a18f8d788fb.webp" alt="Motorcyclist leaning into a coastal bend" style={{ objectPosition: "55% 50%", width: "404px", height: "auto", aspectRatio: "404 / 458" }} width="404" height="458" />
<div className="x6-card-top x6-mono" style={{ fontSize: "11px", letterSpacing: ".16em", color: "#FFFFFF", textShadow: "0 1px 8px rgba(0,0,0,.6)" }}>
<span>02 / 03</span>
<span style={{ padding: "5px 9px", border: "1px solid rgba(255,255,255,.3)", borderRadius: "999px", background: "rgba(5,7,11,.3)" }}>REFRAME</span>
</div>
<div className="x6-card-body">
<div>
<h3 style={{ margin: "0", fontSize: "30px", fontWeight: "700", letterSpacing: "-0.02em", lineHeight: "1.08", color: "#F5F7FA" }}>Shoot First.<br />Frame Later.</h3>
<p style={{ margin: "12px 0 0", fontSize: "16px", lineHeight: "1.5", color: "#C9D0DA" }}>One recording.<br />Infinite compositions.</p>
</div>
<a className="x6-card-more" href="#features" aria-label="Learn more: Shoot First. Frame Later.">
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
</a>
</div>
</MotionCard>
<MotionCard className="x6-card" as="article">
<img loading="lazy" decoding="async" src="/assets/b5bdd5cc87de533a6319f4f400e8f7f0.jpg" alt="Diver gliding over a coral reef" style={{ objectPosition: "30% 50%" }} />
<div className="x6-card-top x6-mono" style={{ fontSize: "11px", letterSpacing: ".16em", color: "#FFFFFF", textShadow: "0 1px 8px rgba(0,0,0,.6)" }}>
<span>03 / 03</span>
<span style={{ padding: "5px 9px", border: "1px solid rgba(255,255,255,.3)", borderRadius: "999px", background: "rgba(5,7,11,.3)" }}>3RD PERSON</span>
</div>
<div className="x6-card-body">
<div>
<h3 style={{ margin: "0", fontSize: "30px", fontWeight: "700", letterSpacing: "-0.02em", lineHeight: "1.08", color: "#F5F7FA" }}>Invisible<br />Selfie Stick</h3>
<p style={{ margin: "12px 0 0", fontSize: "16px", lineHeight: "1.5", color: "#C9D0DA" }}>Get the drone effect.<br />Without the drone.</p>
</div>
<a className="x6-card-more" href="#features" aria-label="Learn more: Invisible Selfie Stick">
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
</a>
</div>
</MotionCard>
</Carousel>

</section>
  );
}
