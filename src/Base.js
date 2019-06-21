import React, { Component } from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import GetStarted from "./component/getstarted/GetStarted";
import DesktopPreview from "./component/desktop/DesktopPreview";
// import Home from "./component/home/Home";
import Profile from "./component/profile/Profile";
import Four0Four from "./component/fourofour/Four0Four";
import Github from "./component/Github/Github";
// import Feed from "./component/Feed/Feed";
import Settings from "./component/Settings/Settings";
import Blogs from "./component/Blogs/Blogs";
import OpenSource from "./component/OpenSource/OpenSource";
import ActivityComponent from "./component/Activity/ActivityComponent";
import DesignComponent from "./component/Design/DesignComponent";
import CvWrapper from "./component/CV/CvWrapper";


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
    componentDidMount() {
        localStorage.setItem('currState',null);
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
                            <Route  exact path='/activity' render={(props)=><ActivityComponent StalkingTime={this.state.StalkingTime} history={props.history}/>}/>
                            <Route  exact path='/profile' render={(props)=><Profile StalkingTime={this.state.StalkingTime} history={props.history}/>}/>
                            <Route  exact path='/github' render={(props)=><Github StalkingTime={this.state.StalkingTime} history={props.history} />}/>
                            <Route  exact path='/design' render={(props)=><DesignComponent StalkingTime={this.state.StalkingTime} history={props.history} />}/>
                            {/*<Route  exact path='/feed' render={(props)=><Feed StalkingTime={this.state.StalkingTime} history={props.history} />}/>*/}
                            <Route  exact path='/blogs' render={(props)=><Blogs StalkingTime={this.state.StalkingTime} history={props.history} />}/>
                            <Route  exact path='/contribution' render={(props)=><OpenSource StalkingTime={this.state.StalkingTime} history={props.history} />}/>
                            <Route  exact path='/settings' render={(props)=><Settings StalkingTime={this.state.StalkingTime} history={props.history} />}/>
                            <Route  exact path='/cv' render={(props)=><CvWrapper StalkingTime={this.state.StalkingTime} history={props.history} />}/>
                            {/*you can add user="github username" to fetch specific user git data default: sazzadsazib*/}
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
