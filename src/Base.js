import React, { Component } from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import GetStarted from "./component/getstarted/GetStarted";
import DesktopPreview from "./component/desktop/DesktopPreview";
import Home from "./component/home/Home";
import Profile from "./component/profile/Profile";
import Four0Four from "./component/fourofour/Four0Four";


class Base extends Component {
    constructor(props){
        super(props);
        this.state = {
            width: window.innerWidth,
            StalkingTime: new Date(),
        };
    }
    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };
    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }
    render() {
        const { width } = this.state;
        const isMobile = width <= 500;
        //considering width will be less then 500 on mobile render

        if(isMobile) {
            return (
                <div>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path='/'  render={(props)=><GetStarted StalkingTime={this.state.StalkingTime} history={props.history}/>}/>
                            <Route  exact path='/home' render={(props)=><Home StalkingTime={this.state.StalkingTime} history={props.history}/>}/>
                            <Route  exact ath='/profile' render={(props)=><Profile StalkingTime={this.state.StalkingTime} history={props.history}/>}/>
                            <Route path='*' exact={true} render={(props)=><Four0Four StalkingTime={this.state.StalkingTime} history={props.history}/>} />
                        </Switch>
                    </BrowserRouter>
                </div>
            );
        }else {
            return(
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={DesktopPreview}/>
                        <Route path='*' exact={true} component={DesktopPreview} />
                    </Switch>
                </BrowserRouter>
            )
        }

    }
}



export default Base;
