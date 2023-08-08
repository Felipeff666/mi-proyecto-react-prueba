import './../styles/CreateTodoButton.css'

function CreateTodoButton(props){
    return(
        <div className='contenedor-boton'>
            <button className="agregar-boton"
            onClick={(event) =>{
                console.log("lerolero")
                console.log(event)
                console.log(event.target)
            } }
            > + </button>
        </div>
        
    );
}
export {CreateTodoButton};