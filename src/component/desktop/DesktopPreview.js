import React, {Component} from 'react';
import './assets/css/desktopRender.css';
import Sazib from '../getstarted/assets/images/sazib-getstarted-main.svg';


class DesktopPreview extends Component {

    render() {
        return(
            <div className="bg-cover">
            <div className="center-content">
                <img src={Sazib} width="150px" alt="Sazib"/>
                <p className="getStarted-center-title">Hello</p>
                <p className="getStarted-center-subtitle">I am Sazzad</p>
                <p className="getStarted-clickhere">Please Visit <span className="gradient-text">Using Mobile</span> to Continue</p>
            </div>
            </div>
        )
    }
}
export default DesktopPreview;
