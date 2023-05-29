import React, { useState } from 'react'

const AddTask = ({users,setUsers}:any) => {

  const[task,setTask] = useState('');

  function addingTask(e:any){
    e.preventDefault();
    console.log('set task added... ',task);
    console.log('users... ',users);

    if(task == ''){
      return;
    }

    let newOne = {
      id:users?.length>0 ? users[users.length-1].id+1 : 1,
      name: `${task}`,
      age:17,
      checked : false
    }
    const newAddedList = [...users,newOne];
    console.log('newAddedList', newAddedList);
    setUsers(newAddedList);
    localStorage.setItem('to-do-list',JSON.stringify(newAddedList));
    setTask('');
  }

  return (
    <form onSubmit = {addingTask}>
        {/* <label htmlFor='addTask'> Add Items </label> */}
        <input id="addTask" name='addTask' placeholder='Add a item' value={task} onChange={(e)=>setTask(e.target.value)}/>
        <button type='submit' className='btn btn-danger'>Add</button>
    </form>
  )
}

export default AddTask