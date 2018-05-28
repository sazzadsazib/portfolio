import React, {Component} from 'react';
import sazib from './assets/images/sazib-getstarted-main.svg';
import './assets/css/getStarted.css';

class GetStarted extends Component {

    render() {
        return(

               <div>
                   <div className="container-getStarted">
                       <img className="my-illustration" src={sazib} alt="Meh"/>
                       <p className="getStarted-center-title">Hello</p>
                       <p className="getStarted-center-subtitle">I am Sazzad</p>
                       <p className="getStarted-clickhere">Click <span className="gradient-text">GET STARTED</span> to Continue</p>
                       <button className="getStarted-continue-button gradient-button">Get Started</button>
                   </div>
           </div>
        )
    }
}
export default GetStarted;
