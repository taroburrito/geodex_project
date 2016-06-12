import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import PhotoGrid from './PhotoGrid.jsx';

const styles = {
  profilePic: {
    height: 140,
    width: 140
  },
  testBorder: {
    //border: '1px solid red',
    display: 'block',
    padding: '1px'
  },
  card: {
    position: 'relative'
  }
};

class Friend extends React.Component {
  
  render() {
    
    return (
      <Card style={styles.card}>
        <div className='pure-g'>
          <div className='pure-u-3-24' style={styles.testBorder}>
              <CardMedia style={styles.profilePic}>    
                <img style={styles.profilePic} src={this.props.profilePic} />
             </CardMedia> 
          </div>
          <div className='pure-u-8-24' style={styles.testBorder}>
            <CardHeader title={this.props.name}
              subtitle={this.props.location}>
            </CardHeader>
            <PhotoGrid photoList={this.props.photos} cols={4} rows={1}/>
          </div>
          <div className='pure-u-11-24' style={styles.testBorder}>
             <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </div>  
        </div>
     </Card>   
    );
  }
}

export default Friend;