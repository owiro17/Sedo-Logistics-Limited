import React from 'react'
// import Image from 'next/image'
import './loadstyle.css'
const loading = () => {
    return (
        <>
            <div className='logo-back'>
                {/* <Image src='/logo.svg' width={200} height={200} className='logo-load'></Image> */}
                <svg viewBox="0 0 400 160">
                    <text x="50%" y="50%" dy=".32rem" textAnchor="middle" className="logo-body">SEDO</text>
                </svg>
            </div>
        </>
    )
}

export default loading
