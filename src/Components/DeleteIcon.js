import React from 'react';
import {TodoIcon} from './TodoIcon';

export default function DeleteIcon(props) {
 return (
  <TodoIcon
  type="delete"
  color={props.color}
  onClick={props.onClick}
/>
  )
}
export{DeleteIcon}