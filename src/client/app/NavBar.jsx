import React from 'react';
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

import SearchBar from './SearchBar.jsx';

const ActionNav = () => {
  return (
    <div>
      <SearchBar />
      <FlatButton label="Sort" />
      <FlatButton label="Contact" />
      <FlatButton label="About" />
    </div>
  );  
};
  
class NavBar extends React.Component {
  render() {
    
    return (
      <AppBar title="geodex" showMenuIconButton={false}
        iconElementRight={<ActionNav />}
        > 
      </AppBar> 
    );
  }
}

export default NavBar;