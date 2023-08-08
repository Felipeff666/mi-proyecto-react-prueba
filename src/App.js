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
  {text:'Bailar la bamba',completed:true},
  {text:'Patear al jhon',completed:false},
  {text:'Comer sandia',completed:false},

];

function App() {

  //estados
  //estado de input search value
  const [searchValue, setSearchValue] = React.useState('');
  //estado de listado de todos
  const [todos, setTodos] = React.useState(defaultTodos);

  //estados derivados son variables, propiedades, calculos que se hacen a partir de un estado
  // en este caso seran derivados del estado todos
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  const filterTodos = todos.filter(
    todo => {
      return todo.text.toLowerCase()
      .includes(searchValue.toLowerCase())
    });

  const completarTodo = (text)=>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
    
  }

  const eliminarTodo = (text)=>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  }
    
  return (
    <React.Fragment>
      <div className='contenedor'>

      <TodoCounter completed={completedTodos} total={totalTodos} />

        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <TodoList>

          { 
          filterTodos.map( x =>(
            <TodoItem 
              key={x.text} 
              text={x.text} 
              completed={x.completed}
              onComplete={()=>{completarTodo(x.text)}}
              onDelete={()=>{eliminarTodo(x.text)}} />  
          ))}

        </TodoList>

        <CreateTodoButton/>
      </div>
        
    </React.Fragment>
  );
}

export default App;
