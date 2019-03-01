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
                return <span>Has Pushed {props.payload.size} commit to <span style={{fontWeight: 'bold', color: '#42a5f5'}}>{props.repo.name}</span></span>;
            case "DeleteEvent":
                return <span>Deleted a {props.payload.ref_type} <span style={{fontWeight: 'bold', color: '#42a5f5'}}>{props.payload.ref}</span></span>;
            case "PullRequestEvent":
                return <span>
                    <span className={classes.capitalize}>{props.payload.action}</span> a Pull Request on &nbsp;
                    <a target={'_blank'} href={props.payload.pull_request.html_url} style={{color: '#218cef'}}>{props.repo.name}</a>
                </span>;
            case "CreateEvent":
                return <span>Created a {props.payload.ref_type} <span style={{fontWeight: 'bold', color: '#42a5f5'}}>{props.payload.ref}</span></span>;
            case "PullRequestReviewCommentEvent":
                return <span>Has Commented on a Pull Request <a target={'_blank'} href={props.payload.pull_request.html_url} style={{color: '#218cef'}}>{props.payload.pull_request.title}</a></span>;
            case "WatchEvent":
                let url = ''+props.repo.url;
                url = url.replace('api.','');
                url = url.replace('/repos','');
                return <span>Has a starred <a style={{color: '#218cef'}} target={'_blank'} href={url}>{props.repo.name}</a></span>;
            case "GollumEvent":
                let urlG = ''+props.repo.url;
                urlG = urlG.replace('api.','');
                urlG = urlG.replace('/repos','');
                return <span>Has Updated Wiki on <a style={{color: '#218cef'}} target={'_blank'} href={urlG}>{props.repo.name}</a> </span>;
            case "IssuesEvent":
                return <span>Has {props.payload.action} an <a style={{color: '#218cef'}}  target={"_blank"} href={props.payload.issue.html_url}> Issue</a></span>;
            case "CommitCommentEvent":
                return 'Triggered when a commit comment is created.';
            case "ForkEvent":
                let urlFE = ''+props.repo.url;
                urlFE = urlFE.replace('api.','');
                urlFE = urlFE.replace('/repos','');
                return <span>Has Forked <a style={{color: '#218cef'}} target={'_blank'} href={urlFE}>{props.repo.name}</a> </span>;
            case "LabelEvent":
                return 'Triggered when a repositorys label is created, edited, or deleted.';
            case "MilestoneEvent":
                return "Triggered when a milestone is created, closed, opened, edited, or deleted.";
            case "PublicEvent":
                return "Triggered when a private repository is open sourced. Without a doubt: the best GitHub event.";
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
                return <div>
                    <br/>
                    <div className={classes.blockquote}>
                        {props.payload.commits.map((commit,i)=>
                            <div key={i} style={{padding: 10}}>
                                <ReactMarkdown source={commit.message} />
                            </div>
                        )}
                    </div>
                    <br/>
                    <div className={classes.createdTime}>Created at : {moment(props.created_at).fromNow()}</div>
                </div>;
            case "DeleteEvent":
                return <div>
                    <div className={classes.blockquote}>
                        <div style={{color: '#4a4a4a', marginBottom: 8}}>{props.repo.name}</div>
                        <div style={{fontSize: 12, wordWrap: 'break-word'}}> <ReactMarkdown source={props.payload.description} /></div>
                    </div>
                    <br/>
                    <div className={classes.createdTime}>Created at : {moment(props.created_at).fromNow()}</div>
                </div>;
            case "PullRequestEvent":
                return <div>
                    <div className={classes.blockquote}>
                        <div style={{color: '#4a4a4a', marginBottom: 8}}>{props.payload.pull_request.title}</div>
                        <div style={{fontSize: 12, wordWrap: 'break-word'}}> <ReactMarkdown source={props.payload.pull_request.body} /></div>
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
                        <div style={{fontSize: 12, wordWrap: 'break-word'}}><ReactMarkdown source={props.payload.description} /></div>
                    </div>
                    <br/>
                    <div className={classes.createdTime}>Created at : {moment(props.created_at).fromNow()}</div>
                </div>;
            case "PullRequestReviewCommentEvent":
                return <div>
                    <div className={classes.blockquote}>
                        <div style={{color: '#4a4a4a', marginBottom: 8}}>{props.payload.pull_request.title}</div>
                        <div style={{fontSize: 12, wordWrap: 'break-word'}}><ReactMarkdown source={props.payload.pull_request.body} /></div>
                    </div>
                    <br/>
                    <div className={classes.status}>
                        {props.payload.comment.body}
                    </div>
                    <br/>
                    <div className={classes.createdTime}>Created at : {moment(props.created_at).fromNow()}</div>
                </div>;
            case "WatchEvent":
                return <div>
                    <div className={classes.blockquote}>
                        <div style={{color: '#4a4a4a', marginBottom: 8}}>{props.repo.name}</div>
                        <div style={{fontSize: 12, wordWrap: 'break-word'}}><ReactMarkdown source={props.payload.description} /></div>
                    </div>
                    <br/>
                    <div className={classes.createdTime}>Created at : {moment(props.created_at).fromNow()}</div>
                </div>;
            case "GollumEvent":
                return <div>
                    <div className={classes.blockquote}>
                        {props.payload.pages.map((page,i)=>
                            <div style={{marginBottom: 8}} key={i}>
                                Has {page.action} page titled <a style={{color: '#218cef'}} href={page.html_url}> {page.title}</a>
                            </div>
                        )}
                    </div>
                    <br/>
                    <div className={classes.createdTime}>Created at : {moment(props.created_at).fromNow()}</div>
                </div>;
            case "IssuesEvent":
                return <div>
                    <div className={classes.blockquote}>
                        <div style={{color: '#4a4a4a', marginBottom: 8}}>{props.repo.name}</div>
                        <div style={{fontSize: 12, wordWrap: 'break-word'}}><ReactMarkdown source={props.payload.issue.body} /></div>
                    </div>
                    <br/>
                    <div className={classes.createdTime}>Closed at : {moment(props.created_at).fromNow()}</div>
                </div>;
            case "CommitCommentEvent":
                return 'Triggered when a commit comment is created.';
            case "ForkEvent":
                return <div>
                    <div className={classes.blockquote}>
                        <div style={{color: '#4a4a4a', marginBottom: 8}}>{props.payload.forkee.full_name}</div>
                        <div style={{fontSize: 12, wordWrap: 'break-word'}}><ReactMarkdown source={props.payload.forkee.description} /></div>
                    </div>
                    <br/>
                    <div className={classes.createdTime}>Forked at : {moment(props.created_at).fromNow()}</div>
                </div>;

            case "LabelEvent":
                return 'Triggered when a repositorys label is created, edited, or deleted.';
            case "MilestoneEvent":
                return "Triggered when a milestone is created, closed, opened, edited, or deleted.";
            case "PublicEvent":
                return "Triggered when a private repository is open sourced. Without a doubt: the best GitHub event.";

            default:
                return '';
        }
    }

    function getLink(props) {
        switch (props.type){
            case "IssueCommentEvent":
                return props.payload.issue.html_url;
            case "PullRequestEvent":
                return  props.payload.pull_request.html_url;
            case "CreateEvent": case "PushEvent": case "DeleteEvent": case "WatchEvent":
            let url = props.repo.url;
            url = url.replace('api.','');
            url = url.replace('/repos','');
            return url;
            case "PullRequestReviewCommentEvent":
                return props.payload.comment.html_url;
            case "GollumEvent":
                let urlG = props.repo.url;
                urlG = urlG.replace('api.','');
                urlG = urlG.replace('/repos','');
                urlG = urlG+"/wiki";
                return urlG;
            case "IssuesEvent":
                return props.payload.issue.html_url;
            case "CommitCommentEvent":
                return 'Triggered when a commit comment is created.';
            case "ForkEvent":
               // console.log(props);
                return props.payload.forkee.html_url;
            case "LabelEvent":
                return 'Triggered when a repositorys label is created, edited, or deleted.';
            case "MilestoneEvent":
                return "Triggered when a milestone is created, closed, opened, edited, or deleted.";
            case "PublicEvent":
                return "Triggered when a private repository is open sourced. Without a doubt: the best GitHub event.";
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
            <br/>
        </Card>
    );
}

ActivityCardComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActivityCardComponent);
