import React from 'react'

function List({text,setTodoList,id,display}) {
const toggleItem = () => {
    setTodoList((prevList) => prevList.map((item) => item.display === " text-red "));
}

    const handleDelete = ()=> {
        setTodoList((prevList) => prevList.filter((item) => item.no !== id));
        
    };
    return (

    <div className='flex justify-between px-4  py-3'>
        <p onClick={toggleItem}  className={`text-lg ${display}`} > {text} </p>
        <span onClick={handleDelete} className='text-red-600 font-bold cursor-pointer'>X</span>
    </div>  
  )
}

export default List