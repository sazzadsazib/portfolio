import React, {Component} from 'react';
import NavBarMain from "../globalComponent/NavBarMain";
import CardComponent from './CardComponent';
import Sazib from '../globalComponent/assets/images/sazibList.png';
import CohortGraph from './assets/images/react-cohort-graph.jpg';

class OpenSource extends Component {

    render() {
        return(
            <div>
                <NavBarMain AppbarName={"Open Source"} StalkingTime={this.props.StalkingTime}
                            history={this.props.history}/>
                <div>
                    <CardComponent
                        avatar={Sazib}
                        title={"Cohort React Graph"}
                        subheader={'version: 0.1.7'}
                        media={CohortGraph}
                        description={'A library of to show React cohort graph'}
                        link={'https://www.npmjs.com/package/cohort-graph-react'}
                        GithubLink={'https://github.com/sazzadsazib/cohort-react-graph'}
                        usage={'npm i cohort-graph-react --save'}
                    />
                </div>
            </div>
        )
    }
}
export default OpenSource;
