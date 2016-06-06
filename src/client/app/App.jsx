import React from 'react';
import ReactDOM from 'react-dom';
import {geodexTheme} from './styles/theme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from './layout.jsx';

const App = () => (
  
  <MuiThemeProvider muiTheme={getMuiTheme(geodexTheme) }>
      <Layout />
  </MuiThemeProvider>
    
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);