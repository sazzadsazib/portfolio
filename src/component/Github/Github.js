import React, {Component} from 'react';
import NavBarMain from "../globalComponent/NavBarMain";
import Snackbar from '@material-ui/core/Snackbar';
import Axios from 'axios';
import './assets/css/github.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import TimeAgo from 'react-timeago';

class Github extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: [],
            open: false,
        };
        this.fetchData = this.fetchData.bind(this);
        this.refreshgithubData = this.refreshgithubData.bind(this);
    }

    fetchData() {
        if(sessionStorage.getItem('githubData') === null) {
            // console.log("its in");
            Axios.get('https://api.github.com/users/sazzadsazib')
                .then(result => {
                    if (result.status === 200) {
                        sessionStorage.setItem('githubData',JSON.stringify(result.data));
                        this.setState({
                            userInfo: result.data,
                        })
                    } else {
                        this.handleClick();
                    }
                })
                .catch(e => this.handleClick())
        }else {
            // console.log('Data already exist read it from here');
            console.log(JSON.parse(sessionStorage.getItem('githubData')));
            this.setState({
                userInfo: JSON.parse(sessionStorage.getItem('githubData')),
            })
        }
    }
    handleClick =  () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    refreshgithubData() {
        sessionStorage.removeItem('githubData');
        // console.log("removed session data");
        this.fetchData();
    }
    componentWillMount() {
        this.fetchData();
    }

    render() {
        let data =this.state.userInfo;
        return(
            <div>
                <NavBarMain AppbarName={"Github"} StalkingTime={this.props.StalkingTime} history={this.props.history} button={true} buttonName={ <Icon >autorenew</Icon>} buttonaction={this.refreshgithubData}/>
                <div className="git-profile">
                    <Card style={{margin: '10px'}}>
                        <CardMedia
                            style={{height: 0,
                                paddingTop: '56.25%'}}
                            image={data.avatar_url}
                            title={data.login}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="headline" component="h2" style={{marginBottom: 0}}>
                                {data.name}
                            </Typography>
                            <Typography variant="subheading" gutterBottom style={{color: 'grey'}}>
                                {data.login}
                            </Typography>

                            <Typography component="title" style={{marginTop: 8, fontWeight: 'bold', color: '#0D7DC4'}}>
                                BIO : <span style={{color: 'grey', fontWeight: 'normal'}}>{data.bio}</span>
                            </Typography>
                            <Typography component="title" style={{marginTop: 8, fontWeight: 'bold', color: '#0D7DC4'}}>
                                BLOG : <span style={{color: 'grey', fontWeight: 'normal'}}>{data.blog}</span>
                            </Typography>
                            <Typography component="title" style={{marginTop: 8, fontWeight: 'bold', color: '#0D7DC4'}}>
                                CREATED : <span style={{color: 'grey', fontWeight: 'normal'}}><TimeAgo date={data.created_at} /></span>
                            </Typography>
                            <Typography component="title" style={{marginTop: 8, fontWeight: 'bold', color: '#0D7DC4'}}>
                                LAST UPDATED : <span style={{color: 'grey', fontWeight: 'normal'}}><TimeAgo date={data.updated_at} /></span>
                            </Typography>
                            <Typography component="title" style={{marginTop: 8, fontWeight: 'bold', color: '#0D7DC4'}}>
                                REPOSITORY COUNT : <span style={{color: 'grey', fontWeight: 'normal'}}>{data.public_repos}</span>
                            </Typography>
                            <Typography component="title" style={{marginTop: 8, fontWeight: 'bold', color: '#0D7DC4'}}>
                                GIST COUNT : <span style={{color: 'grey', fontWeight: 'normal'}}>{data.public_gists}</span>
                            </Typography>

                        </CardContent>


                        <CardActions>
                            <Button
                                href={data.html_url}
                                target="_blank"
                                variant="raised"
                                color="primary"
                                style={{background: '-webkit-linear-gradient(180deg,#0098F3,#6650E0)', color: 'white', marginLeft: 'auto'}}
                            >
                                <Icon>arrow_forward</Icon>
                            </Button>
                        </CardActions>
                    </Card>
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
