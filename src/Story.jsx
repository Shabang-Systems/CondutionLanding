import "./Story.css"
import {useSpring, animated, interpolate} from 'react-spring'
import largeDemo from './images/largeDemo.png';
import seqProj from './images/seqproj.png';
import psps from './images/perspectives.png';
import workspaces from './images/workspaces.png';
import calendar from './images/calendar.png';

function Story(props) {
    const largeCondutionSpring = useSpring({scale1p1: props.scInfo.y.percentage? 20+((1-props.scInfo.y.percentage)*25): 20, scale1p2: props.scInfo.y.percentage? ((1-props.scInfo.y.percentage)*20): 20, scale1p3: props.scInfo.y.percentage? 15+((1-props.scInfo.y.percentage)*35): 20});

    return (
        <div id="story">
            <div className="chapter">
                <h1 className="story-header story-callout brown">Flexible <span className="story-callout invbrown">Date Handling</span></h1>
                <br />
                    {/*<animated.div className="image-annotation" style={{opacity:largeCondutionSpring.opacity1p1}}>
                    Due and Defer dates + times
                </animated.div>*/}
                <animated.img className="story-image story-image-1-1" src={largeDemo} alt={"Large Condution Image"} style={{transform: interpolate(largeCondutionSpring.scale1p1, (c=>`translateX(${c}vw)`))}}/>
                <div className="story-description">Due and Start Dates <span className="invbrown" style={{paddingLeft: 5, paddingRight: 5}}>down to the second.</span></div>
            </div>
            <div className="chapter">
                <h1 className="story-header story-callout blue right">Powerful <span className="story-callout invblue">Sequential Projects</span></h1>
                <animated.img className="story-image story-image-1-2" src={seqProj} alt={"Sequential Projects"} style={{transform: interpolate(largeCondutionSpring.scale1p2, (c=>`translateX(-${c}vw)`))}}/>
                <div className="story-description">Large Projects? <span className="invblue" style={{paddingLeft: 5, paddingRight: 5}}>Sequentially ordered.</span></div>
            </div>
            <div className="chapter">
                <h1 className="story-header story-callout green">Advanced <span className="story-callout invgreen">Custom Filters</span></h1>
                <animated.img className="story-image story-image-1-3" src={psps} alt={"Custom Perspectives"} style={{transform: interpolate(largeCondutionSpring.scale1p3, (c=>`translateX(${c}vw)`))}}/>
                <div className="story-description">Contexts and Importance? <span className="invgreen" style={{paddingLeft: 5, paddingRight: 5}}>Powerfully Sorted.</span></div>
            </div>
            <div className="chapter">
                <h1 className="story-header story-callout red right">Collaborative <span className="story-callout invred">Shared Workspaces</span></h1>
                <animated.img className="story-image story-image-1-4" src={workspaces} alt={"Collaborative Workspaces"} style={{transform: interpolate(largeCondutionSpring.scale1p2, (c=>`translateX(-${c}vw)`))}}/>
                <div className="story-description">Department coordination? <span className="invred" style={{paddingLeft: 5, paddingRight: 5}}>Easy-Peasy.</span></div>
            </div>
            <div className="chapter">
                <h1 className="story-header story-callout yellow">Tag Weight<span className="story-callout invyellow">Calendar</span></h1>
                <animated.img className="story-image story-image-1-5" src={calendar} alt={"Calendar View"} style={{transform: interpolate(largeCondutionSpring.scale1p3, (c=>`translateX(${c}vw)`))}}/>
                <div className="story-description">Daily to-dos <span className="invyellow" style={{paddingLeft: 5, paddingRight: 5}}>planned and balanced.</span></div>
            </div>

            <div className="chapter">
                <h1 className="story-header story-callout blue" style={{textAlign: "center", margin: "0 auto", display: "block"}}>Oh, did we mention... <span className="story-description invblue" style={{paddingLeft: 5, paddingRight: 5}}>Licence: GNU-GPL v3</span><br /><span style={{color: "black"}} className="story-description">Total cost: $0.00. Seriously.</span></h1>
            </div>
        </div>
    );
}

export default Story;

