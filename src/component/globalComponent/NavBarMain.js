import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import NavListPicture from './assets/images/sazibList.png';
import Icon from '@material-ui/core/Icon';
import SvgIcon from '@material-ui/core/SvgIcon';

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
                    <Link to={"/"}>
                        <ListItem button>
                        <ListItemIcon>
                            <Icon >subtitles</Icon>
                        </ListItemIcon>
                            <ListItemText primary="Get Started" />
                    </ListItem>
                    </Link>
                    {/*<ListItem button>*/}
                        {/*<ListItemIcon>*/}
                            {/*<Icon >home</Icon>*/}
                        {/*</ListItemIcon>*/}
                        {/*<Link to={"/home"}>*/}
                        {/*<ListItemText primary="Home" />*/}
                        {/*</Link>*/}
                    {/*</ListItem>*/}
                    <Link to={"/profile"}>
                        <ListItem button>
                        <ListItemIcon>
                            <Icon >face</Icon>
                        </ListItemIcon>
                            <ListItemText primary="Profile" />
                    </ListItem>
                    </Link>
                    <Link to={"/github"}>
                        <ListItem button>
                        <ListItemIcon>
                            <SvgIcon>
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                            </SvgIcon>
                        </ListItemIcon>
                            <ListItemText primary="Github" />
                    </ListItem>
                    </Link>
                    <Link to={"/design"}>
                        <ListItem button>
                            <ListItemIcon>
                                <Icon>
                                    filter_hdr
                                </Icon>
                            </ListItemIcon>
                            <ListItemText primary="Design" />
                        </ListItem>
                    </Link>
                    <Link to={"/blogs"}>
                        <ListItem button>
                            <ListItemIcon>
                                <Icon>
                                    gesture
                                </Icon>
                            </ListItemIcon>
                            <ListItemText primary="Blogs" />
                        </ListItem>
                    </Link>
                    <Link to={"/contribution"}>
                        <ListItem button>
                            <ListItemIcon>
                                <Icon>
                                    ballot
                                </Icon>
                            </ListItemIcon>
                            <ListItemText primary="Open Source" />
                        </ListItem>
                    </Link>
                    <Link to={"/activity"}>
                        <ListItem button>
                            <ListItemIcon>
                                <Icon>
                                    list
                                </Icon>
                            </ListItemIcon>
                            <ListItemText primary="Activity Tracker" />
                        </ListItem>
                    </Link>

                    {/*<ListItem button>*/}
                        {/*<ListItemIcon>*/}
                          {/*<Icon>*/}
                              {/*person*/}
                          {/*</Icon>*/}
                        {/*</ListItemIcon>*/}
                        {/*<Link to={"/feed"}>*/}
                            {/*<ListItemText primary="Feed" />*/}
                        {/*</Link>*/}
                    {/*</ListItem>*/}
                    {/*<Link to={"/projects"}>*/}
                        {/*<ListItem button>*/}
                        {/*<ListItemIcon>*/}
                            {/*<Icon>*/}
                                {/*view_module*/}
                            {/*</Icon>*/}
                        {/*</ListItemIcon>*/}
                            {/*<ListItemText primary="Projects" />*/}
                    {/*</ListItem>*/}
                    {/*</Link>*/}
                    {/*<Link to={"/contact"}>*/}
                        {/*<ListItem button>*/}
                        {/*<ListItemIcon>*/}
                            {/*<Icon>*/}
                                {/*email*/}
                            {/*</Icon>*/}
                        {/*</ListItemIcon>*/}
                            {/*<ListItemText primary="Contact" />*/}
                    {/*</ListItem>*/}
                    {/*</Link>*/}
                    <Link to={"/settings"}>
                        <ListItem button>
                        <ListItemIcon>
                            <Icon>
                                settings
                            </Icon>
                        </ListItemIcon>
                            <ListItemText primary="Settings" />
                    </ListItem>
                    </Link>
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
            <div style={{ flexGrow: 1, marginBottom: 80}}>
                <AppBar position="fixed">
                    <Toolbar style={{background: 'linear-gradient(to right, #4D61E4 , #0395F2)'}}>
                        <IconButton onClick={this.toggleDrawer('left', true)} style={{ marginLeft: -12, marginRight: 20, cursor: 'pointer'}} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" style={{flex: 1, fontSize: '16px', textTransform: 'uppercase'}}>
                            {this.props.AppbarName}
                        </Typography>
                        {this.props.button ?<Button onClick={this.props.buttonaction} color="inherit">{this.props.buttonName}</Button> : ""}
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
