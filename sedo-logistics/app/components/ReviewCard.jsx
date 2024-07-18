import React from 'react'
import Image from 'next/image'
const ReviewCard = () => {
    const UserDetails = [
        { name: 'John Owiro', profile: '/person1.jpg', comment: 'Being the founder and a regular user of this website my business has grown and has allowed to keep track of my expenses in shipments and has helped me organize my resources well ',role:'Director' },
        { name: 'Mohammed Subash', profile: '/person 2.jpg', comment: 'I have been using Sedo Logistics Limited for my shipping and they have increased our productivity and organization of data and enabled us to see the future ',role:'Head of Operations' }
    ]
    return (
        <div className="flex flex-col lg:flex-row items-center m-auto lg:px-10 py-10 gap-20">
            {UserDetails.map((item, index) => (
                <div key={index} className="bg-reviewCardBg object-fill  rounded-md md:w-[50dvw] lg:w-[35dvw]   bg-no-repeat m-auto px-3 lg:px-5 py-10 relative">
                    <div className="flex flex-col md:flex-row lg:flex-row items-center gap-5">
                        <Image src={item.profile} alt="profile pic" width={70} height={70} className=" rounded-full w-[70px] h-[70px] object-cover" />
                        <h3 className="text-blue text-center lg:text-left text-3xl font-semibold">{item.name}</h3>

                    </div>
                    <p className="my-5 text-center lg:text-left  text-balance font-thin">{item.comment}</p>
                    <div className="flex items-center gap-5 flex-col-reverse lg:flex-row justify-between mt-3 ">
                        <Image src="/quote.svg" alt="quote" width={60} height={50} className="object-fill" />
                        <div className="flex items-center gap-">
                            <Image src="/line.svg" alt="line" width={30} height={30} className="object-fill" />
                            <h3 className="text-lg text-blue mx-5 text-center lg:text-left">{item.role}</h3>
                            <Image src="/line.svg" alt="line" width={30} height={30} className="object-fill" />
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default ReviewCard
