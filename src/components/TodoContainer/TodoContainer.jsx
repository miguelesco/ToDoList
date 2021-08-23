/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import TodosList from '../TodosList';
import Header from '../Header';

const TodoContainer = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ]);
  const handdleChange = (id) => {
    setTodos((todos) => {
      const newTodos = [...todos];
      const index = newTodos.findIndex((todo) => todo.id === id);
      newTodos[index] = {
        ...newTodos[index],
        completed: !newTodos[index].completed,
      };

      return newTodos;
    });
  };
  const delTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <Header />
      <TodosList todos={todos} handdleChange={handdleChange} deleteTodoProps={delTodo} />
    </div>
  );
};

export default TodoContainer;
