import { TodoCounter } from './Components/TodoCounter.js';
import { TodoItem } from './Components/TodoItem.js';
import { TodoList } from './Components/TodoList.js';
import { TodoSearch } from './Components/TodoSearch.js';
import { CreateTodoButton } from './Components/CreateTodoButton.js';
import './App.css';
import React from 'react';

/* const defaultTodos=[
  {text:'cortar cebolla',completed:true},
  {text:'Tomar el curso de intro de REact js',completed:false},
  {text:'Bailar la bamba',completed:true},
  {text:'Patear al jhon',completed:false},
  {text:'Comer sandia',completed:false},

]; */
/* localStorage.setItem('TODOS_V1',defaultTodos); */
/* localStorage.removeItem('TODOS_V1',); */

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if(!localStorageTodos){
    localStorage.setItem('TODOS_V1',JSON.stringify([]));
    parsedTodos = [];
  }else{
    parsedTodos =JSON.parse(localStorageTodos);
  }
  //estados
  //estado de input search value
  const [searchValue, setSearchValue] = React.useState('');
  //estado de listado de todos
  const [todos, setTodos] = React.useState(parsedTodos);
  //estados derivados son variables, propiedades, calculos que se hacen a partir de un estado
  // en este caso seran derivados del estado todos
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  const filterTodos = todos.filter(
    todo => {
      return todo.text.toLowerCase()
      .includes(searchValue.toLowerCase())
    });

  const saveTodos = (newTodos)=>{
    localStorage.setItem('TODOS_V1',JSON.stringify(newTodos));
    setTodos(newTodos);
  }
  const completarTodo = (text)=>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
    
  }

  const eliminarTodo = (text)=>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
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
