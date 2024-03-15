import React from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineLogin, AiOutlineUser, AiOutlineUserAdd, AiOutlineUserSwitch, AiOutlineMail } from 'react-icons/ai';


export function Navbar () {
    return (
    
        
      <nav className="flex flex-row items-center justify-between bg-slate-900 text-white py-4 px-6">
        
        <div className="hidden lg:flex md:flex lg:flex-1 items-center justify-end font-normal space-x-6">
          <Link to="/" spy={true} smooth={true} className="hover:bg-slate-800 hover:rounded py-2 px-4 hover:scale-110 ease-in duration-200">
            <AiOutlineHome size={20} /> Home
          </Link>
          <Link to="About" spy={true} smooth={true} className="hover:bg-slate-800 hover:rounded py-2 px-4 hover:scale-110 ease-in duration-200">
            <AiOutlineInfoCircle size={20}/> About
          </Link>
          <Link to="Contact"spy={true} smooth={true}  className="hover:bg-slate-800 hover:bg-slate-800  hover:rounded py-2 px-4 hover:scale-110 ease-in duration-200">
            <AiOutlineMail size={20} /> Contact
          </Link>

          <Link to="SignUp" spy={true} smooth={true} className="hover:bg-teal-800 hover:text-white-500 hover:rounded  transition py-2 px-4 hover:scale-110 ease-in duration-200">
            <AiOutlineUserAdd size={20}/> <b>SignUp</b>
          </Link>

          <Link to="LogIn" spy={true} smooth={true} className="hover:bg-teal-800  hover:text-white-500 hover:rounded transition py-2 px-4 hover:scale-110 ease-in duration-200">
            <AiOutlineLogin size={20}/><b> LogIn</b>
          </Link>
        </div>
        <div className="lg:hidden block bg-slate-900 text-white py-4 px-6 ">
          <ul className="flex text-center text-xl space-x-6">
           
          </ul>
        </div>
      </nav>
      
    );
  };
  