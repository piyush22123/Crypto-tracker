import React, { useState } from 'react'
import "./Styles.css"
import SearchIcon from '@mui/icons-material/Search';


const Search = ({ search, onSearchChange}) => {

  return (
    <div className='search-flex'>
      <SearchIcon/>
      <input type="text" value={search} onChange={(e) => onSearchChange(e)} placeholder='Search' />
    </div>
  )
}

export default Search