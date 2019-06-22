import React, {useState,useEffect} from 'react';
import NavBarMain from "../globalComponent/NavBarMain";
import './assets/css/cv.css';
import firstPicture from "./assets/images/CVImages/1.svg";
import secondPicture from "./assets/images/CVImages/2.svg";
import thirdPicture from "./assets/images/CVImages/3.svg";
import fourthPicture from "./assets/images/CVImages/4.svg";
import fifthPicture from "./assets/images/CVImages/5.svg";
import sixthPicture from "./assets/images/CVImages/6.svg";
import seventhPicture from "./assets/images/CVImages/7.svg";
import eightPicture from "./assets/images/CVImages/8.svg";
import ninthPicture from "./assets/images/CVImages/9.svg";
import ImgsViewer from 'react-images-viewer';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import pdfDownloadfile from './assets/sazib.pdf';


function CvWrapper(props) {

    const [currImage,setCurrImage] = useState('');
    const [loadedState,SetloadedState] = useState(true);

    useEffect(()=> {
        setTimeout(()=>SetloadedState(false),1000);
        //storing current state
        localStorage.setItem('currState',props.history.location.pathname);
    },[]);

    return(
        <div>
            <NavBarMain AppbarName={"CV"} StalkingTime={props.StalkingTime}
                        history={props.history}/>
            <div className="center">
                {loadedState ?
                    <CircularProgress style={{color: 'primary', margin: '20vh auto 0px auto'}} thickness={4}/> :
                    <div className={'cv-viewer'}>
                        <img onClick={() => setCurrImage(firstPicture)} src={firstPicture} alt={1}
                             className={'cv-viewer__image'}/>
                        <img onClick={() => setCurrImage(secondPicture)} src={secondPicture} alt={1}
                             className={'cv-viewer__image'}/>
                        <img onClick={() => setCurrImage(thirdPicture)} src={thirdPicture} alt={1}
                             className={'cv-viewer__image'}/>
                        <img onClick={() => setCurrImage(fourthPicture)} src={fourthPicture} alt={1}
                             className={'cv-viewer__image'}/>
                        <img onClick={() => setCurrImage(fifthPicture)} src={fifthPicture} alt={1}
                             className={'cv-viewer__image'}/>
                        <img onClick={() => setCurrImage(sixthPicture)} src={sixthPicture} alt={1}
                             className={'cv-viewer__image'}/>
                        <img onClick={() => setCurrImage(seventhPicture)} src={seventhPicture} alt={1}
                             className={'cv-viewer__image'}/>
                        <img onClick={() => setCurrImage(eightPicture)} src={eightPicture} alt={1}
                             className={'cv-viewer__image'}/>
                        <img onClick={() => setCurrImage(ninthPicture)} src={ninthPicture} alt={1}
                             className={'cv-viewer__image'}/>
                    </div>
                }
            </div>
            {loadedState ? "":
                <div className={'abs-fav-icon__downLeft'}>
                    <a href={pdfDownloadfile} download>
                    <Fab color="primary" aria-label="download" style={{margin: 10, background: 'linear-gradient(to right, rgb(77, 97, 228), rgb(3, 149, 242))'}}>
                        <Icon>cloud_download</Icon>
                    </Fab>
                    </a>
                </div>}
            <ImgsViewer
                imgs={[{ src: currImage }]}
                currImg={0}
                isOpen={currImage !== '' ? true : false}
                onClose={()=>setCurrImage('')}
            />
        </div>
    )
}
export default CvWrapper;
