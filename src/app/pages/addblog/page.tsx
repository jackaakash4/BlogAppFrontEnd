import Navbar from '@/components/Navbar/Navbar'
import React from 'react'
import './addblog.css'

function AddBlog() {
  return (
    <div className='addblog'>
        <Navbar />
        <div className="addblog_in">
            <form style={{
                    width: '70%',
                    minWidth: '250px',
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: '60px'
            }}>
                <div className="forminput_cont">
                    <label>Blog Name</label>
                    <input type='text' placeholder='Enter the blog title' />

                </div>
                <div className="forminput_cont">
                    <label>Blog Description</label>
                    <textarea placeholder='Enter Blog Description' />
                </div>
                <div className="forminput_cont">
                    <label>Blog Image</label>
                    <input type='file' placeholder='Enter your image'/>
                </div>

                <div className="paragraph">
                <div className="forminput_cont">
                    <label>Paragraph Title</label>
                    <input type='text' placeholder='Enter the paragraph title' />

                </div>
                <div className="forminput_cont">
                    <label>Paragraph Description</label>
                    <textarea placeholder='Enter Paragraph Description' />
                </div>
                <div className="forminput_cont">
                    <label>Paragraph Image</label>
                    <input type='file' placeholder='Enter your image'/>
                </div>
                <button className='main_button' type='submit'>Add More Paragraph</button>
                </div>
                <button className='main_button' type='submit'>Submit</button>

            </form>
        </div>
    </div>
  )
}

export default AddBlog