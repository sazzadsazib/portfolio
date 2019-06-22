import React, {Component} from 'react';
import NavBarMain from "../globalComponent/NavBarMain";
import CircularProgress from '@material-ui/core/CircularProgress';
import { Offline, Online } from "react-detect-offline";
// import OfflineImage from './../globalComponent/assets/images/cry.svg';
import BlogLists from './BlogLists';

class Blogs extends Component {

    constructor(props) {
        super(props);
        this.state= {
            profileDelay: 1000,
            loadedState: 0,
        }
    }

    componentDidMount() {
        setTimeout(()=>this.setState({loadedState: 1}), this.state.profileDelay);
        //storing current state
        localStorage.setItem('currState',this.props.history.location.pathname);

    }

    render() {
        return(
            <React.Fragment>
                <NavBarMain AppbarName={"Blogs"} StalkingTime={this.props.StalkingTime}
                            history={this.props.history}/>
                <Online>
                        {this.state.loadedState === 0 ?
                            <div className="center">
                                <CircularProgress style={{ color: 'primary', margin: '20vh auto 0px auto' }} thickness={4} />
                            </div>: <div id={'blog-root'}><BlogLists /></div>
                        }
                </Online>
                <Offline>
                    {/*<div className={'center'}>*/}
                        {/*<img src={OfflineImage} style={{width: '20%',marginTop: '10%',opacity: 0.6}} alt={'offline'}/>*/}
                        {/*<p className={'gradient-text'}>Hola! You Need Internet Connection<br/>To See This Page</p>*/}
                    {/*</div>*/}
                    {this.state.loadedState === 0 ?
                        <div className="center">
                            <CircularProgress style={{ color: 'primary', margin: '20vh auto 0px auto' }} thickness={4} />
                        </div>: <div id={'blog-root'}><BlogLists /></div>
                    }
                </Offline>
            </React.Fragment>
        )
    }
}
export default Blogs;
