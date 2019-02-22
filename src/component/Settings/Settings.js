import React, {Component} from 'react';
import NavBarMain from "../globalComponent/NavBarMain";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import '../Github/assets/css/github.css';


class Settings extends Component {

    constructor(props) {
        super(props);
        this.state ={
            open : false
        };
        this.clearCache = this.clearCache.bind(this);
    }
    clearCache() {
        this.setState({open: true});
        sessionStorage.clear();
        localStorage.clear();
    }

    render() {
        return(
            <div>
                <NavBarMain AppbarName={"Settings"} StalkingTime={this.props.StalkingTime} history={this.props.history}/>

                <div style={{margin: '0px 20px', background: 'white', borderRadius: 5, boxShadow: '0px 0px 4px #3333331f'}} >
                    <List >
                        <ListItem>
                            <ListItemIcon>
                                <Icon>cached</Icon>
                            </ListItemIcon>
                            <ListItemText primary="Clear Cache" />
                            <ListItemSecondaryAction>
                                <Button onClick={this.clearCache} variant="fab" mini aria-label="delete" style={{
                                    background: '-webkit-linear-gradient(180deg,#0098F3,#6650E0)',
                                    color: 'white',
                                    marginLeft: 'auto',
                                    marginRight: 10
                                }}>
                                    <Icon>cached</Icon>
                                </Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                </div>
                <Snackbar
                    className="Error-snackbar"
                    open={this.state.open}
                    onClose={()=>{this.setState({open: false})}}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">Cleared Successfully</span>}
                />
            </div>
        )
    }
}
export default Settings;
