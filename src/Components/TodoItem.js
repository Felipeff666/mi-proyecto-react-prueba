import { click } from '@testing-library/user-event/dist/click';
import './../styles/TodoItem.css'
function TodoItem(props){
    return(

        <div className="item">
            <button 
            className={`boton-completar ${props.completed && "boton-completar-completado" }`}
            onClick={props.onComplete }
            >v
            </button> 
            <span 
            className={`texto ${props.completed && "texto-completado"}`}
            >{props.text}
            </span>  


            <button 
            className="boton-eliminar"
            onClick={props.onDelete}
            >x
            </button>
        </div>
            
            

        
    );
}
export {TodoItem};
