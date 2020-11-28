import "./Story.css"
import {useSpring, animated, interpolate} from 'react-spring'
import largeDemo from './images/largeDemo.png';

function Story(props) {
    const largeCondutionSpring = useSpring({scale1p1: props.scInfo.y.percentage? 20+((1-props.scInfo.y.percentage)*30): 20, opacity1p1: (((props.scInfo.y.percentage > 0.8 && props.scInfo.y.percentage < 1)) ? 1 : 0)});

    return (
        <div id="story">
            <div className="chapter">
                <h1 className="story-header story-callout brown">Flexible <span className="story-callout invbrown">Date Handling</span></h1>
                <br />
                    {/*<animated.div className="image-annotation" style={{opacity:largeCondutionSpring.opacity1p1}}>
                    Due and Defer dates + times
                </animated.div>*/}
                <animated.img className="story-image story-image-1-1" src={largeDemo} alt={"Large Condution Image"} style={{transform: interpolate(largeCondutionSpring.scale1p1, (c=>`translateX(${c}vw)`))}}/>
                <div className="story-description">Due and Start Dates <span className="invbrown" style={{paddingLeft: 5, paddingRight: 5}}>Down to the Second</span></div>
            </div>
        </div>
    );
}

export default Story;

