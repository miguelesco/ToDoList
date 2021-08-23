/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Item, {
  Checkbox, Task, TaskContainer, Input,
} from './styles';

const TodoItem = (props) => {
  const {
    title, completed, handleChangeProps, id, deleteTodoProps,
  } = props;
  const [editing, setEditing] = useState(false);
  const handleEditing = () => {
    setEditing(!editing);
  };
  const handleChange = (e) => {
    e.preventDefault();
    handleChangeProps(id, e.target.value);
  };
  const handleChangeEnter = (e) => {
    if (e.key === 'Enter') {
      setEditing(false);
    }
  };
  return (
    <Item>
      <TaskContainer onDoubleClick={handleEditing}>
        <Checkbox
          checked={completed}
          type="checkbox"
          onChange={() => handleChangeProps(id)}
        />
        <Task completed={completed}>{title}</Task>
        <button type="button" onClick={() => deleteTodoProps(id)}>Delete</button>
      </TaskContainer>
      <Input
        type="text"
        editing={editing}
        value={title}
        onChange={handleChange}
        onKeyDown={handleChangeEnter}
      />
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
