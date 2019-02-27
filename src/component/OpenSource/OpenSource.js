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
import reactCover from './assets/images/reactCover.jpg';
import reactLogo from './assets/images/reactLogo.jpg';
import CircularProgress from '@material-ui/core/CircularProgress';

class OpenSource extends Component {

    constructor(props){
        super(props);
        this.state = {
            loadedState: true,
            projects : [
                {
                    avatar: Ness,
                    title: "NES.CSS",
                    subHeader: "version: 2.1.0",
                    media: NessCover,
                    description: "NES.css is a NES-style(8bit-like) CSS Framework.",
                    link: "https://www.npmjs.com/package/nes.css",
                    gitLink: "https://github.com/nostalgic-css/NES.css",
                    usage: "npm i nes.css --save"
                },
                {
                    avatar: reactLogo,
                    title: "reactjs/bn.reactjs.org",
                    subHeader: "version: 0.0.1",
                    media: reactCover,
                    description: "ইউজার ইন্টারফেস তৈরির জন্য একটি জাভাস্ক্রিপ্ট লাইব্রেরি(বাংলায়)",
                    link: "https://www.npmjs.com/package/react",
                    gitLink: "https://github.com/reactjs/bn.reactjs.org",
                    usage: "npm i react --save"
                },
                {
                    avatar: arun,
                    title: "React Heatmap Grid",
                    subHeader: "version: 0.7.3",
                    media: reactHeatmapGrid,
                    description: "A react component for heatmap in grid layout",
                    link: "https://www.npmjs.com/package/react-heatmap-grid",
                    gitLink: "https://github.com/arunghosh/react-heatmap-grid",
                    usage: "npm install react-heatmap-grid --save"
                },
                {
                    avatar: Sazib,
                    title: "Cohort React Graph",
                    subHeader: "version: 0.1.7",
                    media: CohortGraph,
                    description: "A library of to show React cohort graph",
                    link: "https://www.npmjs.com/package/cohort-graph-react",
                    gitLink: "https://github.com/sazzadsazib/cohort-react-graph",
                    usage: "npm i cohort-graph-react --save"
                },
                {
                    avatar: Sazib,
                    title: "Word Cloud React",
                    subHeader: "version: 0.1.10",
                    media: wordCloudReact,
                    description: "A library of to show Word Cloud in ReactJs",
                    link: "https://www.npmjs.com/package/word-cloud-react",
                    gitLink: "https://github.com/sazzadsazib/word-cloud-react",
                    usage: "npm i word-cloud-react --save"
                },
                {
                    avatar: Sazib,
                    title: "utilitycss3",
                    subHeader: "version: 0.0.1",
                    media: utilty,
                    description: "This framework created based on Scss mixin for your css. This framework can generate margin, padding and some basic extraa css and minify it based on your requirement.",
                    link: "https://www.npmjs.com/package/utilitycss3",
                    gitLink: "https://github.com/sazzadsazib/UtilityCss",
                    usage: "npm i utilitycss3 --save"
                },
            ]
        }
    }
    componentDidMount() {
        setTimeout(()=>this.setState({loadedState: false}),1000)
    }
    render() {
        return(
            <div>
                <NavBarMain AppbarName={"Open Source"} StalkingTime={this.props.StalkingTime}
                            history={this.props.history}/>
                <div className="center">
                    {this.state.loadedState  ?
                        <CircularProgress style={{ color: 'primary', margin: '20vh auto 0px auto' }} thickness={4} /> :
                        this.state.projects.map((project)=>
                            <CardComponent
                                avatar={project.avatar}
                                title={project.title}
                                subheader={project.subHeader}
                                media={project.media}
                                description={project.destination}
                                link={project.link}
                                GithubLink={project.gitLink}
                                usage={project.usage}
                            />
                        )
                    }
                </div>
            </div>
        )
    }
}
export default OpenSource;
