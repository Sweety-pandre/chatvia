import React from 'react'
import ChatList from './ChatList';
import ChatBox from './ChatBox';
import "./Register.css";
import "./Style.css";

function Home() {
  return (
    <div className="home">
       
            <ChatList></ChatList>
            <ChatBox></ChatBox>
        
    </div>
  )
}

export default Home