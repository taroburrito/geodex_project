import React from 'react';
import NavBar from './NavBar.jsx';
import FriendsList from './FriendsList.jsx';

class Layout extends React.Component {
  render() {
    
    return (
        <div>
          <NavBar />
          <FriendsList /> 
        </div>
    );
  }
}

export default Layout;