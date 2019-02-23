import React, {Component} from 'react';
import NavBarMain from "../globalComponent/NavBarMain";
import CardComponent from './CardComponent';
import Sazib from '../globalComponent/assets/images/sazibList.png';
import CohortGraph from './assets/images/react-cohort-graph.jpg';
import Ness from './assets/images/nescss.png';
import NessCover from  './assets/images/nesCover.jpg';
import wordCloudReact from './assets/images/word-cloud-react.jpg';
import utilty from './assets/images/utilitycss3.jpg';
import arun from './assets/images/arun.png';
import reactHeatmapGrid from './assets/images/react-heatmap-grid.jpg';

class OpenSource extends Component {

    render() {
        return(
            <div>
                <NavBarMain AppbarName={"Open Source"} StalkingTime={this.props.StalkingTime}
                            history={this.props.history}/>
                <div>
                    <CardComponent
                        avatar={Ness}
                        title={"NES.css"}
                        subheader={'version: 2.0.0'}
                        media={NessCover}
                        description={'NES.css is a NES-style(8bit-like) CSS Framework.'}
                        link={'https://www.npmjs.com/package/nes.css'}
                        GithubLink={'https://github.com/nostalgic-css/NES.css'}
                        usage={'npm i cohort-graph-react --save'}
                    />
                    <CardComponent
                        avatar={arun}
                        title={"React Heatmap Grid"}
                        subheader={'version: 0.7.3'}
                        media={reactHeatmapGrid}
                        description={'A react component for heatmap in grid layout'}
                        link={'https://www.npmjs.com/package/react-heatmap-grid'}
                        GithubLink={'https://github.com/arunghosh/react-heatmap-grid'}
                        usage={'npm install react-heatmap-grid --save'}
                    />
                    <CardComponent
                        avatar={Sazib}
                        title={"Cohort React Graph"}
                        subheader={'version: 0.1.7'}
                        media={CohortGraph}
                        description={'A library of to show React cohort graph'}
                        link={'https://www.npmjs.com/package/cohort-graph-react'}
                        GithubLink={'https://github.com/sazzadsazib/cohort-react-graph'}
                        usage={'npm i ness.css --save'}
                    />
                    <CardComponent
                        avatar={Sazib}
                        title={"Word Cloud React"}
                        subheader={'version: 0.1.10'}
                        media={wordCloudReact}
                        description={'A library of to show Word Cloud in ReactJs'}
                        link={'https://www.npmjs.com/package/word-cloud-react'}
                        GithubLink={'https://github.com/sazzadsazib/word-cloud-react'}
                        usage={'npm i word-cloud-react --save'}
                    />
                    <CardComponent
                        avatar={Sazib}
                        title={"utilitycss3"}
                        subheader={'version: 0.0.1'}
                        media={utilty}
                        description={'This framework created based on Scss mixin for your css. This framework can generate margin, padding and some basic extraa css and minify it based on your requirement.'}
                        link={'https://www.npmjs.com/package/utilitycss3'}
                        GithubLink={'https://github.com/sazzadsazib/UtilityCss'}
                        usage={'npm i utilitycss3 --save'}
                    />
                </div>
            </div>
        )
    }
}
export default OpenSource;
