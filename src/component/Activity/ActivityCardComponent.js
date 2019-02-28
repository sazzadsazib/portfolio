import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReactMarkdown from 'react-markdown';

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
                return <span>PullRequestEvent</span>;
            case "CreateEvent":
                return <span>CreateEvent</span>;
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
                return <div className={classes.blockquote}><ReactMarkdown  source={props.payload.comment.body} /></div>;
            case "PushEvent":
                return <span>PushEvent</span>;
            case "DeleteEvent":
                return <span>DeleteEvent</span>;
            case "PullRequestEvent":
                return <span>PullRequestEvent</span>;
            case "CreateEvent":
                return <span>CreateEvent</span>;
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
                <Typography component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

ActivityCardComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActivityCardComponent);
