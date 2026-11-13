import { MotionConfig } from 'framer-motion';
import Nav from './sections/Nav.jsx';
import Hero from './sections/Hero.jsx';
import Rail from './sections/Rail.jsx';
import Experience from './sections/Experience.jsx';
import Features from './sections/Features.jsx';
import Ai from './sections/Ai.jsx';
import Explore from './sections/Explore.jsx';
import Create from './sections/Create.jsx';
import Uses from './sections/Uses.jsx';
import Specs from './sections/Specs.jsx';
import Cta from './sections/Cta.jsx';
import Footer from './sections/Footer.jsx';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="x6-root" id="top">
        <Nav />
        <Hero />
        <Rail />
        <Experience />
        <Features />
        <Ai />
        <Explore />
        <Create />
        <Uses />
        <Specs />
        <Cta />
        <Footer />
      </div>
    </MotionConfig>
  );
}
