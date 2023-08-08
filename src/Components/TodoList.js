import './../styles/TodoList.css'

function TodoList({children}){
    return(
        <div className="contenedor-list">
            {children}
        </div>
        
    );
}
export {TodoList};