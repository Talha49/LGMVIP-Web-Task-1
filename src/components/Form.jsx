import React from 'react'
import {v4 as uuidv4 } from "uuid"
import { useEffect } from 'react';

const Form = ({input , setInput, todos, setTodos, edit, setEdit}) => {

    const updatedTodo =(title, id)=>{
        const newTodo = todos.map((todo) =>  
        todo.id === id ? {title, id} : todo
        
        );
        setTodos(newTodo);
        setEdit("");
    };


useEffect (()=> {
    if(edit){
        setInput(edit.title);
    }
    else {
        setInput("")
    }
}, [setInput, edit])

const HandleInput = (e)=>{
e.preventDefault()

if(!edit){
setTodos([...todos, {id : uuidv4, title: input, completed: false}])
setInput("");
}
else{
    updatedTodo(input, edit.id, edit.completed)
}
}

    return (
        <div>
            <form onSubmit={HandleInput}>
            <input
  type='text'
  placeholder='Enter Your Todo'
  value={input}
  onChange={(e) => setInput(e.target.value)}
  required
  className="px-1 py-1 focus:bg-green-200 bg-[#83c5c4] leading-[1.6]  outline-none  outline-[#233c3e]"
/>

            <button className='bg-[#86c2bf] border-[#2c5859] px-1 py-1.5 ml-5  border' type='submit'>{edit ? "OK" : "Add Todo"} </button>
            </form>
        </div>
    )
}

export default Form
