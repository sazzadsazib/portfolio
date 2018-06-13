import React, {Component} from 'react';
import NavBarMain from "../globalComponent/NavBarMain";

class Home extends Component {

    render() {

        return(
            <div style={{margin: 0}}>
                <NavBarMain AppbarName={"home"} StalkingTime={this.props.StalkingTime} history={this.props.history}/>
            </div>
        )
    }
}
export default Home;
