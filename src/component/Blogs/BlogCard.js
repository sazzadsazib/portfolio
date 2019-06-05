import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { AccessTime, ChromeReaderMode } from '@material-ui/icons';
import moment from 'moment';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import MediumIcon from './assets/images/medium.svg';
import {Online, Offline} from 'react-detect-offline';

function BlogCard(props) {
    return <div className={'blog--card__container'}>
        <div className={'blog--card__header'}>
        <Avatar alt="Remy Sharp" src={props.avatar} className={'blog--card__avatar'}  />
            <Typography variant="h6" component="h6" style={{marginTop: 5}}>
                {props.name}
                <Typography variant="caption" component="p" style={{marginTop: 5, display: 'flex'}}>
                    <AccessTime style={{width: 15, marginTop: -5}}/> &nbsp;{moment(props.created_at*1000).fromNow()}
                </Typography>
            </Typography>
        </div>
            <Typography variant="button" component="div" style={{marginTop: 5}}>
                {props.title}
            </Typography>
        <Typography variant="caption" component="p" style={{marginTop: 5, display: 'flex'}}>
            <ChromeReaderMode style={{width: 15, marginTop: -5}}/> &nbsp;{props.readTime}
        </Typography>
        {props.tags.length > 0 ?
            <div style={{marginTop: 10}}>
            {props.tags.map((tag,i)=>
                <Chip
                    key={i}
                    size="small"
                    label={tag}
                    className={"blog--card__chip"}
            />)}
        </div>
            : ' '}
            <br/>
        <img src={props.cover} style={{width: '100%'}} alt={'blog-cover'} />
        <Typography variant="caption" style={{marginTop: 5}}>
            {props.description.length > 160 ? props.description.substring(0,160)+"..." : props.description}
        </Typography>
        <br/>
        <div className={'blog--card__centerdiv'}>
            <Online>
                <Button href={props.link} target={'_blank'} variant="contained" color="secondary" className={'blog--card__button'}>
                    <img src={MediumIcon} style={{width: 25}} alt={'medium'}/>&nbsp; Read More at Medium
                </Button>
            </Online>
            <Offline>
                <Button target={'_blank'} variant="contained" color="secondary" className={'blog--card__button'}>
                    <img src={MediumIcon} style={{width: 25}} alt={'medium'}/>&nbsp; You are Offline
                </Button>
            </Offline>
        </div>
    </div>
}

export default BlogCard;
