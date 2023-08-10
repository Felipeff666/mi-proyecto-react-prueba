import React from 'react';
import { ReactComponent as CheckSVG} from './check.svg';
import { ReactComponent as DeleteSVG} from './delete.svg';
import './../styles/todoicon.css';

const icnonTypes = {
    "check": (color)=> <CheckSVG  fill={color}/>,  
    "delete": (color)=> <DeleteSVG fill={color} />
}

function TodoIcon({type, color, active, onClick}) {
  return (
    <span 
        className={`Icon-${type} ${ active && "Icon-"+type+"-active" }`}
        onClick={onClick}
    >
        {icnonTypes[type](color)}
    </span>
  )
}

export {TodoIcon}
