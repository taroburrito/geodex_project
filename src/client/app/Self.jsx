import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';

import PhotoGrid from './PhotoGrid.jsx';

const styles = {
  profilePic: {
    height: 160,
    width: 160
  },
  testBorder: {
    //border: '1px solid red',
    display: 'block',
    padding: '1px'
  },
  self: {
    margin: '2px',
    position: 'relative'
  }
};

class Self extends React.Component {
  
  render() {
    
    return (
      <Paper style={styles.self} zDepth={1}>
        <Card>
          <div className='pure-g'>
            <div className='pure-u-3-24' style={styles.testBorder}>
                <CardMedia style={styles.profilePic}>    
                  <img style={styles.profilePic} src={this.props.profilePic} />
              </CardMedia> 
            </div>
            <div className='pure-u-8-24' style={styles.testBorder}>
              <CardTitle title={this.props.name}
                subtitle={this.props.location} />
              
              <TextField 
                floatingLabelText="Post to geodex..."
                multiLine={true}
                rows={2}
                fullWidth={true}
                />
               </div>
            <div className='pure-u-9-24' style={styles.testBorder}>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
            </div>
            <div className='pure-u-3-24' style={styles.testBorder}>
              <PhotoGrid photoList={this.props.photos} cols={2} rows={2}/>
            </div>
          </div>
        </Card> 
     </Paper>   
    );
  }
}

export default Self;