import React, { Component } from 'react'; // eslint-disable-line

/**
 * [TodoItem description]
 * @param {String} props the specific content of todo item
 * @return {Element} react element
 */
function TodoItem(props) {
  return (
    <div>
      {props.content}
    </div>
  );
}

TodoItem.propTypes = {
  content: React.PropTypes.string.isRequired,
};

export default TodoItem;
