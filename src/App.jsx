import Hero from './Hero';
import Privacy from './Privacy';
import Story from './Story';
import Downloads from './Downloads';
import './App.css';
import './Nav.css';
import useScrollInfo from 'react-element-scroll-hook';

import logo from './images/logo.png';

import { Route, BrowserRouter as Router } from 'react-router-dom';

import './fa/scripts/all.min.css';

function Nav() {
    return (
        <div id="nav">
            <div id="nav-left">
                <img id="nav-logo" src={logo} alt={"Condution Logo"} />
                <div id="nav-name">Condution</div>
            </div>
            <div id="nav-right">
                <a id="nav-action" href="https://beta.condution.com/">
                    Log in / Sign up
                </a>
            </div>
        </div>
    )
}

function App() {
  let [scrollInfo, scrollRef] = useScrollInfo();
  return (
     <Router>
         <div>
             <Route exact path='/' component={()=>{
                 return (
                     <div className="App" style={{overflowY: "scroll"}} ref={scrollRef}>
                         <Nav />
                         <Hero />
                         <Story scInfo={scrollInfo}/>
                         <Downloads />
                     </div>
                 )
             }} />
             <Route exact path='/privacy' component={()=><div ref={scrollRef}><Privacy/></div>}/>
         </div>
     </Router>
  );
}

export default App;
