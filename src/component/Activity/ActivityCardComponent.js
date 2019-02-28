import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';

const styles = {
    card: {
        maxWidth: '90%',
        margin: '10px auto 20px'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
        fontSize: 18
    },
    blockquote: {
        color: '#666',
        margin: 0,
        paddingLeft: '1em',
        borderLeft: '0.5em #eee solid',
    },
    createdTime: {
        color: 'grey',
        fontSize: 14,
    },
    githubButton: {
        background: 'linear-gradient(to right, #4d62e4 , #0994f2);',
        color: 'white',
        opacity: 0.7,
        margin: '0 auto',
        width: '60%',
    },
    capitalize: {
        textTransform:'capitalize',
    },
    status: {
        fontSize: 12,
        color: 'grey'
    }
};

function ActivityCardComponent(props) {
    const { classes, event } = props;

    function switchCaseType(props) {
        switch (props.type){
            case "IssueCommentEvent":
                return <span>
                    Has Commented on a <a target={'_blank'} style={{fontWeight: 'bold', color: '#42a5f5'}} href={props.payload.issue.html_url}>Issue</a></span>;
            case "PushEvent":
                return <span>PushEvent</span>;
            case "DeleteEvent":
                return <span>DeleteEvent</span>;
            case "PullRequestEvent":
                return <span>
                    <span className={classes.capitalize}>{props.payload.action}</span> a Pull Request on &nbsp;
                    <a target={'_blank'} href={props.payload.pull_request.html_url} style={{color: '#218cef'}}>{props.repo.name}</a>
                </span>;
            case "CreateEvent":
                console.log(props);
                return <span>Created a {props.payload.ref_type} <span style={{fontWeight: 'bold', color: '#42a5f5'}}>{props.payload.ref}</span></span>;
            case "PullRequestReviewCommentEvent":
                return <span>PullRequestReviewCommentEvent</span>;
            case "WatchEvent":
                return <span>WatchEvent</span>;
            case "GollumEvent":
                return <span>GollumEvent</span>;
            case "IssuesEvent":
                return <span>IssuesEvent</span>;


            default:
                return '';
        }
    }

    function switchCaseTypeBody(props) {
        switch (props.type){
            case "IssueCommentEvent":
                return <div>
                    <div  className={classes.blockquote}>
                    <ReactMarkdown  source={props.payload.comment.body} />
                    </div>
                    <br/>
                    <div className={classes.createdTime}>Created at : {moment(props.created_at).fromNow()}</div>
                </div>;
            case "PushEvent":
                return <span>PushEvent</span>;
            case "DeleteEvent":
                return <span>DeleteEvent</span>;
            case "PullRequestEvent":
                return <div>
                    <div className={classes.blockquote}>
                        <div style={{color: '#4a4a4a', marginBottom: 8}}>{props.payload.pull_request.title}</div>
                        <div style={{fontSize: 12}}>{props.payload.pull_request.body}</div>
                    </div>
                    <br/>
                    <div className={classes.status}>
                        <div>Commit: {props.payload.pull_request.commits},
                            &nbsp;Addition: {props.payload.pull_request.additions},
                            &nbsp;Deletions: {props.payload.pull_request.deletions},
                            &nbsp;Canged Files: {props.payload.pull_request.changed_files} </div>
                    </div>
                    <br/>
                    <div className={classes.createdTime}>Created at : {moment(props.created_at).fromNow()}</div>
                </div>;
            case "CreateEvent":
                return <div>
                    <div className={classes.blockquote}>
                        <div style={{color: '#4a4a4a', marginBottom: 8}}>{props.repo.name}</div>
                        <div style={{fontSize: 12}}>{props.payload.description}</div>
                    </div>
                    <br/>
                    <div className={classes.createdTime}>Created at : {moment(props.created_at).fromNow()}</div>
                </div>;
            case "PullRequestReviewCommentEvent":
                return <span>PullRequestReviewCommentEvent</span>;
            case "WatchEvent":
                return <span>WatchEvent</span>;
            case "GollumEvent":
                return <span>GollumEvent</span>;
            case "IssuesEvent":
                return <span>IssuesEvent</span>;


            default:
                return '';
        }
    }

    function getLink(props) {
        switch (props.type){
            case "IssueCommentEvent":
                return props.payload.issue.html_url;
            case "PushEvent":
                return ;
            case "DeleteEvent":
                return ;
            case "PullRequestEvent":
                return  props.payload.pull_request.html_url;
            case "CreateEvent":
                return ;
            case "PullRequestReviewCommentEvent":
                return ;
            case "WatchEvent":
                return ;
            case "GollumEvent":
                return ;
            case "IssuesEvent":
                return ;


            default:
                return '';
        }
    }

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    <span><a style={{textDecoration: 'none', color: '#4a4a4a', fontWeight: 'bold', textTransform: 'capitalize'}}
                             href={event.actor.url}>
                        {event.actor.display_login}
                    </a>
                        &nbsp; {switchCaseType(event)}
                    </span>
                </Typography>
                {/*<Typography variant="h5" component="h2">*/}
                {/*{switchCaseTypeBody(event)}*/}
                {/*</Typography>*/}
                <div>
                    {switchCaseTypeBody(event)}
                </div>
            </CardContent>
            <CardActions>
                <Button className={classes.githubButton} target={'_blank'} href={getLink(event)} size="small">See In Github</Button>
            </CardActions>
        </Card>
    );
}

ActivityCardComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActivityCardComponent);
