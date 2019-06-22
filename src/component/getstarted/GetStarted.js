import React, {Component} from 'react';
import sazib from './assets/images/sazib-getstarted-main.svg';
import {Link} from 'react-router-dom';
import './assets/css/getStarted.css';

class GetStarted extends Component {

    componentDidMount(){
        if(localStorage.getItem('currState') === null || this.props.history.location.search === "?rdr=true"){
            localStorage.setItem('currState',this.props.history.location.pathname);
        }else {
            this.props.history.push(localStorage.getItem('currState'));
        }
    }

    render() {
        return(

            <div style={{maxHeight: '100vh'}}>
                <div className="minimal-cloud">
                    <div className="cloud-minimal-1"> </div>
                    <div className="cloud-minimal-2"> </div>
                    <div className="cloud-minimal-3"> </div>
                    <div className="cloud-minimal-4"> </div>
                    <div className="cloud-minimal-5"> </div>
                    <div className="cloud-minimal-6"> </div>
                    <div className="cloud-minimal-7"> </div>
                </div>
                <div className="container-getStarted">
                    <img className="my-illustration" src={sazib} alt="Meh"/>
                    <p className="getStarted-center-title">Hello</p>
                    <p className="getStarted-center-subtitle">I am Sazzad</p>
                    <p className="getStarted-clickhere">Click <span className="gradient-text">GET STARTED</span> to Continue</p>
                    <Link style={{color: '#ffffff'}} to={'/profile'}>
                        <button className="getStarted-continue-button gradient-button">Get Started</button>
                    </Link>
                </div>
            </div>
        )
    }
}
export default GetStarted;
