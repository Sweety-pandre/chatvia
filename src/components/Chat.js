import React from 'react'
import logo from '../imgs/avtar.png'
function Chat() {
  return (
    <div className='chat'>
      <span className='userPic'><img src={logo} alt="" /></span>
      < div className="content">
        <p className="userName">Sweety</p>
        <p className='userMsg'>Hey!</p>
      </div>
    </div>
  )
}

export default Chat