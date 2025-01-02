import logo from './logo.svg';
import './App.css';

import Hero from './section/hero';
import Features from './section/features';
import Coin from './section/coin';
import StickyCards from './section/steps';
import Community from './section/community';
import Download from './section/download';
import Steps from './section/steps';

function App() {
  return (
    <div className='overflow-hidden'>
   
    <Hero/>
    <Features/>
    <Coin/>
 <Steps/>
    <Community/>
    <Download/>
    </div>
  );
}

export default App;
