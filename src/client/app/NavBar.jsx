import React from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

class NavBar extends React.Component {
  render() {
    
    return (
        <AppBar title="geodex" showMenuIconButton={false} >
          <TextField hintText="Search" />
        </AppBar>
    );
  }
}

export default NavBar;