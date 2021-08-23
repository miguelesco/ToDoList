/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const {
    title, completed, handleChangeProps, id, deleteTodoProps,
  } = props;
  return (
    <li>
      <input
        checked={completed}
        type="checkbox"
        onChange={() => handleChangeProps(id)}
      />
      {' '}
      { title}
      <button type="button" onClick={() => deleteTodoProps(id)}>Delete</button>
    </li>
  );
};

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
};

export default TodoItem;
