/* eslint-disable react/no-unknown-property */
import React from 'react'
import Image from 'next/image'
const page = () => {
  const AboutCardData = [
    {logo:'./light-bulbLogo.svg',
    heading:'Our Mission',
    subHeading:'Excellence in Logistics',
    paragraph:'Our mission is to deliver unparalleled logistics solutions that exceed our customers expectations through innovation, reliability, and personalized service.'},
    {logo:'./worldLogo.svg',
    heading:'Our Vision',
    subHeading:'Global Leadership',
    paragraph:'We strive to be the leading logistics provider known for our commitment to quality, efficiency, and customer satisfaction. Our vision is to revolutionize the logistics industry with innovative solutions and exceptional service.'},
    {logo:'./contactIll.svg',
    heading:'Connect with Us',
    subHeading:'A click away',
    paragraph:'At Sedo Logistics, our goal is to build lasting relationships with our clients. Experience the difference of working with a logistics partner dedicated to your success. Contact us today to see how we can help streamline your logistics needs'},

  ]
  return (
    <div className='m-10'>
      {/* hero */}
      <section className=' h-[30dvh] lg:h-[50dvh] bg-aboutHeroBg'>
        <h1 className='heading text-center mt-28 '>Your  <span className='text-blue'>Trusted Partner</span>  in <br /> Global Logistics <br /> Since 2010</h1>
        <Image src='/trophyIcon.svg' alt='trophy icon' width={40} height={40} className='m-auto mt-5' ></Image>
      </section>
      {/* hero video s ection*/}
      <section>  
      <video src="/Sedo-About.mp4" className='mt-8'  webkit-playsinlin={1} playsinline={1}  autoPlay loop muted></video>
      </section>
      {/* /welcome section */}
      <section className='flex flex-col lg:flex-row items-center justify-center '>
        <div className='lg:w-[75%] md:w-[80%]'>
          <h1 className='heading mt-28'>Welcome to <span className='text-blue'>Sedo Logistics</span> </h1>
          <p className='paragraph mt-8'>Sedo logistics is one of the leading international freight forwarding, project logistics and relocation management companies delivering cost-effective solutions throughout Kenya and to many destinations world-wide. <br /></p> 
          <p className='paragraph mt-8'>Sedo Logistics develops comprehensive freight forwarding, project logistics and relocation service plans tailored to meet specific requirements of customers. This is accomplished by learning customer &apos; s exact objectives with regards to their internal and external requirements, thus ensuring that Sedo Logistics will provide quality services more consistently than any other service provider in the market. <br /> </p> 
          <p className='paragraoh mt-8'>Our tried and proven multimodal transportation routes worldwide ensure international reach whatever your cargo and timeframe is. As the preferred supplier for various notable companies and the first point of contact to increase supply chain efficiency in Kenya and worldwide, we are very proud of our reputation and always strive to maintain it.</p>
        </div>
        <div>
          <Image src='/aboutIll.svg' alt='about illustration' width={400} height={100} className='m-auto mt-6 relative top-14 ml-4' ></Image>
        </div>
      </section>
      <section>
        <div className='flex flex-col lg:flex-row  basis-9 justify-between gap-8 p-4 mt-28'>

              {AboutCardData.map((item,index)=>(
                  <div key={index } className='bg-about-cardBg flex flex-col p-6 rounded-sm border-secondary border w-full'>
                    <Image src={item.logo} width={40} height={30} className='mb-4'></Image>
                    <h2 className='small-heading'>{item.heading}</h2>
                    <p className='text-gray-600 font-raleway mb-2'>{item.subHeading}</p>
                    <p className=''>{item.paragraph}</p>
                  </div>
              ))}

        </div>
      </section>
    </div>
  )
}

export default page
