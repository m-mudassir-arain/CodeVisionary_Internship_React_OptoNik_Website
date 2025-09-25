import React from 'react'
import SocialIcons from './SocialIcons'


function Footer() {
    return (
        <footer className='flex flex-col justify-evenly items-center p-9  bg-black text-white w-full h-full'>
            <div id='f-c-l-s' className='flex flex-wrap justify-evenly items-center w-full'>
                <div id='f-contact' className='flex flex-col justify-center items-start w-2/5 p-2'>
                    <h1 className='text-3xl font-bold mb-6'>Contact Us</h1>
                    <p className='text-lg text-slate-300'> <span className='text-white'>Phone:</span> 1234567890</p>
                    <p className='text-lg text-slate-300'> <span className='text-white'>Email:</span> optonik@gmail.com</p>
                    <p className='text-lg text-slate-300'><span className='text-white'>Address:</span> 123 Main St, NawabShah, Pakistan</p>
                </div>
                <div id='f-socialmedia' className='flex flex-col justify-center items-center  w-1/5 p-2'>
                    <h1 className='text-3xl font-bold mb-6'>Social Media</h1>
                    <button><SocialIcons/></button>
                </div>
                <div id='f-Link' className='flex flex-col justify-center items-center w-2/5 p-2'>
                    <h1 className='text-3xl font-bold mb-6'>Links</h1>
                    <ul className='flex justify-center items-center'>
                        <li><a href='/' className='m-5 text-slate-400 hover:text-white'>Eye Testing</a></li>
                        <li><a href='/Frames' className='m-5 text-slate-400 hover:text-white'>Frames</a></li>
                        <li><a href='/About' className='m-5 text-slate-400 hover:text-white'>About</a></li>
                        <li><a href='/Appointment' className='m-5 text-slate-400 hover:text-white'>Get Appointment</a></li>
                        <li><a href='/Contact' className='m-5 text-slate-400 hover:text-white'>Contact</a></li>
                    </ul>
                </div>
                
            </div>
            <div id='copyright-section' className='border-t-2 w-full flex justify-center items-center p-3'>
                <p>&copy;Copyright 2024 OptoNik. All Rights Resereved | Design by <span className="">M.Mudassir</span></p>
            </div>
        </footer>
    )
}
  
export default Footer