import React, {Component} from 'react';

class WorkSection extends Component {

    render() {
        return(
            <div>
                <div className="contact-info-section">
                    <div className="title-name"  style={{width: '65%'}}>Work &amp; Information</div>
                </div>
                <br/><br/>
                {this.props.Works ?
                <div className="work-section-profile">
                    {this.props.Works.map((item,i)=>{
                        return(
                            <div className="row" key={i}>
                                <div className="w-o-5 w-25">
                                    <img src={item.picture} className="work-icon" alt={item.workPlace}/>
                                </div>
                                <div className="w-70" style={{marginBottom: 20}}>
                                    <p className="work-title">{item.workDesignation}</p>
                                    <p className="work-company-title">{item.workPlace}</p>
                                    <p className="work-company-duration">{item.workDuration}</p>
                                    <p className="work-description">{item.workDescription}. Visit: <a href={item.workLink} target="_blank" style={{fontWeight: '600', color: '#347dec'}}>Here</a></p>
                                </div>
                            </div>
                        )
                    })}
                </div> : <div style={{fontSize: '14px', textAlign: 'center', color: '#a7a7a7', textTransform: 'uppercase', marginTop: '20px' }}> No Data Given as Props</div> }
            </div>
        )
    }
}
export default WorkSection;
