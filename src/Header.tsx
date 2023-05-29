import React, { useState } from 'react'
import  {FaUserCircle}  from "react-icons/fa";

function Header({title}: any) {

  // let names:any[] = ['Arivu','Raju','Ram'];

  // function userda(){
  //   return 'Jeeva'
  // }

  // const [name,setName] = useState(()=>userda()); 

  // function userSelected(){
  //   let index:number = Math.floor(Math.random()*names.length);
  //   setName(names[index]);
  //   console.log(name);
  // }

  // const [users,setUsers] = useState(
  //   [
  //     {
  //       id:1,
  //       name:'Jeeva S',
  //       age:23
  //     },
  //     {
  //       id:2,
  //       name:'Vishnu',
  //       age:25
  //     },
  //     {
  //       id:3,
  //       name:'Sri hari',
  //       age:17
  //     }
  //   ]
  // );

  // function handleSetName(){
  //   setUsers([]);
  // }

  // function userDetails(id:number){
  //   console.log(id);
  // }

  // const userClicked = ()=>{
  //   console.log('user view clicked !');
  // }

  return (
    <div>
      {/* <h1>{name}</h1> */}
      {/* <button onClick={userSelected}>User+</button> */}
      {/* Lets go for a <FaUserCircle  className='userProfile' onClick={userClicked}/>?
      {users && users.map((user,index) => (
      <div key={user.id}>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <button onClick={()=>userDetails(user.id)}>View</button>
      </div>
    ))} */}
    <header>{title.toUpperCase()}</header>
    </div>
  )
}

Header.defaultProps = {
       title : 'To-do',
}
export default Header