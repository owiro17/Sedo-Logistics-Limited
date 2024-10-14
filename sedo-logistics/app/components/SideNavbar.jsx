import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SideNavbar = () => {
    const pathname = usePathname();
  return (
    <>
         <section className="lg:m-0 w-full lg:w-[42%]">
          <div className="babel w-full inline-block ">
            <div className="inline-block align-middle">
              <Image
                className="rounded-full p-2 border border-black mr-4"
                src="/profilePic.svg"
                alt="Profile Picture"
                width={40}
                height={40}
              />
            </div>
            <div className="inline-block align-middle">
              <div className="flex flex-col ">
                <h3 className="font-manrope text-xl text-secondary font-extrabold">
                  John Owiro
                </h3>
                <p className="font-openSans font-normal text-sm text-gray-500">
                  Johnowiro@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg px-3 py-4 border border-black shadow-md my-8">
            <ul className="flex flex-col gap-2">
              <li className={`flex duration-100 ease-in px-4 py-2 rounded-md gap-5 ${pathname === '/Dashboard' ? 'bg-gray-200' : ''}`}>
                <img src="/shipmentLogo.svg" alt="shipment logo" />
                <Link className="font-manrope text-secondary font-bold" href="">
                  Shipment
                </Link>
              </li>
              <li className="flex duration-100 ease-in hover:bg-gray-200 px-4 py-2 gap-4">
                <img src="/analyticsLogo.svg" alt="analytic logo" />
                <Link className="font-manrope text-secondary font-bold" href="">
                  Analytics
                </Link>
              </li>
              <li className="flex duration-100 ease-in hover:bg-gray-200 px-4 py-2 gap-4">
                <img src="/invoiceLogo.svg" alt="invoice logo" />
                <Link className="font-manrope text-secondary font-bold" href="">
                  Invoice
                </Link>
              </li>
              <li className="flex duration-100 ease-in hover:bg-gray-200 px-4 py-2 gap-4">
                <img src="QuotationLogo.svg" alt="quotation logo" />
                <Link className="font-manrope text-secondary font-bold" href="">
                  Quotation
                </Link>
              </li>
            </ul>
          </div>
        </section>
      
    </>
  )
}

export default SideNavbar
