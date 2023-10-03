import React from 'react'
import Chat from './Chat'
import Navbar from './Navbar'
import Search from './Search'
function ChatList() {
  return (
    <div className='chatList'>
      <Navbar></Navbar>
      <Search></Search>
      <Chat></Chat>
      <Chat></Chat>
    
    </div>
  )
}

export default ChatList