import React, { useEffect, useState, useRef } from 'react'
import ToDoItem from './ToDoItem';


let count = 0;;

function ToDo() {
  const [toDo, setTodo] = useState([]);
  const inpRef = useRef(null)
  
  const add = () => {
    if(inpRef.current.value == ""){
      alert("Enter valid Task")
    }else{

      setTodo([...toDo, { no: count++, text: inpRef.current.value, display: "" }])
      inpRef.current.value = "";
      localStorage.setItem("toDo_count",count)
    }
  }
  
useEffect (()=>{
    setTodo(JSON.parse(localStorage.getItem("toDo")))
    count = localStorage.getItem("toDo_count");
},[])

  useEffect(() => {
    setTimeout(() => {
      console.log(toDo)
      localStorage.setItem("toDo",JSON.stringify(toDo))
    }, 100);
  }, [toDo])


  return (
    <>
      <div className="container bg-white px-10 py-5 rounded-md">
        <div className='font-semibold text-lg mb-4'>To-Do List</div>
        <div className='flex border-2 rounded-md'>
          <input ref={inpRef} className='outline-none  w-full px-4 py-1 text-center' type="text" placeholder='Add your Task' />
          <button onClick={() => { add() }} className='bg-blue-600 text-white text-sm px-4 py-1 rounded-md'>Add</button>
        </div>
        <div>

          {toDo.map((item, index) => {
            return <ToDoItem key={index} setTodo={setTodo} no={item.no} display={item.display} text={item.text} />
          })}
        </div>

      </div>

    </>
  )
}

export default ToDo