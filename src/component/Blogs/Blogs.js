import React, {Component} from 'react';
import NavBarMain from "../globalComponent/NavBarMain";
import CircularProgress from '@material-ui/core/CircularProgress';

class Blogs extends Component {

    constructor(props) {
        super(props);
        this.state= {
            profileDelay: 3000,
            loadedState: 0,
        }
    }

    componentDidMount() {
        setTimeout(()=>this.setState({loadedState: 1}), this.state.profileDelay)
    }

    render() {
        return(
            <React.Fragment>
                <NavBarMain AppbarName={"Blogs"} StalkingTime={this.props.StalkingTime}
                            history={this.props.history}/>
                    <div className="center">
                        {this.state.loadedState === 0 ?
                            <CircularProgress style={{ color: 'primary', margin: '20vh auto 0px auto' }} thickness={4} /> : ''
                        }

                        <iframe
                            title={"medium"}
                            style={{width: '100%', border: 0, marginTop: '-20px', height: '100vh', opacity: this.state.loadedState}}
                            src="https://medium.com/@sazzadsazib">
                            <p>Your browser does not support iframes.</p>
                        </iframe>
                    </div>
            </React.Fragment>
        )
    }
}
export default Blogs;
