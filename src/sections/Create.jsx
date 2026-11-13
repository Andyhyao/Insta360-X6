import { m } from 'framer-motion';
import { StaggerText, Carousel, MotionCard, group, fadeUp } from '../motion.jsx';

export default function Create() {
  return (
<section className="x6-s6" id="create" aria-labelledby="x6-s6-title">
<m.div className="x6-s2-head" style={{ maxWidth: "1200px" }} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={group}>
<m.div className="x6-mono" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", fontSize: "12px", fontWeight: "500", letterSpacing: ".18em", color: "#A9B2BF" }} variants={fadeUp}>
<span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#1F6BFF", boxShadow: "0 0 10px #1F6BFF" }}></span>
<span>06 / CREATIVE PLAYGROUND</span>
</m.div>
<StaggerText as="h2" id="x6-s6-title" className="x6-h2" style={{ margin: "22px 0 0", fontWeight: "700", letterSpacing: "-0.028em", lineHeight: "1.05" }} segments={[{"t": "Creative", "c": "#F5F7FA", "block": false}, {"t": "Playground.", "c": "#7F8B9D", "block": false}]} />
<m.p style={{ margin: "20px auto 0", maxWidth: "600px", fontSize: "18px", lineHeight: "1.6", color: "#B3BCC8" }} variants={fadeUp}>What will you create?</m.p>
</m.div>
<Carousel className="x6-s6-grid" id="x6-car-create">
<MotionCard className="x6-play" as="article">
<div className="x6-play-media">
<img loading="lazy" decoding="async" src="/assets/0e96d607fdc73b52b18b66e6471f2526.webp" alt="Skier mid-turn in a burst of powder" style={{ objectPosition: "40% 50%", width: "299px", height: "auto", aspectRatio: "299 / 220" }} width="299" height="220" />
<div className="x6-track" aria-hidden="true" style={{ left: "17%", top: "21%", width: "68%", height: "66%" }}>
<i style={{ top: "0", left: "0", borderTopWidth: "2px", borderLeftWidth: "2px" }}></i>
<i style={{ top: "0", right: "0", borderTopWidth: "2px", borderRightWidth: "2px" }}></i>
<i style={{ bottom: "0", left: "0", borderBottomWidth: "2px", borderLeftWidth: "2px" }}></i>
<i style={{ bottom: "0", right: "0", borderBottomWidth: "2px", borderRightWidth: "2px" }}></i>
</div>
<div className="x6-card-top x6-mono" style={{ fontSize: "11px", letterSpacing: ".16em", color: "#FFFFFF", textShadow: "0 1px 8px rgba(0,0,0,.6)" }}>
<span>01 / 04</span>
<span style={{ padding: "5px 9px", border: "1px solid rgba(255,255,255,.3)", borderRadius: "999px", background: "rgba(5,7,11,.3)" }}>SLOW-MO</span>
</div>
</div>
<div className="x6-play-body">
<h3 style={{ margin: "0", fontSize: "22px", fontWeight: "700", letterSpacing: "-0.02em", lineHeight: "1.15", color: "#F5F7FA" }}>Bullet Time</h3>
<p style={{ margin: "8px 0 0", fontSize: "15px", lineHeight: "1.5", color: "#C9D0DA" }}>Defy gravity.</p>
</div>
</MotionCard>
<MotionCard className="x6-play" as="article">
<div className="x6-play-media">
<img loading="lazy" decoding="async" src="/assets/780c8affa99a7080b7d26e0135b35208.webp" alt="Motorcyclist on a coastal road" style={{ objectPosition: "55% 50%", width: "299px", height: "auto", aspectRatio: "299 / 220" }} width="299" height="220" />
<div className="x6-card-top x6-mono" style={{ fontSize: "11px", letterSpacing: ".16em", color: "#FFFFFF", textShadow: "0 1px 8px rgba(0,0,0,.6)" }}>
<span>02 / 04</span>
<span style={{ padding: "5px 9px", border: "1px solid rgba(255,255,255,.3)", borderRadius: "999px", background: "rgba(5,7,11,.3)" }}>SPEED RAMP</span>
</div>
</div>
<div className="x6-play-body">
<h3 style={{ margin: "0", fontSize: "22px", fontWeight: "700", letterSpacing: "-0.02em", lineHeight: "1.15", color: "#F5F7FA" }}>TimeShift</h3>
<p style={{ margin: "8px 0 0", fontSize: "15px", lineHeight: "1.5", color: "#C9D0DA" }}>Make time move faster.</p>
</div>
</MotionCard>
<MotionCard className="x6-play" as="article">
<div className="x6-play-media">
<img loading="lazy" decoding="async" src="/assets/505bc2aa2cff4684eb19d678aa52e780.webp" alt="Star trails circling above a glowing tent" style={{ objectPosition: "50% 70%", width: "299px", height: "auto", aspectRatio: "299 / 220" }} width="299" height="220" />
<div className="x6-card-top x6-mono" style={{ fontSize: "11px", letterSpacing: ".16em", color: "#FFFFFF", textShadow: "0 1px 8px rgba(0,0,0,.6)" }}>
<span>03 / 04</span>
<span style={{ padding: "5px 9px", border: "1px solid rgba(255,255,255,.3)", borderRadius: "999px", background: "rgba(5,7,11,.3)" }}>NIGHT LAPSE</span>
</div>
</div>
<div className="x6-play-body">
<h3 style={{ margin: "0", fontSize: "22px", fontWeight: "700", letterSpacing: "-0.02em", lineHeight: "1.15", color: "#F5F7FA" }}>Starlapse</h3>
<p style={{ margin: "8px 0 0", fontSize: "15px", lineHeight: "1.5", color: "#C9D0DA" }}>Turn the night into motion.</p>
</div>
</MotionCard>
<MotionCard className="x6-play" as="article">
<div className="x6-play-media">
<img loading="lazy" decoding="async" src="/assets/e15037e3f94a23da198c2d0588fbe2df.webp" alt="Mountains and lake wrapped into a tiny planet" style={{ objectPosition: "50% 50%", width: "299px", height: "auto", aspectRatio: "299 / 220" }} width="299" height="220" />
<div className="x6-card-top x6-mono" style={{ fontSize: "11px", letterSpacing: ".16em", color: "#FFFFFF", textShadow: "0 1px 8px rgba(0,0,0,.6)" }}>
<span>04 / 04</span>
<span style={{ padding: "5px 9px", border: "1px solid rgba(255,255,255,.3)", borderRadius: "999px", background: "rgba(5,7,11,.3)" }}>360° WARP</span>
</div>
</div>
<div className="x6-play-body">
<h3 style={{ margin: "0", fontSize: "22px", fontWeight: "700", letterSpacing: "-0.02em", lineHeight: "1.15", color: "#F5F7FA" }}>Tiny Planet</h3>
<p style={{ margin: "8px 0 0", fontSize: "15px", lineHeight: "1.5", color: "#C9D0DA" }}>Little planet. Big world.</p>
</div>
</MotionCard>
</Carousel>

</section>
  );
}
