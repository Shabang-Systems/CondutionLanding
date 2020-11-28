import demo from './images/demo.png';
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
                </div>
            </div>
            <div id="top-hero-actions">
                <img src={demo} id="top-hero-demo-image" />
            </div>
        </div>
    );
}

export default Hero;

