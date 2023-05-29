import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const SpecificUser = ({item,handleClick,handleDelete}:any) => {
  return (
    <div className='d-flex listItem'>
        <input type='checkbox' className='userCheckBox' onChange={()=>handleClick(item.id)} checked={item.checked}/>
        <div style={item.checked ? {textDecoration : 'line-through'} : {}}>{item.name}</div>
        <span><FaTrashAlt 
            style={{ color:'red' }}
            onClick={()=>handleDelete(item.id)}   
            /></span>
    </div>
  )
}

export default SpecificUser