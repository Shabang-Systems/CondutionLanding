import "./Story.css"
import {useSpring, animated, interpolate} from 'react-spring'
import largeDemo from './images/largeDemo.png';

function Story(props) {

    const largeCondutionSpring = useSpring({scale: props.scInfo.y.percentage? 20+((1-props.scInfo.y.percentage)*30): 20});

    return (
        <div id="story">
            <div className="chapter">
                <h1 className="story-header story-callout brown">Your <span className="story-callout invbrown">Favourite</span> <span style={{display: "inline-block"}}>Task Manager</span></h1>
                <animated.img className="story-image story-image-1-1" src={largeDemo} alt={"Large Condution Image"} style={{transform: interpolate(largeCondutionSpring.scale, (c=>`translateX(${c}vw)`))}}/>
                <h1 className="story-header story-callout brown">Your <span className="story-callout invbrown">Second Favourite</span> <span style={{display: "inline-block"}}>Task Manager</span></h1>
            </div>
        </div>
    );
}

export default Story;

