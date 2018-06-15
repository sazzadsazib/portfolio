import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Sazib from '../globalComponent/assets/images/sazibList.png';
import Badge from '@material-ui/core/Badge';

class AvatarSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 0,
        };
        this.getMyage = this.getMyage.bind(this);
    }
    getMyage(myBday) {
        if(myBday) {
            this.setState({
                age: new Date().getFullYear() - myBday
            })
        }else {
            this.setState({
                age: 0
            })
        }
    }
    componentWillMount() {
        this.getMyage(this.props.age);
    }
    render() {
        return(
            <div>
                <div className="avatar-section">
                    <Badge badgeContent={this.state.age} color="primary" className="badge-position">
                        <Avatar
                            alt="Sazzad Ssazib"
                            src={Sazib}
                            style={{ margin: '0px auto', width: 150, height: 150, boxShadow: '0px 2px 4px #15365099'}}
                        />
                    </Badge>
                </div>
                <div className="avatar-content-info">
                    <p className="titleName">{this.props.name ? this.props.name : 'John Doe'}</p>
                    <p className="subTitleName">{this.props.location ? this.props.location : 'You are in Space'}</p>
                    <p className="description-content-info">
                        {this.props.description ? this.props.description: "No Description Given"}
                    </p>
                </div>
            </div>
        )
    }
}
export default AvatarSection;
