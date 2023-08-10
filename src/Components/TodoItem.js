
import {CompleteIcon} from './CompleteIcon';
import {DeleteIcon} from './DeleteIcon';
import './../styles/TodoItem.css'
function TodoItem(props){
    return(

        <div className="item">
            <CompleteIcon
                active={props.completed}
                onClick={props.onComplete}
                /* color="blue" */
            />
            <span 
            className={`texto ${props.completed && "texto-completado"}`}
            >{props.text}
            </span>  
            <DeleteIcon
                onClick={props.onDelete}
                /* color="Red" */
            />
        </div>
            
            

        
    );
}
export {TodoItem};
