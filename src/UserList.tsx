import React from 'react'
import SpecificUser from './SpecificUser'

const UserList = ({users,setUsers,handleClick,handleDelete}:any) => {
  return (
        <div className='w-100'>
            {users.map((item:any)=>(
                <SpecificUser key={item.id} 
                   item = {item}
                   handleClick = {handleClick}
                   handleDelete = {handleDelete}
                />
            ))}
        </div>
  )
}

export default UserList