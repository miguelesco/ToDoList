/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from '../TodosList';
import InputTodo from '../InputTodo';
import Header from '../Header';
import Container, { Inner } from './styles';

const TodoContainer = () => {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: uuidv4(),
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Deploy to live server',
      completed: false,
    },
  ]);
  const handdleChange = (id, newText = '') => {
    setTodos((todos) => {
      const newTodos = [...todos];
      const index = newTodos.findIndex((todo) => todo.id === id);
      newTodos[index] = {
        ...newTodos[index],
        completed: newText === '' ? !newTodos[index].completed : newTodos[index].completed,
        title: newText || newTodos[index].title,
      };

      return newTodos;
    });
  };
  const delTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };
  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos((todos) => [...todos, newTodo]);
  };
  return (
    <Container>
      <Inner>
        <Header />
        <InputTodo addTodoProps={addTodoItem} />
        <TodosList todos={todos} handdleChange={handdleChange} deleteTodoProps={delTodo} />
      </Inner>
    </Container>
  );
};

export default TodoContainer;
