import { TodoCounter } from './Components/TodoCounter.js';
import { TodoItem } from './Components/TodoItem.js';
import { TodoList } from './Components/TodoList.js';
import { TodoSearch } from './Components/TodoSearch.js';
import { CreateTodoButton } from './Components/CreateTodoButton.js';
import './App.css';
import React from 'react';

const defaultTodos=[
  {text:'cortar cebolla',completed:true},
  {text:'Tomar el curso de intro de REact js',completed:false},
  {text:'Bailar la bamba',completed:false},
  {text:'Patear al jhon',completed:false},
  {text:'Comer sandia',completed:false},

];

function App() {
  return (
    <React.Fragment>
      <div className='contenedor'>
      <TodoCounter completed={16} total={25} />
        <TodoSearch />

        <TodoList>

          {defaultTodos.map( x =>(
            <TodoItem 
              key={x.text} 
              text={x.text} 
              completed={x.completed}/>  
          ))}

        </TodoList>

        <CreateTodoButton/>
      </div>
        
    </React.Fragment>
  );
}

export default App;
