import React, {Component} from 'react';
import NavBarMain from "../globalComponent/NavBarMain";

class Home extends Component {

    render() {

        return(
            <div style={{margin: 0}}>
                <NavBarMain AppbarName={"home"} StalkingTime={this.props.StalkingTime} history={this.props.history}/>
                <div style={{margin: '10px'}}>
                    More contents will render later
                </div>
            </div>
        )
    }
}
export default Home;
