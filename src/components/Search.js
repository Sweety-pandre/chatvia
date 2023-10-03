import React from 'react'

function Search() {
  return (
    <div className='searchBar'>
        <input type="text" id="search" placeholder='Find a user' />
        <img src="searchLogo" alt="logo" />
    </div>
  )
}

export default Search