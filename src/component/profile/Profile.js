import React, {Component} from 'react';
import NavBarMain from "../globalComponent/NavBarMain";
import Avatar from '@material-ui/core/Avatar';
import Sazib from '../globalComponent/assets/images/sazibList.png';
import './assets/css/profile.css';
import Badge from '@material-ui/core/Badge';
import PhoneIcon from './assets/images/phone-icon.svg';
import EmailIcon from './assets/images/email-icon.svg';
import Github from './assets/images/github-icon.svg';
import Facebook from './assets/images/facebook-icon.svg';

class Profile extends Component {
    constructor(props) {
        super(props);
        // quick comment using contactLinks to add items by just adding a array item (helps mee for lots of item)
        this.state= {
            age: 0,
            contactLinks: [
                { link: "tel:+8801674716980" , title: "+880 167 471 6980", picture: PhoneIcon},
                { link: "mailto:sazib66@gmail.com" , title: "sazib66@gmail.com", picture: EmailIcon},
                { link: "https://www.facebook.com/sazzzadsazib" , title: "sazzzadsazib", picture: Facebook},
                { link: "https://github.com/sazzadsazib" , title: "sazzadsazib", picture: Github},
            ],
        };
        this.getMyage = this.getMyage.bind(this);
    }

    getMyage(myBday) {
        this.setState({
            age: new Date().getFullYear() - myBday
        })
    }
    componentWillMount() {
        this.getMyage('1994');
    }

    render() {
        return(
            <div>
                <NavBarMain AppbarName={"Profile"} StalkingTime={this.props.StalkingTime} history={this.props.history}/>
                <div className="profile-container">
                    <div className="avatar-section">
                    <Badge badgeContent={this.state.age} color="primary" className="badge-position">
                    <Avatar
                        alt="Sazzad Ssazib"
                        src={Sazib}
                        style={{ margin: '0px auto', width: 150, height: 150, boxShadow: '0px 2px 4px #15365099'}}
                    />
                    </Badge>
                    </div>
                    <div className="avatar-content-info">
                        <p className="titleName">Sazzadul Islam</p>
                        <p className="subTitleName">Dhaka, Bangladesh</p>
                        <p className="description-content-info">
                            Hey, I am Sazzad, A guy who love to code, also loves to design. I worked as a UI/UX designer & Front-end developer at beginning of my career, I been working in ReactJS and has interest in new technologies. In the end you have to be king of one deck not JACK
                        </p>
                    </div>

                    <div className="profile-info-section">
                        <div className="contact-info-section">
                            <div className="title-name">Contact</div>
                            <br/>
                            <div className="contact-item-wrapper">
                                {this.state.contactLinks.map((item,i)=> {
                                    return(
                                        <div key={i}>
                                        <div className="contact-item">
                                            <img src={item.picture} alt="Phone" width="25px"/>
                                            <a  rel="noopener noreferrer" href={item.link} target="_blank">
                                                <p className="contact-item-text">{item.title}</p>
                                            </a>
                                        </div>
                                        <div style={{clear: 'both'}} />
                                        </div>
                                    )
                                    }
                                )}

                                {/*<div className="contact-item">*/}
                                    {/*<img src={EmailIcon} alt="Phone" width="25px"/>*/}
                                    {/*<a  rel="noopener noreferrer" href={this.state.emailLink.link} target="_blank">*/}
                                        {/*<p className="contact-item-text">{this.state.emailLink.title}</p>*/}
                                    {/*</a>*/}
                                {/*</div>*/}
                                {/*<div style={{clear: 'both'}} />*/}
                                {/*<div className="contact-item">*/}
                                    {/*<img src={Github} alt="Phone" width="25px"/>*/}
                                    {/*<a  rel="noopener noreferrer" href={this.state.githubLink.link} target="_blank">*/}
                                        {/*<p className="contact-item-text">{this.state.githubLink.title}</p>*/}
                                    {/*</a>*/}
                                {/*</div>*/}
                                {/*<div style={{clear: 'both'}} />*/}
                                {/*<div className="contact-item">*/}
                                    {/*<img src={Facebook} alt="Phone" width="25px"/>*/}
                                    {/*<a  rel="noopener noreferrer" href={this.state.facebookLink.link} target="_blank">*/}
                                        {/*<p className="contact-item-text">{this.state.facebookLink.title}</p>*/}
                                    {/*</a>*/}
                                {/*</div>*/}
                                {/*<div style={{clear: 'both'}} />*/}
                            </div>
                            <br/><br/>
                            <div className="contact-info-section">
                                <div className="title-name"  style={{width: '65%'}}>Work &amp; Information</div>
                            </div>
                         </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default Profile;
