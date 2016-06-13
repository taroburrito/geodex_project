import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

const friends = [
  'Lindsay Lemon',,
  'Clint Eastwood',
  'Megan Rogers'
];
 
class SearchBar extends React.Component {
  render() {
    
    return (
      <AutoComplete
        floatingLabelText="Search Friends"
          filter={AutoComplete.caseInsensitiveFilter}
          dataSource={friends}
      />
    );
  }
}

export default SearchBar;