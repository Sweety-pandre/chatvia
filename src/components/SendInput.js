import React from 'react'
import logo from '../imgs/plus.png'
import send from '../imgs/sendicon.png'
function SendInput() {
    return (
        <div className='sendArea'>
            <input type="text" placeholder='type something.....' className='txt' />
            <div className="send">
                <img src="" alt="" />
                <input type="file" style={{ display: "none" }} id='file' />
                <label htmlFor="file">
                    <img src={logo} alt="" />
                </label>
                <button><img src={send} alt="" id="img" /></button>
            </div>
        </div>
    )
}

export default SendInput