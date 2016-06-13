import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
  root: {
    position: 'absolute',
    bottom: '0px'
  },
  photo: {
    height:70,
    width:70
  }
};


const PhotoGrid = (props) => (
  <div style={styles.root}>
    <GridList
      cellHeight={70}
      cols={props.cols}
      rows={props.rows}
      >
      {props.photoList.map((photo) => (
        <GridTile>
          <img src={photo.img} style={styles.photo}/>
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default PhotoGrid;