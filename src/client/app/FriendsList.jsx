import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Friend from './Friend.jsx';

const friendsData = [
  {
    name: 'Lindsay Lemon',
    location: 'Los Angeles, CA',
    image: 'http://cdn.themis-media.com/media/global/images/library/deriv/41/41713.jpg',
    photos: [
      { img: 'http://cdn.themis-media.com/media/global/images/library/deriv/41/41713.jpg'},
      { img: 'http://cdn.themis-media.com/media/global/images/library/deriv/41/41713.jpg' },
      { img: 'http://cdn.themis-media.com/media/global/images/library/deriv/41/41713.jpg' },
      { img: 'http://cdn.themis-media.com/media/global/images/library/deriv/41/41713.jpg'}
    ]
  },
  {
    name: 'Clint Eastwood',
    location: 'San Diego, CA',
    image: 'http://i.dailymail.co.uk/i/pix/2011/01/14/article-1347108-0CA4DAA0000005DC-861_306x423.jpg',
    photos: [
      { img: 'http://i.dailymail.co.uk/i/pix/2011/01/14/article-1347108-0CA4DAA0000005DC-861_306x423.jpg'},
      { img: 'http://i.dailymail.co.uk/i/pix/2011/01/14/article-1347108-0CA4DAA0000005DC-861_306x423.jpg' },
      { img: 'http://i.dailymail.co.uk/i/pix/2011/01/14/article-1347108-0CA4DAA0000005DC-861_306x423.jpg' },
      { img: 'http://i.dailymail.co.uk/i/pix/2011/01/14/article-1347108-0CA4DAA0000005DC-861_306x423.jpg'}
    ]
  },
  {
    name: 'Megan Rogers',
    location: 'Paris, France',
    image: 'http://i1.top.de/024/201024,pd_1/adriana-lima.jpg',
    photos: [
      { img: 'http://i1.top.de/024/201024,pd_1/adriana-lima.jpg'},
      { img: 'http://i1.top.de/024/201024,pd_1/adriana-lima.jpg' },
      { img: 'http://i1.top.de/024/201024,pd_1/adriana-lima.jpg' },
      { img: 'http://i1.top.de/024/201024,pd_1/adriana-lima.jpg'}
    ]
  }
];

const FriendsList = () => (
    <List>
    {friendsData.map((friend) => (     
      <ListItem  key={friend.name}>
        <Friend name={friend.name}
          profilePic={friend.image}
          location={friend.location}
          photos={friend.photos}
          />
      </ListItem>
      ))}
  </List>
);

export default FriendsList;