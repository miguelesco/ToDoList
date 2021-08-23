/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import Item, { Checkbox, AlertCompleted } from './styles';

const TodoItem = (props) => {
  const {
    title, completed, handleChangeProps, id, deleteTodoProps,
  } = props;
  return (
    <Item>
      <Checkbox
        checked={completed}
        type="checkbox"
        onChange={() => handleChangeProps(id)}
      />
      <button type="button" onClick={() => deleteTodoProps(id)}>Delete</button>
      <AlertCompleted completed={completed}>{title}</AlertCompleted>
    </Item>
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
