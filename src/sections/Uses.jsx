import { motion } from 'framer-motion';
import { StaggerText, Carousel, MotionCard, group, fadeUp, rows, rowIn } from '../motion.jsx';

export default function Uses() {
  return (
<section className="x6-s7" id="uses" aria-labelledby="x6-s7-title">
<motion.div className="x6-s2-head" style={{ maxWidth: "1200px" }} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={group}>
<motion.div className="x6-mono" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", fontSize: "12px", fontWeight: "500", letterSpacing: ".18em", color: "#A9B2BF" }} variants={fadeUp}>
<span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#1F6BFF", boxShadow: "0 0 10px #1F6BFF" }}></span>
<span>07 / MADE FOR EVERY DIRECTION</span>
</motion.div>
<StaggerText as="h2" id="x6-s7-title" className="x6-h2" style={{ margin: "22px 0 0", fontWeight: "700", letterSpacing: "-0.028em", lineHeight: "1.05" }} segments={[{"t": "Made for", "c": "#F5F7FA", "block": false}, {"t": "Every Direction.", "c": "#7F8B9D", "block": false}]} />
<motion.p style={{ margin: "20px auto 0", maxWidth: "600px", fontSize: "18px", lineHeight: "1.6", color: "#B3BCC8" }} variants={fadeUp}>Different stories. Same camera.</motion.p>
</motion.div>
<Carousel className="x6-s7-grid" id="x6-car-uses">
<MotionCard className="x6-card x6-card--use" as="article">
<img src="/assets/8c5304eeffa8ead8fb1486d2847b010d.jpg" alt="Motorcyclist leaning into a coastal bend" style={{ objectPosition: "55% 45%" }} />
<div className="x6-card-top x6-mono" style={{ fontSize: "11px", letterSpacing: ".16em", color: "#FFFFFF", textShadow: "0 1px 8px rgba(0,0,0,.6)" }}>
<span>01 / 06</span>
</div>
<div className="x6-card-body">
<div>
<h3 style={{ margin: "0", fontSize: "22px", fontWeight: "700", letterSpacing: "-0.02em", lineHeight: "1.15", color: "#F5F7FA" }}>Motorcycle</h3>
<p style={{ margin: "6px 0 0", fontSize: "15px", lineHeight: "1.45", color: "#C9D0DA" }}>Ride. Record. Reframe later.</p>
</div>
</div>
</MotionCard>
<MotionCard className="x6-card x6-card--use" as="article">
<img src="/assets/a2799dcfb927ab56f4dc228ebdb9a19a.png" alt="Hiker facing snowy peaks from a summit" style={{ objectPosition: "60% 55%", width: "408px", height: "auto", aspectRatio: "408 / 248" }} width="408" height="248" />
<div className="x6-card-top x6-mono" style={{ fontSize: "11px", letterSpacing: ".16em", color: "#FFFFFF", textShadow: "0 1px 8px rgba(0,0,0,.6)" }}>
<span>02 / 06</span>
</div>
<div className="x6-card-body">
<div>
<h3 style={{ margin: "0", fontSize: "22px", fontWeight: "700", letterSpacing: "-0.02em", lineHeight: "1.15", color: "#F5F7FA" }}>Adventure</h3>
<p style={{ margin: "6px 0 0", fontSize: "15px", lineHeight: "1.45", color: "#C9D0DA" }}>Every climb. Every angle.</p>
</div>
</div>
</MotionCard>
<MotionCard className="x6-card x6-card--use" as="article">
<img src="/assets/b5bdd5cc87de533a6319f4f400e8f7f0.jpg" alt="Diver gliding over a coral reef" style={{ objectPosition: "35% 50%" }} />
<div className="x6-card-top x6-mono" style={{ fontSize: "11px", letterSpacing: ".16em", color: "#FFFFFF", textShadow: "0 1px 8px rgba(0,0,0,.6)" }}>
<span>03 / 06</span>
</div>
<div className="x6-card-body">
<div>
<h3 style={{ margin: "0", fontSize: "22px", fontWeight: "700", letterSpacing: "-0.02em", lineHeight: "1.15", color: "#F5F7FA" }}>Water</h3>
<p style={{ margin: "6px 0 0", fontSize: "15px", lineHeight: "1.45", color: "#C9D0DA" }}>Dive into another perspective.</p>
</div>
</div>
</MotionCard>
<MotionCard className="x6-card x6-card--use" as="article">
<img src="/assets/7125e450b71f92a33a51af5382660b09.jpg" alt="Skier carving through fresh powder" style={{ objectPosition: "40% 40%" }} />
<div className="x6-card-top x6-mono" style={{ fontSize: "11px", letterSpacing: ".16em", color: "#FFFFFF", textShadow: "0 1px 8px rgba(0,0,0,.6)" }}>
<span>04 / 06</span>
</div>
<div className="x6-card-body">
<div>
<h3 style={{ margin: "0", fontSize: "22px", fontWeight: "700", letterSpacing: "-0.02em", lineHeight: "1.15", color: "#F5F7FA" }}>Snow</h3>
<p style={{ margin: "6px 0 0", fontSize: "15px", lineHeight: "1.45", color: "#C9D0DA" }}>Capture the entire run.</p>
</div>
</div>
</MotionCard>
<MotionCard className="x6-card x6-card--use" as="article">
<img src="/assets/ac9d75d46f742808a951ee8785b7f587.jpg" alt="City towers lit up at night" style={{ objectPosition: "30% 60%" }} />
<div className="x6-card-top x6-mono" style={{ fontSize: "11px", letterSpacing: ".16em", color: "#FFFFFF", textShadow: "0 1px 8px rgba(0,0,0,.6)" }}>
<span>05 / 06</span>
</div>
<div className="x6-card-body">
<div>
<h3 style={{ margin: "0", fontSize: "22px", fontWeight: "700", letterSpacing: "-0.02em", lineHeight: "1.15", color: "#F5F7FA" }}>Travel</h3>
<p style={{ margin: "6px 0 0", fontSize: "15px", lineHeight: "1.45", color: "#C9D0DA" }}>Never miss the moment behind you.</p>
</div>
</div>
</MotionCard>
<MotionCard className="x6-card x6-card--use" as="article">
<img src="/assets/32130dacbeb2b4a60973be52d6a96bc9.jpg" alt="Two Insta360 X6 cameras above a mountain summit" style={{ objectPosition: "54% 45%" }} />
<div className="x6-card-top x6-mono" style={{ fontSize: "11px", letterSpacing: ".16em", color: "#FFFFFF", textShadow: "0 1px 8px rgba(0,0,0,.6)" }}>
<span>06 / 06</span>
</div>
<div className="x6-card-body">
<div>
<h3 style={{ margin: "0", fontSize: "22px", fontWeight: "700", letterSpacing: "-0.02em", lineHeight: "1.15", color: "#F5F7FA" }}>Creator</h3>
<p style={{ margin: "6px 0 0", fontSize: "15px", lineHeight: "1.45", color: "#C9D0DA" }}>One camera. Endless compositions.</p>
</div>
</div>
</MotionCard>
</Carousel>

</section>
  );
}
