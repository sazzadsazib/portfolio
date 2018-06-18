import React, {Component} from 'react';
import NavBarMain from "../globalComponent/NavBarMain";
import Snackbar from '@material-ui/core/Snackbar';
import Axios from 'axios';
import './assets/css/github.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TimeAgo from 'react-timeago';
import Tooltip from '@material-ui/core/Tooltip';

let stylebg = {background: '-webkit-linear-gradient(180deg,#0098F3,#6650E0)', color: 'white', margin: '0px 0px 10px 10px'};

class Github extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: [],
            repoData: [],
            usertoFetch: "sazzadsazib",
            open: false,
            open2: false,
            renderfunc: 0,
        };
        this.fetchData = this.fetchData.bind(this);
        this.refreshgithubData = this.refreshgithubData.bind(this);
    }

    fetchData() {
        if(sessionStorage.getItem('githubData') === null || sessionStorage.getItem('githubRepoData') === null ) {
            // console.log("its in");
            Axios.get('https://api.github.com/users/'+this.state.usertoFetch)
                .then(result => {
                    if (result.status === 200) {
                        sessionStorage.setItem('githubData',JSON.stringify(result.data));
                        this.setState({
                            userInfo: result.data,
                        },() => {
                            // if data found and set state complete then call the repo url
                            Axios.get(result.data.repos_url, {
                                params: {
                                    type: 'all',
                                    sort: 'updated'
                                }
                            })
                                .then(repos => {
                                    if (repos.status === 200) {
                                        sessionStorage.setItem('githubRepoData', JSON.stringify(repos.data));
                                        const get10Repo = repos.data;
                                        get10Repo.splice(10);

                                        this.setState({
                                            repoData: get10Repo
                                        })
                                    }else {
                                        this.handleClick();
                                    }
                                })
                                .catch(e => this.handleClick())
                        })

                    } else {
                        this.handleClick();
                    }
                })
                .catch(e => this.handleClick())
        }else {
            // console.log('Data already exist read it from here');
            // console.log(JSON.parse(sessionStorage.getItem('githubData')));
            // console.log(JSON.parse(sessionStorage.getItem('githubRepoData')));
            const get10Repo = JSON.parse(sessionStorage.getItem('githubRepoData'));
            get10Repo.splice(10);
            this.setState({
                userInfo: JSON.parse(sessionStorage.getItem('githubData')),
                repoData: get10Repo,
            })
        }
    }
    handleClick =  () => {
        this.setState({ open: true });
    };
    handleClick2 =  () => {
        this.setState({ open2: true });
    };
    handleClose = () => {
        this.setState({ open: false });
    };


    refreshgithubData() {
        sessionStorage.removeItem('githubData');
        // console.log("removed session data");
        this.fetchData();
        this.handleClick2();
    }
    componentWillMount() {
        if(this.props.user) {
        this.setState({
            usertoFetch: this.props.user,
        })
        }
        this.fetchData();
    }

    render() {
        let data =this.state.userInfo;
        let repos = this.state.repoData;
        // const bull = <span style={{ display: 'inline-block', margin: '0 2px', transform: 'scale(0.8)',}}>•</span>;
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
                                {data.name ? data.name : "No Name Found"}
                            </Typography>
                            <Typography variant="subheading" gutterBottom style={{color: 'grey'}}>
                                {data.login ? data.login : "No UserName Found"}
                            </Typography>

                            <Typography component="title" style={{marginTop: 8, fontWeight: 'bold', color: '#0D7DC4'}}>
                                BIO : <span style={{color: 'grey', fontWeight: 'normal'}}>{data.bio? data.bio : "No Bio Found"}</span>
                            </Typography>
                            <Typography component="title" style={{marginTop: 8, fontWeight: 'bold', color: '#0D7DC4'}}>
                                BLOG : <span style={{color: 'grey', fontWeight: 'normal'}}>{data.blog ? data.blog : "No Blog Found"}</span>
                            </Typography>
                            <Typography component="title" style={{marginTop: 8, fontWeight: 'bold', color: '#0D7DC4'}}>
                                CREATED : <span style={{color: 'grey', fontWeight: 'normal'}}>{data.created_at ?<TimeAgo date={data.created_at} /> : "No created time Found"}</span>
                            </Typography>
                            <Typography component="title" style={{marginTop: 8, fontWeight: 'bold', color: '#0D7DC4'}}>
                                LAST UPDATED : <span style={{color: 'grey', fontWeight: 'normal'}}>{data.updated_at ?<TimeAgo date={data.updated_at} />: "No updated time found"}</span>
                            </Typography>
                            <Typography component="title" style={{marginTop: 8, fontWeight: 'bold', color: '#0D7DC4'}}>
                                REPOSITORY COUNT : <span style={{color: 'grey', fontWeight: 'normal'}}>{data.public_repos? data.public_repos : "Not Available"}</span>
                            </Typography>
                            <Typography component="title" style={{marginTop: 8, fontWeight: 'bold', color: '#0D7DC4'}}>
                                GIST COUNT : <span style={{color: 'grey', fontWeight: 'normal'}}>{data.public_gists ? data.public_gists : "Not Avaiable"}</span>
                            </Typography>

                        </CardContent>


                        <CardActions style={{margin: '-40px 0px 10px 0px'}}>
                            <Tooltip id="tooltip-fab" title="Visit" enterTouchDelay={0}>
                                <Button variant="fab"
                                        mini color="secondary"
                                        aria-label="visit"
                                        href={data.html_url}
                                        target="_blank"
                                        style={{background: '-webkit-linear-gradient(180deg,#0098F3,#6650E0)', color: 'white', marginLeft: 'auto', marginRight:10}}
                                >
                                    <Icon>arrow_forward</Icon>
                                </Button>
                            </Tooltip>
                        </CardActions>
                    </Card>
                    <div className="repo-container">
                        {repos ?
                            repos.map((item,i)=>{
                                return(
                                    <Card style={{margin: '10px'}} key={item.id}>
                                        <CardContent>
                                            <Typography color="textSecondary">
                                                {item.language ? item.language: "Not Available"}
                                            </Typography>
                                            <Typography variant="title" style={{fontSize: '20px'}}>
                                                {item.name? item.name : "Not Available"}
                                            </Typography>
                                            <Typography variant="title" style={{fontSize: '14px', color: '#0098F3', textTransform: "lowercase", marginBottom:"5px"}}>
                                                {item.default_branch? item.default_branch : "Not Available"}
                                            </Typography>
                                            <Typography  color="textSecondary">
                                                Push: &nbsp;{item.pushed_at? <TimeAgo date={item.pushed_at} />: "Not Available"}
                                            </Typography>
                                            <Typography  color="textSecondary">
                                                Updated: &nbsp;{item.pushed_at? <TimeAgo date={item.updated_at} />: "Not Available"}
                                            </Typography>
                                            <Typography  color="textSecondary">
                                                Created: &nbsp;{item.created_at? <TimeAgo date={item.created_at} />: "Not Available"}
                                            </Typography>
                                            <Typography  color="textSecondary">
                                                Size: &nbsp;{item.size? <span>{item.size} KB</span>: "Not Available"}
                                            </Typography>
                                            <br/>
                                            <Typography variant="title" style={{fontSize: '16px', color: 'grey'}}>
                                                Description:
                                            </Typography>
                                            <Typography component="p"style={{color: 'grey'}}>
                                                {item.description ? item.description : "No Desciption Provided"}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Tooltip id="tooltip-fab" title="COPY CLONE URL" enterTouchDelay={0}>
                                                <Button variant="fab"
                                                        mini color="secondary"
                                                        aria-label="visit"
                                                        onClick={()=>{
                                                            const el = document.createElement('textarea');  // Create a <textarea> element
                                                            el.value = "git clone "+item.clone_url;                                 // Set its value to the string that you want copied
                                                            el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
                                                            el.style.position = 'absolute';
                                                            el.style.left = '-9999px';                      // Move outside the screen to make it invisible
                                                            document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
                                                            const selected =
                                                                document.getSelection().rangeCount > 0        // Check if there is any content selected previously
                                                                    ? document.getSelection().getRangeAt(0)     // Store selection if found
                                                                    : false;                                    // Mark as false to know no selection existed before
                                                            el.select();                                    // Select the <textarea> content
                                                            document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
                                                            document.body.removeChild(el);                  // Remove the <textarea> element
                                                            if (selected) {                                 // If a selection existed before copying
                                                                document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
                                                                document.getSelection().addRange(selected);   // Restore the original selection
                                                            }
                                                            stylebg ={background: '-webkit-linear-gradient('+Math.floor((90*(Math.random()%4)*100)%360)+'deg,#0098F3,#6650E0)', color: 'white', margin: '0px 0px 10px 10px'}
                                                            this.setState({
                                                                renderfunc: true,
                                                            })
                                                        }}
                                                        style={stylebg}
                                                >
                                                    <Icon style={{padding: "3px"}}>file_copy</Icon>
                                                </Button>
                                            </Tooltip>
                                            <Tooltip id="tooltip-fab" title="Visit" enterTouchDelay={0}>
                                                <Button variant="fab"
                                                        mini color="secondary"
                                                        aria-label="visit"
                                                        href={item.html_url}
                                                        target="_blank"
                                                        style={{background: '-webkit-linear-gradient(180deg,#0098F3,#6650E0)', color: 'white', marginLeft: 'auto', marginRight: 10}}
                                                >
                                                    <Icon>arrow_forward</Icon>
                                                </Button>
                                            </Tooltip>
                                        </CardActions>
                                    </Card>
                                )})
                            : ""}
                    </div>
                    <div className="center mb-20px">
                    {this.state.repoData.length === 10 ?
                        <Button onClick={()=>{
                            this.setState({
                                repoData : JSON.parse(sessionStorage.getItem('githubRepoData')),
                            })
                        } }
                                variant="raised"
                                style={{display: 'inline-block', background: '-webkit-linear-gradient(180deg,#0098F3,#6650E0)', color: 'white', pointer: 'cursor'}}
                        >
                        See All repos
                    </Button>
                        :""}
                    </div>
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
                <Snackbar
                    className="Error-snackbar"
                    open={this.state.open2}
                    onClose={()=>{this.setState({open2: false})}}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">Updated Successfully</span>}
                />
            </div>
        )
    }
}
export default Github;
