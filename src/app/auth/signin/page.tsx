"use client"
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'
import Link from 'next/link'
import '../auth.css'

function Signin() {
  return (
    <div className="authout">
        <Navbar />
        <div className="authin">
            <div className="left">

            </div>
            <div className="right">
                <form style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                
                <div className='forminput_cont'>
                    <label>Email</label>
                    <input type='email' placeholder='Enter Your Email' />
                </div>
                <div className='forminput_cont'>
                    <label>Password</label>
                    <input type='password' placeholder='Enter Your password' />
                </div>
               
                <button type='submit' className='main_button'>Log In</button>
                </form>
                
               <p>Don't have an account <Link href='/auth/signup'>Register</Link></p> 

            </div>
        </div>

    </div>
  )
}

export default Signin