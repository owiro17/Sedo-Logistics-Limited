import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
    return (
        <div>
            <footer className="bg-footerBg relative top-[100px] py-12">
                <div className="container mx-auto lg:flex-row gap-10 flex px-10 flex-col justify-around">
                    <div>
                        <h2 className="text-xl font-raleway text-[#1790C5]  font-bold mb-3">Important Links</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="hover:text-[#1790C5] font-manrope font-normal text-black">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/About" className="hover:text-[#1790C5] font-manrope font-normal  text-black">
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link href="/Login" className="hover:text-[#1790C5] font-manrope font-normal text-black">
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-raleway  text-[#1790C5]  font-bold mb-3">Freight Services</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/Air-Freight" className="hover:text-[#1790C5] font-manrope font-normal text-black">
                                    Air Freight
                                </Link>
                            </li>
                            <li>
                                <Link href="/Sea-Freight" className="hover:text-[#1790C5] font-manrope font-normal text-black">
                                    Sea Freight
                                </Link>
                            </li>
                            <li>
                                <Link href="/Road-Freight" className="hover:text-[#1790C5] font-manrope font-normal text-black">
                                    Road Freight
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-raleway  text-[#1790C5] font-bold mb-3">Get In Touch</h2>
                        <ul className="space-y-2">
                            <li className="flex items-center space-x-2">
                            <Image src="/mail.svg" width={25} height={30} alt='phone logo'></Image>
                                <span className="text-blue-900 font-manrope font-normal">info@sedologistics.co.ke</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Image src="/phone.svg" width={25} height={30} alt='phone logo'></Image>
                                <span className="text-blue-900 font-manrope font-normal">+254 722 973 090</span>
                            </li>
                        </ul>
                    </div>

                </div>
                <p className='text-center mt-10'>&copy; 2024. All rights reserved.</p>
            </footer>

        </div>
    )
}

export default Footer
