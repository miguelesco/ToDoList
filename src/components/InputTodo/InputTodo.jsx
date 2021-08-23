/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormContainer, { SubmitBtn, Input } from './styles';

const InputTodo = (props) => {
  const [title, setTitle] = useState('');
  const { addTodoProps } = props;
  const onChange = (e) => {
    // si fuera un objeto con varios elementos se puede usar e.target.name
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoProps(title);
      setTitle('');
    } else {
      // eslint-disable-next-line no-alert
      alert('Please write item');
    }
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input value={title} type="text" placeholder="Add Todo..." onChange={onChange} />
      <SubmitBtn type="submit">Submit</SubmitBtn>
    </FormContainer>
  );
};

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};

export default InputTodo;
