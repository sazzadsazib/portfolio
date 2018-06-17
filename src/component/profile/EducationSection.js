import React, {Component} from 'react';

class EducationSection extends Component {

    render() {
        return(
            <div style={{marginTop: '20px'}}>
                <div className="contact-info-section">
                    <div className="title-name"  style={{width: '65%'}}>Education</div>
                </div>
                <br/><br/>
                {this.props.Education ?
                    <div className="education-section-profile">
                        {this.props.Education.map((item,i)=>{
                            return(
                                <div className="row mb-15px" key={i}>
                                    <div className="w-o-5 w-25">
                                        <img src={item.picture} className="work-icon" alt={item.workPlace}/>
                                    </div>
                                    <div className="w-70" style={{marginBottom: 20}}>
                                        <p className="work-title">{item.title}</p>
                                        <p className="work-company-title">{item.Institute}</p>
                                        <p className="work-company-duration">{item.Duration}</p>
                                        <p className="work-description-2">{item.CGPA}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div> : <div style={{fontSize: '14px', textAlign: 'center', color: '#a7a7a7', textTransform: 'uppercase', marginTop: '20px' }}> No Data Given as Props</div> }
            </div>
        )
    }
}
export default EducationSection;
