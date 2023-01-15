import React, {useState} from 'react'


export default function Todo({todo, toggleTodo}){
    function handleTodoCLick(){
        toggleTodo(todo.id)
    }
    function editTodo(todo, eTodo){
        
    }
    return(
        <div>
            <label>
            <input type="checkbox" checked={todo.complete} onChange={handleTodoCLick}/>
            {todo.name}
            <button onClick={editTodo}>Edit</button>
            </label>
        </div>
    )
}
 