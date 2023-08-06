import React from 'react'
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import EditNoteIcon from '@mui/icons-material/EditNote';


const TodoList = ({todos, setTodos,setEdit}) => {
    
    const handleDelete = (i)=>{
   const updt = todos.filter((todo, id) => {

    return i!==id; 
   })
   setTodos(updt);
    }


    const handleEdit =({id})=>{
        const findtodo = todos.find((todo) => todo.id === id);
        setEdit(findtodo)
    }
  
    
    return (

        
          <div >
            {todos.map((todo, i) => (

               <li key={todo.id} className='list-none mt-5 '>
                 <input type='text' value={todo.title} className=' bg-[#336e6e] px-2.5 py-2.5 border rounded-md outline-none'/>
                     
                 <button className=' bg-[#86c2bf] px-1 py-1 ml-5 border border-[#2c5859] ' onClick={()=> handleDelete(i)}>Delete<DeleteSweepIcon className=' ml-1' /></button>
                      <button className= 'ml-3 bg-[#86c2bf] bg-black/20 px-1 py-1  border border-[#2c5859]' onClick={() =>handleEdit(todo)}>Edit<EditNoteIcon className='ml-1'/></button>
                    
  
               </li> 
           ) )}
          </div>     
               

        
          
                
                
            
        
    )
}

export default TodoList
