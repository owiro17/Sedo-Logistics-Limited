import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
// import Skeleton from 'next/Skeleton'
import './loadstyle.css'
const loading = () => {
    return (
        <>
        <SkeletonTheme baseColor="#C0C0C0" highlightColor="#EDEDED">
        <nav className="w-full flex justify-between top-0 lg:px-24 mb-20 p-5 fixed left-0 flew-row items-center"> 
            <Skeleton width={150} height={60}></Skeleton>

            <ul className="flex-row gap-12 z-40 lg:flex items-center justify-center hidden">
                <Skeleton width={90} height={20}></Skeleton>
                <Skeleton width={90} height={20}></Skeleton>
                <Skeleton width={90} height={20}></Skeleton>
                <Skeleton circle width={25} height={25}></Skeleton>
                <Skeleton width={50} height={50} className='lg:hidden lg:invisible lg:absolute top-0 left-0'></Skeleton>
            </ul>
            <div className='lg:hidden'>
            <Skeleton width={50} height={50} ></Skeleton>
            </div>



        </nav>
        <div className=" z-10  mt-10  m-auto lg:w-[75%]  py-20 mb-16   flex flex-col items-center md:items-center gap-2 justify-center  ">
            <Skeleton containerClassName="lg:w-[70%] w-[90%]" height={40} ></Skeleton>
            <Skeleton containerClassName="lg:w-[45%] w-[65%]"height={40} ></Skeleton>
            <Skeleton  containerClassName="lg:w-[75%] w-[95%]" height={15} className='mt-4'></Skeleton>
            <Skeleton  containerClassName="lg:w-[55%] w-[65%]" height={15} ></Skeleton>
            <Skeleton  width={90} height={35}  ></Skeleton>


        </div>
        </SkeletonTheme>
        </>
    )
}

export default loading
