"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const menu = [
    { name: 'Home', icon: '/Home.svg', link: '/' },
    { name: 'About Us', icon: '/about.svg', link: '/About' },
    { name: 'Services', icon: '/service.svg', link: '/' },
    { name: 'Login', icon: '/login.svg', link: '/Login' },
  ];
  return (
    <>
      <nav className="flex flew-row bg-[#C8E9F9] justify-between items-center p-5 ">
      <Link href="/"><Image src="/logo 3.png" alt="logo" width={150} height={150} className='cursor-pointer'/></Link> 
        <ul className='flex-row gap-12 hidden lg:flex'>
          <li className="font-manrope  hover:text-[#1790C5] font-normal  text-zinc-800  transition-all ease-in-out duration-100  "><Link href="/">Home</Link></li>
          <li className="font-manrope hover:text-[#1790C5] font-normal text-zinc-800  transition-all ease-in-out duration-100 "><Link href="/About">About Us</Link></li>
          <li className="font-manrope hover:text-[#1790C5] font-normal text-zinc-800  transition-all ease-in-out duration-100 "><Link href="/">Services</Link></li>
          <li className="font-manrope hover:text-[#1790C5] font-normal text-zinc-800  transition-all ease-in-out duration-100 "><Link href="/Login">Login</Link></li>

        </ul>

        
        <Image src="/menu.svg" alt="menu" width={40} height={24} onClick={() => setShowMenu(!showMenu)} className='lg:invisible lg:absolute cursor-pointer ' />
      </nav>

        {showMenu && (
          <>
          <div className='absolute z-10 top-0 w-full bg-[#C8E9F9] p-5 h-[50%]'>
            <div className='flex justify-between items-center border-b border-black pb-1'>
           <Link href="/"><Image src="/logo 3.png" alt="logo" width={150} height={150} className='cursor-pointer'/></Link> 
            <Image src="/close.svg" alt="menu" width={30} height={24} onClick={() => setShowMenu(!showMenu)} className='cursor-pointer' />
            </div>
          <ul className='flex-col pt-5 '>
            {menu.map((item, index) => (
              <li key={index} className="font-open-sans text-lg flex items-center gap-4" onClick={() => setShowMenu(!showMenu)} ><Image src={item.icon} alt={item.name} width={22} height={20} /><Link href={item.link}>{item.name}</Link></li>
            ))}
          </ul>
          </div>
          </>
        )}

    </>
  )

}

export default Navbar
