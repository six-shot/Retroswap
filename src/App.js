import logo from "./logo.svg";
import "./App.css";

import Hero from "./section/hero";
import Features from "./section/features";
import Coin from "./section/coin";
import Community from "./section/community";
import Download from "./section/download";
import Steps from "./section/steps";
import CTA from "./section/cta";
import FAQ from "./section/FAQ";
import Footer from "./section/footer";
import AccordionContainer from "./section/FAQ";

function App() {
  return (
    <div className="">
      <Hero />
      <Features />
      <Coin />
      <Steps />
      <Community />
      <Download />
      <CTA />
      <AccordionContainer />
      <Footer/>
    </div>
  );
}

export default App;
