import {Fullpage, Slide} from 'fullpage-react';
import Page1 from '../assets/images/session1/session1-1.png';
import Page2 from '../assets/images/session1/session1-2.png';
import Page3 from '../assets/images/session1/session1-3.png';
import Page4 from '../assets/images/session1/session1-4.png';
import Page5 from '../assets/images/session1/session1-5.png';
import Page6 from '../assets/images/session1/session1-6.png';
import Page7 from '../assets/images/session1/session1-7.png';

const Session1 = () => {

    const fullPageOptions = {
        scrollSensitivity: 1,
        touchSensitivity: 0.5,
        scrollSpeed: 500,
        hideScrollBars: true,
        enableArrowKeys: true,
    };

    fullPageOptions.slides = [
        <Slide>
            <div className={'page'}>
                <img src={Page1} alt={''} className={'page'}/>
            </div>
        </Slide>,
        <Slide>
            <div className={'page'}>
                <img src={Page2} alt={''} className={'page'}/>
            </div>
        </Slide>,
        <Slide>
            <div className={'page'}>
                <img src={Page3} alt={''} className={'page'}/>
            </div>
        </Slide>,
        <Slide>
            <div className={'page'}>
                <img src={Page4} alt={''} className={'page'}/>
            </div>
        </Slide>,
        <Slide>
            <div className={'page'}>
                <img src={Page5} alt={''} className={'page'}/>
            </div>
        </Slide>,
        <Slide>
            <div className={'page'}>
                <img src={Page6} alt={''} className={'page'}/>
            </div>
        </Slide>,
        <Slide>
            <div className={'page'}>
                <img src={Page7} alt={''} className={'page'}/>
            </div>
        </Slide>
    ];

    return(
        <div id={'session1'}>
            <Fullpage {...fullPageOptions}/>
        </div>
    )
}

export default Session1;
