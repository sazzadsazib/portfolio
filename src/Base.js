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
                            <Route exact path='/' component={GetStarted}/>
                            <Route  exact path='/home' component={Home}/>
                            <Route  exact ath='/profile' component={Profile}/>
                            <Route path='*' exact={true} component={Four0Four} />
                        </Switch>
                    </BrowserRouter>
                </div>
            );
        }else {
            return(
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={DesktopPreview}/>
                        <Route path='*' exact={true} component={Four0Four} />
                    </Switch>
                </BrowserRouter>
            )
        }

    }
}



export default Base;
