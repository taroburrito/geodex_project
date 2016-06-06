import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Friend from './Friend.jsx';

const friendsData = [
  {
    name: 'Lindsay Lemon',
    location: 'Los Angeles, CA'
  },
  {
    name: 'Clint Eastwood',
    location: 'San Diego, CA'
  },
  {
    name: 'Megan Rogers',
    location: 'Paris, France'
  }
];

const FriendsList = () => (
  <div>
    <GridList
      cols={1}
      cellHeight={200}
      padding={1}
    >
      {friendsData.map((friend) => (
        <GridTile
          key={friend.name}
          >
          <Friend name={friend.name}/>
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default FriendsList;