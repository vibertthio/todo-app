import React, { Component } from 'react'; // eslint-disable-line
import RaisedButton from 'material-ui/RaisedButton';

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
      nOfItems: [],
      items: [],
      inputValues: [],
    };

    // this.handleEdit = this.handleEdit.bind(this);
    this.handleNewItem = this.handleNewItem.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }

  /**
   * [handleRemoveItem description]
   * @param  {[type]} idList [description]
   * @param  {[type]} idItem [description]
   */
  handleRemoveItem(idList, idItem) {
    const items = this.state.items;
    const ls = items[idList];
    ls.splice(idItem, 1);
    items[idList] = ls;

    this.setState({
      items,
    });
  }

  /**
   * [handleNewItem description]
   * @param  {[type]} idList [description]
   */
  handleNewItem(idList) {
    console.log(this);
    const input = this.state.inputValues[idList];
    if (input !== '') {
      const nOfItems = this.state.nOfItems;
      nOfItems[idList] += 1;
      console.log(nOfItems[idList]);

      const items = this.state.items.slice();

      const ls = this.state.items[idList].slice().concat(input);
      items[idList] = ls;

      const inputValues = this.state.inputValues.slice();
      inputValues[idList] = '';

      this.setState({
        items,
        nOfItems,
        inputValues,
      });
    }
  }

  /**
   * [handleEdit description]
   * @param  {[type]} idList [description]
   * @param  {[type]} input  [description]
   */
  handleEdit(idList, input) {
    console.log('editting..');
    const inputs = this.state.inputValues;
    inputs[idList] = input;
    this.setState({
      inputValues: inputs,
    });
  }

  /**
   * Handle click event of new List
   */
  handleClickNewList() {
    console.log('adding new list...');

    const items = Array.from(this.state.items);
    items[this.state.nOfLists] = [];

    const nOfLists = this.state.nOfLists + 1;

    const nOfItems = this.state.nOfItems.concat(0);

    const inputValues = this.state.inputValues.concat('');

    this.setState({
      nOfLists,
      nOfItems,
      items,
      inputValues,
    });
    console.log('New List!');
    console.log(`number of lists : ${this.state.nOfLists}`);
  }

  /**
   * [render description]
   * @return {[type]} [description]
   */
  render() {
    const n = this.state.nOfLists;
    const list = Array(n).fill().map((x, i) => i);

    return (
      <div className="App">

        <div className="App-header">
          <h1>TODOSS</h1>
        </div>

        <p className="App-intro">
          This is the TODD Lists made by Vibert Thio.
        </p>

        <RaisedButton
          label="New Todo List"
          onClick={() => this.handleClickNewList()}
        />

        <ul className="Lists">
          {list.map(i =>
            <li key={i.toString()}>
              <TodoList
                id={i}
                name="new list"
                inputValue={this.state.inputValues[i]}
                nOfItems={this.state.nOfItems[i]}
                items={this.state.items[i]}
                handleEdit={(idl, input) => this.handleEdit(idl, input)}
                handleClick={idl => this.handleNewItem(idl)}
                handleRemove={this.handleRemoveItem}
              />
            </li>)
          }
        </ul>

      </div>
    );
  }
}

export default TodoApp;
