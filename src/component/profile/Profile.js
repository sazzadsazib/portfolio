import React, {Component} from 'react';
import NavBarMain from "../globalComponent/NavBarMain";
import './assets/css/profile.css';
import PhoneIcon from './assets/images/phone-icon.svg';
import EmailIcon from './assets/images/email-icon.svg';
import Github from './assets/images/github-icon.svg';
import Facebook from './assets/images/facebook-icon.svg';
import Misfit from './assets/images/misfit-icon.svg';
import MayaApa from './assets/images/mayaapa-icon.svg';
import Freelancer from './assets/images/freelancer-icon.svg';
import Dribbble from './assets/images/dribbble.svg';
import AvatarSection from "./AvatarSection";
import ContactSection from "./ContactSection";
import WorkSection from "./WorkSection";
import EducationSection from "./EducationSection";
import EducationIcon from './assets/images/education-icon.svg';

class Profile extends Component {
    constructor(props) {
        super(props);
        // quick comment using contactLinks to add items by just adding a array item (helps mee for lots of item)
        this.state= {
            contactLinks: [
                { link: "tel:+8801674716980" , title: "+880 167 471 6980", picture: PhoneIcon},
                { link: "mailto:sazib66@gmail.com" , title: "sazib66@gmail.com", picture: EmailIcon},
                { link: "https://www.facebook.com/sazzzadsazib" , title: "sazzzadsazib", picture: Facebook},
                { link: "https://github.com/sazzadsazib" , title: "sazzadsazib", picture: Github},
                { link: "https://dribbble.com/sazzadsazib" , title: "sazzadsazib", picture: Dribbble},
            ],
            Works: [
                {picture: Misfit, workDesignation: "Front end Developer at", workPlace: "Misfit Technologies", workDuration: "Aug 2017 - Present", workDescription: "Working here as Front end developer. I am working in ReactJS here. Working in a project called alice.", workLink: "https://www.misfit.tech" },
                {picture: MayaApa, workDesignation: "UI/UX Designer & Front end Developer at", workPlace: "Mayalogy Ltd", workDuration: "Jan 2017 - Dec 2017", workDescription: "Worked here as UI/UX Designer, which I had to do prototyping work on UX how to grab user through User interface also worked as front end developer. I developed their Freebasics website which was their top platform on that time.", workLink: "https://maya.com.bd/" },
                {picture: Freelancer, workDesignation: "UI/UX Designer", workPlace: "Client Based", workDuration: "Jan 2016 - Present", workDescription: "I Really Love to Design, Specially Mobile app UI Design, I have done different app's UI Design as Freelance Project. Check My Dribbble for More", workLink: "https://dribbble.com/sazzadsazib" },
            ],
            Education: [
                {picture: EducationIcon, title: "University", Institute: "BRAC University", Duration: "Aug 2012 - Dec 2016", CGPA: "3.56 Out of 4" },
                {picture: EducationIcon, title: "College", Institute: "Govt Bangla College", Duration: "Aug 2010 - Aug 2012", CGPA: "3.6 Out of 5 ( Result matters? NO)" },
                {picture: EducationIcon, title: "High School", Institute: 'Sher-e-Bangla Nagar Govt Boys’ High School', Duration: "Jan 2006 - Apr 2010", CGPA: "4.75 Out of 5" },
            ]
        };
    }



    render() {
        return(
            <div>
                <NavBarMain AppbarName={"Profile"} StalkingTime={this.props.StalkingTime} history={this.props.history}/>

                <div className="profile-container">

                    <AvatarSection age={'1994'}
                                   name={'Md. Sazzadul Islam'}
                                   location={'Dhaka, Bangladesh'}
                                   description={'Hey, I am Sazzad, A guy who love to code, also loves to design. I worked as a UI/UX designer & Front-end developer at beginning of my career, I been working in ReactJS and has interest in new technologies. In the end you have to be king of one deck not JACK'}
                    />
                    <div className="profile-info-section">
                        <ContactSection contactLinks={this.state.contactLinks}/>
                        <WorkSection Works={this.state.Works}/>
                        <EducationSection Education={this.state.Education}/>
                    </div>

                </div>
            </div>
        )
    }
}
export default Profile;
