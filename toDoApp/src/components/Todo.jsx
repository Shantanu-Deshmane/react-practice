import React, {  useRef, useState } from 'react'
import List from './List'

const id =0;
function Todo() {

  const [todoList, setTodoList] = useState([]);
  const inpRef = useRef(null);

  const add = () => {
    if(inpRef.current.value === ""){
      alert("Enter valid ToDo")
    }
    else{
      setTodoList([...todoList, { Id:id+1, text:inpRef.current.value, display:""} ])
      inpRef.current.value=""
    }
  }


  return (

    <div className='w-full h-[700px] flex justify-center items-center'>
      <div className='w-[350px] bg-white px-6 py-8 rounded shadow-lg'>
        <h3 className='font-bold text-2xl mb-8'>ToDo App</h3>

        <div className='w-full flex justify-around rounded-lg        overflow-hidden bg-slate-200'>

          <input 
          ref={inpRef}  
          className='bg-transparent w-full py-2 px-4 text-orange-400 outline-none font-semibold' 
          type="text"/>

          <button 
          className='bg-orange-400 font-semibold text-white px-4'
          onClick={() => {add()}}>
          Add+</button>

        </div>
          {
            todoList.map((item, index) => {
              return <List key={index} setTodoList={setTodoList} text={item.text} display={item.display} id={item.Id}/>
            })
          }

      </div>
    </div>
  )
}

export default Todo