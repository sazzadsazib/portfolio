import React, {Component} from 'react';

class ContactSection extends Component {

    render() {
        return(
            <div className="contact-info-section">
                <div className="title-name">Contact</div>
                <br/>
                {this.props.contactLinks ?
                <div className="contact-item-wrapper">
                    { this.props.contactLinks.map((item,i)=> {
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
                </div> : <div style={{fontSize: '14px', textAlign: 'center', color: '#a7a7a7', textTransform: 'uppercase', marginTop: '20px' }}> No Data Given as Props</div>}
                <br/><br/>
            </div>
        )
    }
}
export default ContactSection;
