import React, { useState } from 'react'

const SearchList = ({searchText,setSearchText}:any) => {
   
    return (
        <form onSubmit={(e)=>e.preventDefault()}>
            <input type='text' placeholder="Search user" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
        </form>
    )
}

export default SearchList