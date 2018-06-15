import React, {Component} from 'react';
import NavBarMain from "../globalComponent/NavBarMain";
import Snackbar from '@material-ui/core/Snackbar';
import Axios from 'axios';
import './assets/css/github.css';

class Github extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: [],
            open: false,
        };
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData() {
       Axios.get('https://api.github.com/users/sazzadsazib')
           .then(result => {
               if(result.status === 200) {
                   console.log(result.data);
                   this.setState({
                       userInfo: result.data,
                   })
               }else {
                   this.handleClick();
               }
           })
           .catch(e => console.log(e))
    }
    handleClick =  () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    componentWillMount() {
        this.fetchData();
    }
    render() {
        return(
            <div>
                <NavBarMain AppbarName={"Github"} StalkingTime={this.props.StalkingTime} history={this.props.history}/>
                <div className="git-profile">

                </div>
                <Snackbar
                    className="Error-snackbar"
                    open={this.state.open}
                    onClose={this.handleClose}
                    TransitionComponent={this.state.Transition}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">Couldn't Fetch Github Data</span>}
                />
            </div>
        )
    }
}
export default Github;
