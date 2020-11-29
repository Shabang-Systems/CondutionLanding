import Hero from './Hero';
import Story from './Story';
import Downloads from './Downloads';
import './App.css';
import './Nav.css';
import useScrollInfo from 'react-element-scroll-hook';

import logo from './images/logo.png';

import './fa/scripts/all.min.css';

function Nav() {
    return (
        <div id="nav">
            <div id="nav-left">
                <img id="nav-logo" src={logo} alt={"Condution Logo"} />
                <div id="nav-name">Condution</div>
            </div>
            <div id="nav-right">
                <div id="nav-action">
                    Log in / Sign up
                </div>
            </div>
        </div>
    )
}

function App() {
  let [scrollInfo, scrollRef] = useScrollInfo();
  return (
      <div className="App" style={{overflowY: "scroll"}} ref={scrollRef}>
          <Nav />
          <Hero />
          <Story scInfo={scrollInfo}/>
          <Downloads />
      </div>
  );
}

export default App;
