import React from 'react'
import '../../styles/essentials/Header.css'

const Header = () => {
  return (
    <nav className='navigationbar'>
        <div>
            <div className='navbar-first'>
                <h1>TriviaNest</h1>
            </div>
            <div className='navbar-second'>
                <h2>hey</h2>
                <div>
                  <img className='user-profile' src='https://i.pinimg.com/564x/b6/a0/85/b6a0850f636c33b22dbd213bc5835b09.jpg'/>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Header
