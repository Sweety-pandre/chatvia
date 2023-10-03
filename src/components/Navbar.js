import React from 'react'
import avtar from '../imgs/avtar.png'
function Navbar() {
    return (
        <div className='nav'>
            <span className="proPic">
                <img src={avtar} alt="" />
                <p>Sweety</p>
            </span>
            <div className="logOut">
                <button>Log out</button>
            </div></div>
    )
}

export default Navbar