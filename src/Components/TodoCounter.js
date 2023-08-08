import React from 'react';
import './../styles/TodoCounter.css';

function TodoCounter({total, completed}){
  const sinTareas = (total == 0 && completed == 0);
  const iguales =  total ==  completed;
  if(sinTareas){
    return(
    <h1 >
        No hay tareas que realizar, agrega una nueva
      </h1>
      );
  }if(iguales){
    return (
      
      <h1 >
        Felicidades has completado todas tus tareas
      </h1>
       
    );
  }else{
    return(
      <h1 >
        Has completado {completed} de {total} tareas
      </h1>
    );
     
  }
    
  }

  export {TodoCounter};