'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ShipmentsTable from '../components/ShipmentsTable'
import SideNavbar from './../components/SideNavbar';


const page = () => {
  return (
    <>
      <main className=" p-8 flex-col lg:w-[88dvw] flex lg:flex-row ">
        {/* right navbar section  */}
        <SideNavbar></SideNavbar>
        {/* Main section  */}
        <main className="lg:ml-5 w-full ">
          {/* top main navbar  */}
          <section className="flex flex-col w-full lg:flex-row gap-4">
            {/* greeting babel */}
            <div className="babel">
              <h1 className="font-manrope text-secondary font-bold">
                Hey John!
              </h1>
              <p className="font-openSans font-normal text-sm text-gray-500">
                {new Date().toLocaleDateString("en-US", {
                  day: "numeric",
                  weekday: "long",
                  month: "long",
                })}
              </p>
            </div>
            {/* total shipment bable  */}
            <div className="babel">
              <div className="inline-block align-middle">
                <h1 className="font-manrope text-4xl mr-2 text-green-600 font-extrabold">
                  10+
                </h1>
              </div>
              <div className="inline-block align-middle">
                <h3 className="font-manrope text-secondary font-extrabold">
                  Total Shipments
                </h3>
                <p className="font-openSans font-normal text-sm text-gray-500">
                  vs Last Month
                </p>
              </div>
            </div>
            {/* request quote babel  */}
            <div className="babel border-green-900 border-2 inline-block">
              <Link href="/" className="inline-block align-middle font-manrope text-secondary font-extrabold hover:text-primary ease-in-out duration-200 mr-2 ">
                Request Quote
              </Link>
              <Image
                className="inline-block align-middle"
                src="/plus.svg"
                alt="Plus.svg"
                width={35}
                height={40}
              />
            </div>
          </section>

          <section>
            <ShipmentsTable></ShipmentsTable>
          </section>
        </main>
      </main>
    </>
  );
}

export default page
