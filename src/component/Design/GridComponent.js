import React ,{ useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import ImgsViewer from 'react-images-viewer';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
});

function GridComponent(props) {
    const { classes } = props;
    const [currentImage, setImage] = useState('');

    return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                {props.tilesData.map(tile => (
                    <GridListTile key={tile.img}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            subtitle={<span>by: {tile.author}</span>}
                            actionIcon={
                                <IconButton className={classes.icon} onClick={()=>setImage(tile.img)}  >
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
            <ImgsViewer
                imgs={[{ src: currentImage }]}
                currImg={0}
                isOpen={currentImage !== '' ? true : false}
                onClose={()=>setImage('')}
            />
        </div>
    );
}

GridComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GridComponent);
