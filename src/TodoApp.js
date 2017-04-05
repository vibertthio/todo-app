import React, { Component } from 'react'; // eslint-disable-line
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';

/**
 * TodoApp
 */
class TodoApp extends Component {

  /**
   * [constructor description]
   */
  constructor() {
    super();
    this.state = {
      nOfLists: 0,
    };
  }

  /**
   * [lists description]
   * @return {[type]} [description]
   */
  lists() {
    const ls = [];
    for (let i = 0; i < this.state.nOfLists; i += 1) {
      ls.add(<TodoList />);
    }

    return null;
  }

  /**
   * [render description]
   * @return {[type]} [description]
   */
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Vibert Thio</h2>
        </div>
        <p className="App-intro">
          This is the TODD Lists made by Vibert Thio.
        </p>
        <ul>
        </ul>
      </div>
    );
  }
}

export default TodoApp;
