'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useAuth } from '@clerk/nextjs/server'

 const SideNavbar =  ({firstName,profileImg,email}) => {
  const pathname = usePathname();
  const navLinks = [{ name: "Shipment", icon: "shipmentLogo.svg" }, { name: "Analytics", icon: "analyticsLogo.svg" }, { name: "Invoice", icon: "invoiceLogo.svg" }, { name: "Quotation", icon: "QuotationLogo.svg" } ];
//   const { userId} = useAuth()


  return (
    <>
      <section className="lg:m-0 w-full lg:w-[42%]">
        <div className="babel w-full inline-block ">
          <div className="inline-block align-middle">
            <Image
              className="rounded-full  border border-black mr-4"
              src={profileImg}
              alt="Profile Picture"
              width={40}
              height={40}
            />
           
          </div>
          <div className="inline-block align-middle">
            <div className="flex flex-col ">
              <h3 className="font-manrope text-xl text-secondary font-extrabold">
                {/* {userId.firstName} {userId.lastName} */}
                {firstName}
              </h3>
              <p className="font-openSans font-normal text-sm text-gray-500">
                {email}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg px-3 py-4 border border-black shadow-md my-8">
          <ul className="flex flex-col gap-2">
          <li
                className={`flex duration-100 ease-in px-4 py-2 hover:bg-gray-200  rounded-md gap-1 ${
                  pathname === `/Dashboard` ? "bg-gray-200" : ""
                }`}
              >
              <Image
              className="rounded-full p-2 border border-black mr-4"
              src='/dashboard.svg'
              alt="Dashboard logo"
              width={38}
              height={40}
            />
                <Link className="font-manrope text-secondary font-bold hover:text-primary" href= {`/Dashboard`}>
                  Dashboard
                </Link>
            </li>
            {navLinks.map((link) => (
              <li
                key={link.name}
                className={`flex duration-100 ease-in px-4 py-2 hover:bg-gray-200  rounded-md gap-1 ${
                  pathname === `/Dashboard/${link.name}` ? "bg-gray-200" : ""
                }`}
              >
              <Image
              className="rounded-full p-2 border border-black mr-4"
              src={`/${link.icon}`}
              alt={`${link.name} logo`}
              width={38}
              height={40}
            />
                <Link className="font-manrope text-secondary font-bold hover:text-primary" href= {`/Dashboard/${link.name}`}>
                  {link.name}
                </Link>
              </li>
            ))}
           
          </ul>
        </div>
      </section>
    </>
  );
};



import PropTypes from 'prop-types';

SideNavbar.propTypes = {
  firstName: PropTypes.string.isRequired,
  profileImg: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default SideNavbar;

// budget

