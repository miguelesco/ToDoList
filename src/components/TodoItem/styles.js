/* eslint-disable linebreak-style */
import styled from 'styled-components';

const Item = styled.li`
  font-size: 1.2rem;
  list-style-type: none;
  padding: 17px 0px;
  border-bottom: 1px solid #eaeaea;
  button {
    font-size: 13px;
    background: #f1f3f4;
    border: none;
    cursor: pointer;
    float: right;
    outline: none;
    border-radius: 100px;
    height: 50px;
    width: 50px;
    margin: -10px 0 0 10px;
  }
`;

export const Checkbox = styled.input`
  margin-right: 15px;
`;

export const Task = styled.span`
  font-style: ${(props) => (props.completed ? 'italic' : 'normal')}; 
  color: ${(props) => (props.completed ? '#595959' : '')}; 
  opacity: ${(props) => (props.completed ? 0.4 : 1)};
  text-decoration:  ${(props) => (props.completed ? 'line-through' : '')};;
`;

export const TaskContainer = styled.div`
  display: flex;
`;

export const Input = styled.input`
  ${(props) => (!props.editing ? 'display: none;' : '')}
  width: 100%;
  padding: 10px;
  border: 1px solid #dfdfdf;
`;

export default Item;
