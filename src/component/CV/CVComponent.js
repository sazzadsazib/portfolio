import React, {Component} from 'react';
import NavBarMain from "../globalComponent/NavBarMain";
import {Icon} from '@material-ui/core';


class CVComponent extends Component {
    
    render() {
        return (
            <div>
                <NavBarMain AppbarName={"Download CV"} StalkingTime={this.props.StalkingTime} history={this.props.history} button={true} buttonName={ <Icon >autorenew</Icon>} buttonaction={()=>this.fetchData()}/>                
                <div>
                    <p>Download CV here</p>
                </div>
            </div>
        );
    }
}

export default CVComponent;