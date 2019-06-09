import React, {Component} from 'react';
import NavBarMain from "../globalComponent/NavBarMain";
import {Icon,
        List,
        ListItem,
        ListItemText,
        ListItemAvatar,
        Avatar} from '@material-ui/core';


class CVComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            docs: []
        };
        this.fetchDoc = this.fetchDoc.bind(this);
        this.retrieveDocs = this.retrieveDocs.bind(this);
    }

    retrieveDocs() {
        const exampleDocuments = [
            {
                path: "/assets/documents/cv1.txt",
                downloadAs: "CV.txt",
                displayName: "CV",
                lastMod: new Date(2019, 5, 7, 12, 30)
            },
            {
                path: "/assets/documents/resume.txt", 
                downloadAs: "Resume.txt",
                displayName: "Resume",
                lastMod: new Date(2019, 5, 8, 12, 30)
            },
            {
                path: "/assets/documents/coverletter.txt", 
                downloadAs: "CoverLetter.txt",
                displayName: "Cover Letter",
                lastMod: new Date(2019, 5, 9, 12, 30)
            }
        ];
        this.setState({
            docs: exampleDocuments
        });
    }

    fetchDoc(key) {
        // console.log('attempting to download', this.state.docs[key].displayName);

        let dlink = document.createElement('a');
        dlink.setAttribute('href', this.state.docs[key].path);
        dlink.setAttribute('download', this.state.docs[key].downloadAs);
        dlink.style.display = 'none';
        
        document.body.appendChild(dlink);

        dlink.click();
        document.body.removeChild(dlink);
    }

    componentDidMount() {
        this.retrieveDocs();
    }
    
    render() {
        return (
            <div>
                <NavBarMain AppbarName={"Download CV"} StalkingTime={this.props.StalkingTime} history={this.props.history}/>                
                <List>
                    {this.state.docs.map((doc, i) => 
                        <ListItem
                            key={i}
                            button={true}
                            onClick={() => this.fetchDoc(i)}
                        >
                            <ListItemAvatar>
                                <Avatar>
                                    <Icon>description</Icon>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText 
                                primary={doc.displayName}
                                secondary={doc.lastMod.toDateString()}
                            />
                        </ListItem>
                    )}
                </List>
            </div>
        );
    }
}

export default CVComponent;