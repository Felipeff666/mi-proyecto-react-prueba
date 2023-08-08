import React from 'react';

import './../styles/TodoSearch.css'

function TodoSearch(){
    
    //estados
    const [searchValue, setSearchValue] = React.useState('');

    console.log('los usuarios buscan to dos de:'+searchValue);

    return(
            <input 
            autoFocus 
            placeholder="Anota una tarea"
            value={searchValue}
            onChange={(event)=>{
                setSearchValue(event.target.value ) 
                console.log(searchValue);
            }}
            ></input>
    )
}

export {TodoSearch};