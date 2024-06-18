import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav className='navbar'>
            <ul className='navbar--links'>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/about'>ABOUT</Link></li>
                <li><Link to='/houses'>HOUSES</Link></li>
                <li>SEARCH</li>
            </ul>
        </nav>
    )
}

export default Navbar