import React from 'react'
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';
import logo from '../../images/logo.png'
import {XMarkIcon,Bars4Icon } from '@heroicons/react/24/solid'
const Header = () => {
    const Header = [
        {id:1, name: 'Home', path: "/" },
        {id:2, name: 'Topcs', path: "/Topcs" },
        {id:3, name: 'Blog', path: "/Blog" },
        
    ]
    const [open,setOpen]=useState(false)
        return (
            <nav className='bg-sky-800 sm:mb-10'>
                <div onClick={()=>setOpen(!open)} className="h-9 w-9 text-blue-500 md:hidden">
                    {
                        open ?<XMarkIcon></XMarkIcon>:<Bars4Icon></Bars4Icon>
                    }
                 </div>
                <ul className={`p-5 md:flex md:justify-between w-full bg-sky-800 items-center absolute duration-500 ease-out md:static 
            ${open?'top-9' : 'top-[-180px]'}`}>
                    <img className='w-25 h-9 ml-2' src={logo} alt="" />
                <div className='md:flex md:mr-6'>
                {
                            Header.map(Head => <Navbar
                                key={Head.id}
                                head={Head}
                            ></Navbar>)   
                }
                </div>
                </ul>
             </nav>
        );
};

export default Header;