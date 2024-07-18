import React from 'react'
import Image from 'next/image'
const Footer = () => {
    return (
        <div>
            <footer className="bg-footerBg relative top-[100px] py-12">
                <div className="container mx-auto lg:flex-row gap-10 flex px-10 flex-col justify-around">
                    <div>
                        <h2 className="text-lg font-raleway text-secondary font-bold mb-4">Important Links</h2>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-blue-900">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-blue-900">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-blue-900">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-blue-900">
                                    Login
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-blue-900">
                                    Sign Up
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-lg font-raleway  text-secondary  font-bold mb-4">Freight Services</h2>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-blue-900">
                                    Air Freight
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-blue-900">
                                    Rail Freight
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-blue-900">
                                    Sea Freight
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-blue-900">
                                    Road Freight
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-lg font-raleway  text-secondary  font-bold mb-4">Get In Touch</h2>
                        <ul className="space-y-2">
                            <li className="flex items-center space-x-2">
                            <Image src="/mail.svg" width={25} height={30} alt='phone logo'></Image>
                                <span className="text-blue-900">info@sedologistics.co.ke</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Image src="/phone.svg" width={25} height={30} alt='phone logo'></Image>
                                <span className="text-blue-900">+254 722 973 090</span>
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
