import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Avatar from '@material-ui/core/Avatar';
import NavListPicture from './assets/images/sazibList.png';

const stalkingText = {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'roboto',
    fontSize: '12px',
    marginTop: '20px',
    fontWeight: 'lighter'
};

const StalkingTime = {
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: '16px',
    color: 'white',
    marginTop: '0px'
};


const RenderTime = (payload) => {
    return (<span>{payload.M} Min {payload.S} Sec</span>)
}

class SideList extends Component {
    constructor(props){
        super(props);
        this.state = {
            MinutesHere: 0,
            SecondsHere: 0,

        }
    }
    componentDidMount() {
        this.interval = setInterval(() => {

            this.setState({
                MinutesHere: Math.floor(((Date.now()-this.props.StalkingTime.getTime())/1000/60) << 0),
                SecondsHere: Math.floor(((Date.now()-this.props.StalkingTime.getTime())/1000) % 60),
        })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div style={{ width: 250}}>
                <div style={{background: 'linear-gradient(to right, #4D61E4 , #0395F2)', padding: '30px 0px 10px 0px'}}>
                    <Avatar
                        alt="Sazzad Ssazib"
                        src={NavListPicture}
                        style={{ margin: '0px auto', width: 80, height: 80, boxShadow: '0px 2px 4px #15365099'}}
                    />
                    <p style={stalkingText}>Hey You are Stalking for</p>
                    <p style={StalkingTime}>
                        {/*{Math.floor(((Date.now()-this.props.StalkingTime.getTime())/1000/60) << 0)} M {Math.floor(((Date.now()-this.props.StalkingTime.getTime())/1000) % 60)} S*/}
                        {this.state.SecondsHere === 0 ? "Loading" :  <RenderTime M={this.state.MinutesHere} S={this.state.SecondsHere} />  }
                    </p>
                </div>
                <List component="nav">
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <Link to={"/"}>
                            <ListItemText primary="Get Started" />
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Drafts" />
                    </ListItem>
                </List>
            </div>
        )
    }
}



class NavBarMain extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            top: false,
            left: false,
            bottom: false,
            right: false,
            StalkingTime: 0,
        };
    }
    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };


    render(){
        return (
            <div style={{ flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar style={{background: 'linear-gradient(to right, #4D61E4 , #0395F2)'}}>
                        <IconButton style={{ marginLeft: -12, marginRight: 20, cursor: 'pointer'}} color="inherit" aria-label="Menu">
                            <MenuIcon onClick={this.toggleDrawer('left', true)}/>
                        </IconButton>
                        <Typography variant="title" color="inherit" style={{flex: 1, fontSize: '16px', textTransform: 'uppercase'}}>
                            {this.props.AppbarName}
                        </Typography>
                        {/*<Button color="inherit">Login</Button>*/}
                    </Toolbar>
                </AppBar>
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        <SideList StalkingTime = {this.props.StalkingTime} history={this.props.history}/>
                    </div>
                </Drawer>
            </div>
        );
    }
}
export default NavBarMain;
