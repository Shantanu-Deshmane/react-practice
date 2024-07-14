import React from 'react'

function List({text,setTodoList,id}) {
    const handleDelete = ()=> {
        setTodoList((prevList) => prevList.filter((item) => item.no !== id));
        
  };
  return (

    <div className='flex justify-between px-4  py-3'>
        <p className='text-lg' > {text} </p>
        <span onClick={handleDelete} className='text-red-600 font-bold cursor-pointer'>X</span>
    </div>
  )
}

export default List