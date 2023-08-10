import React from 'react'
import {TodoIcon} from './TodoIcon';

export default function CompleteIcon(props) {
  return (
    <TodoIcon
        active={props.active}
        type="check"
        color={props.color}
        onClick={props.onClick}
    />
  )
}

export{CompleteIcon}