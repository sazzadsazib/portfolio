import React, {Component} from 'react';
import NavBarMain from "../globalComponent/NavBarMain";
import Axios from 'axios';
import Icon from '@material-ui/core/Icon';
import ActivityCardComponent from './ActivityCardComponent';
import CircularProgress from '@material-ui/core/CircularProgress';


class ActivityComponent extends Component {

    constructor(props) {
        super(props);
        this.state= {
            usertoFetch: "sazzadsazib",
            dataSource: [],
            isLoading: false,
        };
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData() {
        this.setState({
            isLoading: false,
        },()=>
        Axios.get('https://api.github.com/users/'+this.state.usertoFetch+'/events')
            .then(result => {
                if (result.status === 200) {
                    localStorage.setItem('activityData',JSON.stringify(result.data));
                   this.setState({
                       dataSource: result.data
                   },()=>{
                       setTimeout(()=>this.setState({isLoading: true}),1000);
                   });
                }
            }).catch((e)=>console.log(e)))
    }
    componentDidMount() {
        if(localStorage.getItem('activityData') === null ){
            this.fetchData();
        }else {
            this.setState({
                dataSource: JSON.parse(localStorage.getItem('activityData')),
            },()=>{
                setTimeout(()=>this.setState({isLoading: true}),1000);
            });
        }
    }

    render() {
        return(
            <div>
                <NavBarMain AppbarName={"Activity"} StalkingTime={this.props.StalkingTime} history={this.props.history} button={true} buttonName={ <Icon >autorenew</Icon>} buttonaction={()=>this.fetchData()}/>
                {!this.state.isLoading ?
                    <div className="center">
                        <CircularProgress style={{color: 'primary', margin: '20vh auto 0px auto'}} thickness={4}/>
                    </div>
                    :
                    <div>
                        {this.state.dataSource.map((event,i)=>
                            <ActivityCardComponent key={i} event={event}/>
                        )}
                    </div>
                }
            </div>
        )
    }
}
export default ActivityComponent;
