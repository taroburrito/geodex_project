import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Friend from './Friend.jsx';
import friendsData from './friendsData.js';

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