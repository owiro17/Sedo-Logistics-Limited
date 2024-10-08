"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const[showServices, setShowServices] = useState(false);

  const menu = [
    { name: "Home", icon: "/Home.svg", link: "/" },
    { name: "About Us", icon: "/about.svg", link: "/About" },
    { name: "Login", icon: "/login.svg", link: "/Login" },
  ];
  return (
    <>
      <nav className="flex z-50  top-0 w-full  lg:px-24 mb-20 bg-[#E1F2F3]   fixed left-0 flew-row justify-between bg-opacity-90   items-center p-5 ">
        {/* <div className="w-full z-30  fixed left-0 top-0 bg-black  blur-xl h-[65px]"></div> */}
        <Link href="/">
          <Image
            src="/logo 3.png"
            alt="logo"
            width={150}
            height={150}
            className="cursor-pointer   z-40"
          />
        </Link>
        <ul className="flex-row gap-12  z-40 hidden lg:flex">
          <li className="font-manrope  hover:text-[#1790C5] font-normal  text-zinc-800  transition-all ease-in-out duration-100  ">
            <Link href="/">Home</Link>
          </li>
          <li className="font-manrope hover:text-[#1790C5] font-normal text-zinc-800  transition-all ease-in-out duration-100 ">
            <Link href="/About">About Us</Link>
          </li>
          <li
            onClick={() => setShowServices(!showServices)}
            className="font-manrope inline-flex gap-2 hover:text-[#1790C5] hover: font-normal text-zinc-800  transition-all ease-in-out duration-100 cursor-pointer "
          >
            Services <img src="/arrow-bottom.svg" className="w-4" alt="" />
          </li>
          {showServices && (
            <div className="w-[200px] h-[155px] absolute right-10 top-14 bg-white rounded-lg mt-4 shadow-lg mr-10 p-5 ">
              <ul className="flex flex-col gap-2">
                <li className="flex flex-row gap-2">
                  <img className="w-5" src="/planeIcon.svg" alt="plane logo" />
                  <a
                    className="font-manrope hover:text-[#1790C5] font-normal text-zinc-800  transition-all ease-in-out duration-100"
                    href="/Air-Freight"
                  >
                    Air Freight
                  </a>
                </li>
                <li className="flex flex-row gap-2">
                  <img className="w-5" src="/seaIcon.svg" alt=" sea logo" />
                  <a
                    className="font-manrope hover:text-[#1790C5] font-normal text-zinc-800  transition-all ease-in-out duration-100"
                    href="/Sea-Freight"
                  >
                    Sea Freight
                  </a>
                </li>
                <li className="flex flex-row gap-2">
                  <img className="w-5" src="/roadIcon.svg" alt="" />
                  <a
                    className="font-manrope hover:text-[#1790C5] font-normal text-zinc-800  transition-all ease-in-out duration-100"
                    href="/Road-Freight"
                  >
                    Road Freight
                  </a>
                </li>
                <li className="flex flex-row gap-2">
                  <img className="w-5" src="/dashboardIcon.svg" alt="" />
                  <a
                    className="font-manrope hover:text-[#1790C5] font-normal text-zinc-800  transition-all ease-in-out duration-100"
                    href="/Dashboard"
                  >
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>
          )}

          <li className="font-manrope hover:text-[#1790C5] font-normal text-zinc-800  transition-all ease-in-out duration-100 ">
            <Link href="/Login">Login</Link>
          </li>
        </ul>

        <Image
          src="/menu.svg"
          alt="menu"
          width={40}
          height={24}
          onClick={() => setShowMenu(!showMenu)}
          className="lg:invisible lg:absolute cursor-pointer "
        />
      </nav>

      {showMenu && (
        <>
          <div className="fixed shadow-sm top-0 z-50 backdrop-blur-lg left-0 w-full h-screen overflow-scroll overflow-y-scroll bg-[#C8E9F9] p-5 ">
            <div className="flex justify-between items-center  border-black pb-1">
              <Link href="/">
                <Image
                  src="/logo 3.png"
                  alt="logo"
                  width={150}
                  height={150}
                  className="cursor-pointer"
                />
              </Link>
              <Image
                src="/close.svg"
                alt="menu"
                width={30}
                height={24}
                onClick={() => setShowMenu(!showMenu)}
                className="cursor-pointer"
              />
            </div>
            <ul className="flex-col gap-4 pt-5">
              {menu.map((item, index) => (
                <li
                  key={index}
                  className="font-open-sans text-5xl border-b py-4 text-secondary border-gray-600 font-normal flex items-center gap-2"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={36}
                    height={20}
                  />
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
              <div>
                <label
                  htmlFor="services"
                  onClick={() => setIsVisible(!isVisible)}
                  className="font-open-sans text-5xl border-b py-4 text-secondary border-gray-600 font-normal flex items-center gap-2"
                >
                  <Image
                    src="/arrow-bottom.svg"
                    alt="menu"
                    width={36}
                    height={24}
                    onClick={() => setIsVisible(!isVisible)}
                    className="cursor-pointer"
                  />
                  Services
                </label>
                <ul
                  className={`${
                    isVisible ? "flex" : "hidden"
                  } flex-col left-16 gap-1 relative pt-4 pb-7`}
                >
                  <Link
                    href="Air-Freight"
                    className="font-open-sans font-light text-2xl flex items-center gap-2"
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    <Image
                      src="/arrow-dot.svg"
                      alt="menu"
                      width={10}
                      height={24}
                      onClick={() => setIsVisible(!isVisible)}
                      className="cursor-pointer"
                    />
                    Air Freight
                  </Link>
                  <Link
                    href="Sea-Freight"
                    className="font-open-sans font-light text-2xl flex items-center gap-2"
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    <Image
                      src="/arrow-dot.svg"
                      alt="menu"
                      width={10}
                      height={24}
                      onClick={() => setIsVisible(!isVisible)}
                      className="cursor-pointer"
                    />
                    Sea Freight
                  </Link>
                  <Link
                    href="Road-Freight"
                    className="font-open-sans font-light text-2xl flex items-center gap-2 "
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    <Image
                      src="/arrow-dot.svg"
                      alt="menu"
                      width={10}
                      height={24}
                      onClick={() => setIsVisible(!isVisible)}
                      className="cursor-pointer"
                    />
                    Road Freight
                  </Link>
                </ul>
              </div>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
