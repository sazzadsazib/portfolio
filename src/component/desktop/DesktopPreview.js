import React, {Component} from 'react';
import './assets/css/desktopRender.css';
import Sazib from '../getstarted/assets/images/sazib-getstarted-main.svg';
import Sign from '../getstarted/assets/images/sign.svg';

class DesktopPreview extends Component {

    render() {
        return(
            <div className="bg-cover">
            <div className="center-content">
                <img src={Sazib} width="150px" alt="Sazib"/>
                <p className="getStarted-center-title">Hey There! I AM</p>
              <img className='getStarted-center-sign' src={Sign} alt='sign'/>
                <p className="getStarted-clickhere">Please Visit <span className="gradient-text">Using Mobile</span> to Continue</p>
            </div>
            </div>
        )
    }
}
export default DesktopPreview;
