import './../styles/TodoItem.css'
function TodoItem(props){
    return(

        <div className="item">
            <button className={`boton-completar ${props.completed && "boton-completar-completado" }`}>v</button> 
            <span className={`texto ${props.completed && "texto-completado"}`}>{props.text}</span>  
            <button className="boton-eliminar">x</button>
        </div>
            
            

        
    );
}
export {TodoItem};