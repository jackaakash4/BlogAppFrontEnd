"use client"
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'
import Link from 'next/link'
import { Fleur_De_Leah } from 'next/font/google'

function Signup() {
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
                    <label>Name</label>
                    <input type='text' placeholder='Enter Your Name' />
                </div>
                <div className='forminput_cont'>
                    <label>Email</label>
                    <input type='email' placeholder='Enter Your Email' />
                </div>
                <div className='forminput_cont'>
                    <input type='password' placeholder='Enter Your password' />
                </div>
                <div className='forminput_cont'>
                    <label>Password</label>
                    <input type='password' placeholder='Confirm Your Password' />
                </div>
                <button type='submit' className='main_button'>Register</button>
                </form>
                
               <p>Already have an account? <Link href='/auth/signin'>Login</Link></p> 

            </div>
        </div>

    </div>
  )
}

export default Signup