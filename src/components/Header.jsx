import React from 'react'
import Logo from '../assets/img/Logo.png'
import { useState } from 'react'
import {Link} from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    console.log(isOpen)

  return (
    <div className='flex w-[100%] bg-[var(--secondary)]'>
        <div className='w-[100%] flex justify-center h-[60px]' ><img src={Logo} alt="Logo-lofwork"/></div>
        <div className='flex justify-end items-center p-3'><button onClick={() => setIsOpen(!isOpen)}><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2 text-[var(--primary)]" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg></button></div>
        <div className={isOpen ? 'bg-[var(--primary)] w-[200px] absolute top-0 right-0 h-[350px] flex flex-col items-center justify-arround gap-5 rounded-[0px_0px_0px_25px]' : 'hidden'}>
            <button onClick={() => setIsOpen(!isOpen)}><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x text-white m-2 self-end" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg></button>
            <Link to='/' className='p-2 w-[80%] text-center rounded-lg bg-white font-roboto font-black text-[var(--primary)]'>INICIO</Link>
            <Link to='/Blog' className='p-2 w-[80%] text-center rounded-lg bg-white font-roboto font-black text-[var(--primary)]'>BLOG</Link>
            <Link to='/Diagnostico' className='p-2 w-[80%] text-center rounded-lg bg-white font-roboto font-black text-[var(--primary)]'>DIAGNOSTICO</Link>
            <Link to='/Contacto' className='p-2 w-[80%] text-center rounded-lg bg-white font-roboto font-black text-[var(--primary)]'>CONTACTO</Link>
        </div>
    </div>
  )
}

export default Header