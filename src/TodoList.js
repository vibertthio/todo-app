import React, { Component } from 'react'; // eslint-disable-line
import injectTapEventPlugin from 'react-tap-event-plugin';
import { List, ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
// import removeSVG from 'material-ui/svg-icons/action/delete';
import editSvg from './../svg/edit.svg';

import TodoItem from './TodoItem';

injectTapEventPlugin();

/**
 * TodoList
 */
class TodoList extends React.Component {
  /**
   * [constructor description]
   */
  constructor() {
    super();

    this.handleEdit = this.handleEdit.bind(this);
    this.handleKey = this.handleKey.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  /**
   * list
   * @type {[type]}
   * @return {Element}
   */
  list() {
    const n = this.props.nOfItems;
    const list = Array(n).fill().map((x, i) => i);
    return (
      list.map(
        i => (
          <ListItem
            className="todo-item"
            key={i.toString()}
            hoverColor="rgba(200, 200, 200, 1.0)"
            leftIcon={<Checkbox />}
            rightIcon={
              <NavigationClose
                onTouchTap={() => {
                  this.handleRemove(i);
                }}
              />
            }
          >
            <TodoItem
              content={this.props.items[i]}
            />
          </ListItem>
        ),
        this,
      )
    );
  }

  /**
   * [title description]
   * @return {[type]} [description]
   */
  title() {
    if (this.props.editingName) {
      return (
        <div className="list-title">
          <TextField>
            {this.props.name}
            <img
              src={editSvg}
              className="edit-svg"
              alt="edit"
              onClick={() => alert('editing name')}
            />
          </TextField>
        </div>
      );
    } else {
      return (
        <div className="list-title">
          <h2>
            {this.props.name}
            <img
              src={editSvg}
              className="edit-svg"
              alt="edit"
              onClick={() => alert('not editing name')}
            />
          </h2>
        </div>
      );
    }
  }

  /**
   * Handle remove event of new item.
   * @param {int} idx
   */
  handleRemove(idx) {
    console.log(`remove item #${idx}`);
    const id = this.props.id;
    this.props.handleRemove(id, idx);
  }

  /**
   * Handle edit event of new item.
   * @param {Event} e edit event
   */
  handleEdit(e) {
    this.props.handleEdit(this.props.id, e.currentTarget.value);
  }

  /**
   * Handle key event of new item.
   * @param {Event} e edit event
   */
  handleKey(e) {
    if (e.key === 'Enter') {
      const id = this.props.id;
      this.props.handleClick(id);
    }
  }

  /**
   * Rendering
   * @return {Element}
   */
  render() {
    return (
      <div className="container">
        <div className="list-title">
          <h2>
            {this.props.name}
            <img
              src={editSvg}
              className="edit-svg"
              alt="edit"
            />
          </h2>
        </div>

        <List className="List">
          {this.list()}
        </List>

        <TextField
          hintText="new todo item"
          value={this.props.inputValue}
          onChange={this.handleEdit}
          onKeyUp={this.handleKey}
        />

        <br />

        <RaisedButton
          className="add-todo-button"
          onClick={() => {
            const id = this.props.id;
            this.props.handleClick(id);
          }}
        >
          add todo
        </RaisedButton>
      </div>
    );
  }
}

TodoList.propTypes = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  inputValue: React.PropTypes.string.isRequired,
  nOfItems: React.PropTypes.number.isRequired,
  items: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  editingName: React.PropTypes.arrayOf(React.PropTypes.bool).isRequired,
  handleEdit: React.PropTypes.func.isRequired,
  handleClick: React.PropTypes.func.isRequired,
  handleRemove: React.PropTypes.func.isRequired,
};

export default TodoList;
