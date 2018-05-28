import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {

    render() {
        return(
            <div> Home
                <br/>
                <ul>
                    <li><Link to='/'>Get Started</Link></li>
                </ul>
            </div>
        )
    }
}
export default Home;
