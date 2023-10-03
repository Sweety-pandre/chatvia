import React from 'react'
import Messages from './Messages';
import SendInput from './SendInput';


function ChatBox() {

  return (

    <div className='chatBox'>

      <div className="chatInfo">
        <span>Sweety</span>
        {/* <div className="chatIcons">
          <img src={logo}  alt="" />
          <img src={logo} alt="" />
          <img src={logo}  alt="" />
        </div> */}
      </div>


      <Messages></Messages>
      
      <SendInput></SendInput>


    </div>
  )
}

export default ChatBox