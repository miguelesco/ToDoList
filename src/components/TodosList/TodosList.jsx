/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem';

const TodosList = (props) => {
  const { todos, handdleChange, deleteTodoProps } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          title={todo.title}
          completed={todo.completed}
          id={todo.id}
          handleChangeProps={handdleChange}
          deleteTodoProps={deleteTodoProps}
        />
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number,
      title: PropTypes.string,
      completed: PropTypes.bool,
    },
  )).isRequired,
  handdleChange: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
};

export default TodosList;
