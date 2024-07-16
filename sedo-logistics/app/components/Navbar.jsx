"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const menu = [
    { name: 'Home', icon: '/home.svg', link: '/' },
    { name: 'About Us', icon: '/about.svg', link: '/about' },
    { name: 'Services', icon: '/service.svg', link: '/services' },
    { name: 'Login', icon: '/login.svg', link: '/login' },
  ];
  return (
    <>
      <nav className="flex flew-row bg-[#C8E9F9] justify-between items-center p-5 ">
        <Image src="/logo 3.png" alt="logo" width={150} height={150} />
        <ul className='flex-row gap-9 hidden lg:flex'>
          <li className="font-open-sans text-">Home</li>
          <li className="font-open-sans">About Us</li>
          <li className="font-open-sans">Services</li>
          <li className="font-open-sans">Login</li>

        </ul>

        
        <Image src="/menu.svg" alt="menu" width={40} height={24} onClick={() => setShowMenu(!showMenu)} className='lg:invisible lg:absolute ' />
      </nav>

        {showMenu && (
          <>
          <div className='absolute top-0 w-full bg-[#C8E9F9] p-5 h-[50%]'>
            <div className='flex justify-between items-center border-b border-black pb-1'>
            <Image src="/logo 3.png" alt="logo" width={150} height={150} />
            <Image src="/close.svg" alt="menu" width={30} height={24} onClick={() => setShowMenu(!showMenu)} className='' />
            </div>
          <ul className='flex-col pt-5 '>
            {menu.map((item, index) => (
              <li key={index} className="font-open-sans text-lg flex items-center gap-4"><Image src={item.icon} alt={item.name} width={22} height={20} /><a href={item.link}>{item.name}</a></li>
            ))}
          </ul>
          </div>
          </>
        )}

    </>
  )

}

export default Navbar
