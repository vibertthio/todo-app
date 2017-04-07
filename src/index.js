import React from 'react'; // eslint-disable-line
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';
import MuiThemeProvider from '../node_modules/material-ui/styles/MuiThemeProvider';

const App = () => (
  <MuiThemeProvider>
    <TodoApp />
  </MuiThemeProvider>
);


ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
