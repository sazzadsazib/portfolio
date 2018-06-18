import React, {Component} from 'react';
import Icon from '@material-ui/core/Icon';
import NavBarMain from "../globalComponent/NavBarMain";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TimeAgo from 'react-timeago';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import graph from 'fb-react-sdk';
import CircularProgress from '@material-ui/core/CircularProgress';
const env = require('./../../env')();

class Feed extends Component {

    constructor(props) {
        super(props);
        this.state={
            postData: [],
            loading: true,
        };

        this.refreshFbData = this.refreshFbData.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.setData = this.setData.bind(this);
        this.leaveloading = this.leaveloading.bind(this);
        this.enterloading = this.enterloading.bind(this);
    }
    refreshFbData() {
        this.enterloading();
        this.fetchData(this.setData);
    }

    setData(response) {
        this.setState({
            postData: response,
        },()=>{
            setTimeout(this.leaveloading,'1000');
        })
    }
    leaveloading = () => {
        this.setState({ loading: false });
    };

    enterloading = () => {
        this.setState({ loading: true });
    };
    fetchData(e) {
        graph.setAccessToken(env.hash);
        graph.get("/me/feed?fields=created_time,id,description,caption,story,status_type,source,picture,place,message,actions", function(err, res) {
            localStorage.setItem("postData", JSON.stringify(res.data));
            e(res.data);
        });
    }
    componentWillMount() {
        if(localStorage.getItem('postData')) {
            setTimeout(this.leaveloading,'1000');
            this.setState({
                postData: JSON.parse(localStorage.getItem("postData")),
            })
        }else {
            this.fetchData(this.setData);
        }
    }

    render() {
        return(
            <div>

                <NavBarMain AppbarName={"Feed"} StalkingTime={this.props.StalkingTime} history={this.props.history} button={true} buttonName={ <Icon >autorenew</Icon>} buttonaction={this.refreshFbData}/>
                {this.state.loading ?
                    <div className="center">
                        <CircularProgress style={{ color: 'primary', margin: '20vh auto 0px auto' }} thickness={4} />
                    </div>
                    :
                    <div>
                        {this.state.postData ?
                            this.state.postData.map((item,i)=>{
                                console.log(item);
                                return(
                                    <Card style={{margin: 10}} key={i}>
                                        <CardContent>
                                            <Typography style={{fontSize: 16}} color="primary">
                                                Sazzad Sazib
                                            </Typography>
                                            <Typography style={{fontSize: 14}} color="textSecondary">
                                                <TimeAgo date={item.created_time}/>
                                            </Typography>
                                            <br/>
                                            {item.status_type === "added_photos" ? <p style={{fontSize: 12, color: '#333', margin: 0}}>Uploaded A Photo</p>: item.status_type==="mobile_status_update" ? <p style={{fontSize: 12, color: '#333', margin: 0}}>Updated His Status</p> :""}
                                            {item.message?
                                                <Typography style={{fontSize: 16, color: '#333333'}}>
                                                    {item.message}
                                                </Typography>
                                                : "" }
                                            {item.picture ?
                                                <img src={item.picture} alt="if available" style={{margin: '10px 0px 0px 0px'}} /> :""}
                                            {item.place ? <p style={{fontSize: 10, color: 'grey'}}> at {item.place.name}</p> : ""}
                                            {item.description ? <p style={{fontSize: 12, color: '#333'}}> {item.description}</p> : ""}

                                        </CardContent>
                                        {item.actions[0] ?
                                            <CardActions>
                                                <Button size="small"
                                                        variant='raised'
                                                        href={item.actions[0].link}
                                                        target="_blank"
                                                        style={{
                                                            background: '-webkit-linear-gradient(180deg,#0098F3,#6650E0)',
                                                            color: 'white',
                                                            marginLeft: 'auto',
                                                            marginRight: 10
                                                        }}>
                                                    See in Facebook
                                                </Button>
                                            </CardActions> :
                                            ""}
                                    </Card>
                                )
                            })
                            : ""}
                    </div>}
            </div>
        )
    }
}
export default Feed;
