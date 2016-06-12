import React from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class NavBar extends React.Component {
  render() {
    
    return (
        <AppBar title="geodex" showMenuIconButton={false} >
        <TextField hintText="Search" />
        <DropDownMenu value='Sort'>
          </DropDownMenu>
        </AppBar>
    );
  }
}

export default NavBar;