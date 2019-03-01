import React, {Component} from 'react';
import NavBarMain from "../globalComponent/NavBarMain";
import GridComponent  from './GridComponent';
import { Offline, Online } from "react-detect-offline";
import OfflineImage from '../globalComponent/assets/images/cry.svg';

class DesignComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tilesData:[{
                img: 'https://cdn.dribbble.com/users/1665727/screenshots/5867100/dribble_invite.png',
                title: 'Dribble Invite',
                author: '@sazzadsazib',
                featured: false,
            },{
                img: 'https://cdn.dribbble.com/users/1665727/screenshots/5777806/dribble___3_new.png',
                title: 'Website Landing Page',
                author: '@sazzadsazib',
                featured: false,
            },{
                img: 'https://cdn.dribbble.com/users/1665727/screenshots/5763202/maxxgroup_dribble_shot.jpg',
                title: 'Landing page',
                author: '@sazzadsazib',
                featured: true,
            },{
                img: 'https://cdn.dribbble.com/users/1665727/screenshots/5425298/misfitposter_1_4x.jpg',
                title: 'Random Wall poster with Quotes',
                author: '@sazzadsazib',
                featured: false,
            },{
                img: 'https://cdn.dribbble.com/users/1665727/screenshots/5331751/website_cover.png',
                title: 'Website Cover',
                author: '@sazzadsazib',
                featured: false,
            },{
                img: 'https://cdn.dribbble.com/users/1665727/screenshots/4844592/dribbble_shot_redesign.png',
                title: 'Website Mockup',
                author: '@sazzadsazib',
                featured: true,
            },{
                img: 'https://cdn.dribbble.com/users/1665727/screenshots/4823900/cover_demo.png',
                title: 'Alice Chatbot Website Cover',
                author: '@sazzadsazib',
                featured: false,
            },{
                img: 'https://cdn.dribbble.com/users/1665727/screenshots/4787791/idcard.png',
                title: 'ID Card',
                author: '@sazzadsazib',
                featured: false,
            },{
                img: 'https://cdn.dribbble.com/users/1665727/screenshots/4194646/alice_login_page.png',
                title: 'Alice Login Page',
                author: '@sazzadsazib',
                featured: true,
            },{
                img: 'https://cdn.dribbble.com/users/1665727/screenshots/4266287/alice-adaptive-logo-dribble-.gif',
                title: 'Alice Adaptive Icon',
                author: '@sazzadsazib',
                featured: false,
            },{
                img: 'https://cdn.dribbble.com/users/1665727/screenshots/4263307/alice_dribbble.png',
                title: 'Alice App Icon',
                author: '@sazzadsazib',
                featured: false,
            },{
                img: 'https://cdn.dribbble.com/users/1665727/screenshots/4090063/super_stick.jpg',
                title: 'Super kid.',
                author: '@sazzadsazib',
                featured: true,
            },{
                img: 'https://cdn.dribbble.com/users/1665727/screenshots/4082807/payment_mockup.png',
                title: 'Maya Apa Payment UI Mockup',
                author: '@sazzadsazib',
                featured: false,
            },{
                img: 'https://cdn.dribbble.com/users/1665727/screenshots/4075387/alice.png',
                title: 'Alice Chatbot',
                author: '@sazzadsazib',
                featured: false,
            }]
        }
    }

    render() {
        return(
            <div>
                <NavBarMain AppbarName={"Design"} StalkingTime={this.props.StalkingTime}
                            history={this.props.history}/>
                <div>
                    <Online>
                        <div style={{margin: 20, border: '8px solid white', boxShadow: '0px 0px 6px #ccc'}}>
                            <GridComponent tilesData={this.state.tilesData}/>
                        </div>
                    </Online>
                    <Offline>
                        <div className={'center'}>
                            <img src={OfflineImage} style={{width: '20%',marginTop: '10%',opacity: 0.6}} alt={'offline'}/>
                            <p className={'gradient-text'}>Hola! You Need Internet Connection<br/>To See This Page</p>
                        </div>
                    </Offline>

                </div>
            </div>
        )
    }
}
export default DesignComponent;
