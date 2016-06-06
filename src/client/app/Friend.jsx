import React from 'react';
import Paper from 'material-ui/Paper';

class Friend extends React.Component {
  
  render() {
    
    return (
        <Paper>
          {this.props.name}
        </Paper>
    );
  }
}

export default Friend;