import React from 'react';
import NavBar from './NavBar.jsx';
import FriendsList from './FriendsList.jsx';
import Self from './Self.jsx';

import Divider from 'material-ui/Divider';

const self =
  {
    name: 'Lindsay Lemon',
    location: 'Los Angeles, CA',
    image: 'http://cdn.themis-media.com/media/global/images/library/deriv/41/41713.jpg',
    photos: [
      { img: 'http://cdn.themis-media.com/media/global/images/library/deriv/41/41713.jpg' },
      { img: 'http://cdn.themis-media.com/media/global/images/library/deriv/41/41713.jpg' },
      { img: 'http://cdn.themis-media.com/media/global/images/library/deriv/41/41713.jpg' },
      { img: 'http://cdn.themis-media.com/media/global/images/library/deriv/41/41713.jpg' }
    ]
  };
  
class Layout extends React.Component {
  render() {
    
    return (
        <div>
        <NavBar />
        <Self
          name={self.name}
          profilePic={self.image}
          location={self.location}
          photos={self.photos}
          />
          <Divider />
          <FriendsList /> 
        </div>
    );
  }
}

export default Layout;