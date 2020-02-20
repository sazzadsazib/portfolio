import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import Forward from '@material-ui/icons/Forward';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SvgIcon from '@material-ui/core/SvgIcon';

const styles = theme => ({
    card: {
        maxWidth: '90%',
        margin: '10px auto 20px',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
        boxShadow: '0px 0px 14px #009bff61',
    },
});

class CardComponent extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar
                            aria-label="admin"
                            src={this.props.avatar}
                            alt="Sazzad Sazib"
                            className={classes.avatar}>
                        </Avatar>
                    }
                    action={
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={this.props.title}
                    subheader={this.props.subheader}
                />
                <CardMedia
                    className={classes.media}
                    image={this.props.media}
                    title={this.props.title}
                />
                <CardContent>
                    <Typography component="p">
                        {this.props.description}
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton
                        className={classnames({
                            [classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                    <IconButton
                        href={this.props.GithubLink}
                        rel="noopener noreferrer"
                        target={'_blank'}
                        className={classnames(classes.expand)}>
                        <SvgIcon>
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </SvgIcon>
                    </IconButton>

                    <IconButton
                        href={this.props.link}
                        rel="noopener noreferrer"
                        target={'_blank'}
                        aria-label="Visit"
                        className={classnames(classes.expand)}>
                        <Forward />
                    </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Installation:</Typography>
                        <Typography paragraph>
                            {this.props.usage}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        );
    }
}

CardComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardComponent);
