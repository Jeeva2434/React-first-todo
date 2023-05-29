import React from 'react'
import UserList from './UserList';

const Content = ({users,setUsers,handleClick,handleDelete}:any) => {

    // function getRole():string{
    //     let roles:string[] = ['FE','BE','BA'];
    //     let index:number = Math.floor(Math.random()*roles.length);
    //     return roles[index];
    // }


    return (
        <main>
            {users.length > 0 ? (
                <UserList
                   users = {users}
                   setUsers = {setUsers}
                   handleClick = {handleClick}
                   handleDelete = {handleDelete}
                />   
            ):(
                <div>User list is empty!</div>
            )}
            
        </main>
    )
}

export default Content