import demo from './images/demo.png';
import phonedemo from './images/phonedemo.jpeg';
import './Hero.css';

function Hero() {
    return (
        <div id="top-hero">
            <div id="top-hero-top-alignment">
                <div id="top-hero-top-part">
                    <div id="top-hero-callout">
                        Task Management, Simplified.
                    </div>
                    <div id="top-hero-title-desktop">
                        The Condution Project
                    </div>
                    <a id="top-hero-action-button" href="https://beta.condution.com">
                        Get Started Now
                    </a>
                </div>
            </div>
            <div id="top-hero-image">
                <img src={demo} id="top-hero-demo-image" alt={"Condution App"} />
                <img src={phonedemo} id="top-hero-demo-image-phone" alt={"Condution App"} />
            </div>
        </div>
    );
}

export default Hero;

