import React from 'react'
import './Navbar.css'
import {BiSearchAlt, BiPlus, BiSolidUserCircle} from 'react-icons/bi'
import Link from 'next/link'
import Logo from '@/Assets/Logo.png'
import Image from 'next/image'

function Navbar() {
  return (
    <nav className='navbar'>
        <div className="navbar-left">
            <Link href='/search'>
                <BiSearchAlt className="icon" />
            </Link>
            <Link href="/addblog">
                <BiPlus className="icon" />
            </Link>
            <Link href='/profile'>
                <BiSolidUserCircle className='icon'/>
            </Link>
        </div>
        <div className="navbar-middle">
            <Link href='/'>
                <Image 
                    className='logo'
                    src={Logo}
                    alt='Logo'
                />
            </Link>
        </div>
        <div className="navbar-right">
            <Link href='/'>Home</Link>
            <Link href='/pages/about'>About</Link>
            <Link href='/pages/contact'>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar