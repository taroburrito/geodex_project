import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

import AppBar from 'material-ui/AppBar';

import MyAwesomeReactComponent from './MyAwesomeReactComponent.jsx';

const App = () => (
  
  <MuiThemeProvider muiTheme={getMuiTheme() }>
      <AppBar
        title="geodex"
        showMenuIconButton={false}  
        >
      </AppBar>
  </MuiThemeProvider>
    
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);