import Hero from './Hero';
import Story from './Story';
import './App.css';
import './Nav.css';

import logo from './images/logo.png';

function Nav() {
    return (
        <div id="nav">
            <div id="nav-left">
                <img id="nav-logo" src={logo} alt={"Condution Logo"} />
                <div id="nav-name">Condution</div>
            </div>
            <div id="nav-right">
                <div id="nav-action">
                    Log in/Sign up
                </div>
            </div>
        </div>
    )
}

function App() {
  return (
    <div className="App">
        <Nav />
        <Hero />
        <Story />
    </div>
  );
}

export default App;
