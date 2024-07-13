import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className='flex items-center justify-start my-3 gap-2 bg-slate-100 rounded-xl p-3'>

      <div onClick={()=> {toggle(id)}} className='flex items-center cursor-pointer'>
        <img src={isComplete ? tick : not_tick} alt=""  className='w-7'/>
        <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : ""}`}>{text}</p>
      </div>
      <img src={delete_icon} alt="" className='w-3.5 cursor-pointer ml-auto' onClick={() => deleteTodo(id)} />

    </div>
  )
}

export default TodoItems
