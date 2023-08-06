import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useState } from "react";
function App() {



  const [input, setInput] = useState("");
const [todos, setTodos] = useState([]);
const [edit, setEdit] = useState("")
  return (
    <div className="bg-[#d1dbe6] w-full h-screen flex flex-col  justify-center  items-center">
      <div className="bg-[#b2dddc] p-20 ">   
      <div className="">
      <Header />
      </div>


      <div>
        <Form input ={input} setInput= {setInput} todos = {todos} setTodos = {setTodos} edit= {edit} setEdit={setEdit}/>
      </div>
      <div>
        <TodoList  todos = {todos} setTodos = {setTodos} edit= {edit} setEdit={setEdit}/>
      </div>
      </div>
    </div>
  );
}

export default App;
