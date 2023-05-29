import React, { useState } from 'react';
import Header from './Header';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css';
import AddTask from './AddTask';
import SearchList from './SearchList';

function App() {

  const [users,setUsers] = useState(()=>{
      const storedData = localStorage.getItem('to-do-list');
      return storedData ? JSON.parse(storedData) : '';
    }
  );

  const[searchText,setSearchText] = useState('');

  function handleDelete(id:number){
    console.log('Delete id : ',id);
    let newListItems = users.filter((item:any) => item.id !== id);
    setUsers(newListItems);
    localStorage.setItem('to-do-list',JSON.stringify(newListItems));
  }

  function handleClick(id:number){
    console.log('handleClick : ',id);
    let checkedList = users.map((item:any)=>
      item.id === id ? {...item,checked : !item.checked} : item);
    setUsers(checkedList);
    console.log('checkedList',checkedList);
    localStorage.setItem('to-do-list',JSON.stringify(checkedList));
  }

  return (
    <div className='app d-flex flex-column'>
      <Header title="props" />
      <div className='ps-4'>
        <AddTask
          users = {users}
          setUsers = {setUsers}
        />
        <SearchList 
          searchText = {searchText}
          setSearchText = {setSearchText}
        />
      </div>
      <Content 
        users = {users.filter((item:any)=> (item.name.toLowerCase()).includes(searchText.toLowerCase()))}
        setUsers = {setUsers}
        handleClick = {handleClick}
        handleDelete = {handleDelete}
      />
       <Footer length = {users.length}/>
    </div>
  );
}

export default App;
