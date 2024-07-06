import React from 'react'
import check from './assets/check.png'
import delete1 from './assets/delete.png'
import unCheck from './assets/unCheck.png'

function ToDoItem({ no, display, text, setTodo }) {

    const toggle = () => {
        let data = JSON.parse(localStorage.getItem("toDo"));
        for (let i = 0; i < data.length; i++) {
            if (data[i].no === no) {
                if (data[i].display === "") {
                    data[i].display = "line-through text-red-500"
                } else {
                    data[i].display = ""
                }
                break;
            }
        }
        setTodo(data);
    }

    const deleteTask = (no) => {
        let data = JSON.parse(localStorage.getItem("toDo"));
        data = data.filter((todo) => todo.no !== no);
        setTodo(data);
    }
    return (
        <div className='flex justify-between align-middle px-4 py-2 w-full'>

            <div className={`flex ${display}`} onClick={() => { toggle(no) }}>
                {display === "" ?
                    <img className=' cursor-pointer h-4 mt-1.5' src={unCheck} alt="" /> :
                    <img className='cursor-pointer h-4 mt-1.5 pl-2 ' src={check} alt="" />}

                <div className='pl-4 text-black-500 text-md'>{text}</div>
            </div>
            <img onClick={() => { deleteTask(no) }} className=' w-4 h-4 mt-1.5 cursor-pointer' src={delete1} alt="" />
        </div>
    )
}

export default ToDoItem