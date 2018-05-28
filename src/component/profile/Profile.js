import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Profile extends Component {

    render() {
        return(
            <div> Profile
                <br/>
                <ul>
                    <li><Link to='/'>Get Started</Link></li>
                </ul>
            </div>
        )
    }
}
export default Profile;
