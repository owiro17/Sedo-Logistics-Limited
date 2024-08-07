import React from "react";
import Image from "next/image";
import ReviewCard from "./components/ReviewCard";

export default function Home() {
  const ServiceCard = [
  {
    icon: "/planeIcon.svg",
    name: "Air Freight",
    link: "/Air-freight"
  },
  {
    icon: "/seaIcon.svg",
    name: "Sea Freight",
    link:"/Sea-freight"
  },
  {
    icon: "/roadIcon.svg",
    name: "Road Freight",
    link:"/Road-freight"
  }
  ]
  const aboutData = [
    {
      number : 30,
      text:"Trusted Clients"
    },
    {
      number:30,
      text:"Years of Experience"
      
    },
    {
      number:500,
      text:"Completed Shipments"
    }
]
// const PartnerLogo =[
//     {
//       src:'/jswebLogo.svg',
//       name:'jsweb',

//     },
//     {
//       src:'/jswebLogo.svg',
//       name:'jsweb',

//     },
//     {
//       src:'/jswebLogo.svg',
//       name:'jsweb',

//     },
//     {
//       src:'/jswebLogo.svg',
//       name:'jsweb',

//     },
// ]
  return (
    <main className="">
        <div className="bg-hero-page  lg:w-auto m-auto  py-20  flex flex-col md:items-center gap-2 justify-center p-8  ">
          <h1 className="heading  mt-10 lg:text-[45px] text-center ">Reliable <span className="text-blue">Logistics </span>Solutions <br></br> for Your <span className="text-blue">Business</span> </h1>
          <p className="paragraph  text-center md:text-center lg:text-center ">Welcome to , your trusted partner in logistics and supply chain management. We offer efficient, cost-effective solutions to meet your transportation needs..</p>
          <a href="/contact" className="btn-custom m-auto mt-6">Get Started</a>
        </div>
      {/* dashboard section */}
      <section className="flex flex-col lg:flex-row bg-triangleBg justify-evenly align-middle gap-[60px] p-[48px] py-20 rounded-lg">
        <div className="">
          <div className=" border-black">
          <Image className="rounded-lg shadow-lg" src="/dashboardPic.png" alt="dashboard sample"   width={1000} height={500} />
          </div>
        </div>
        <div className="flex flex-col  gap-10 items-start ">
          <h1 className="heading text-center lg:text-left  lg:text-4xl">Track <span className="text-blue">Shipping</span>  Expenses <br /> on Your Dashboard</h1>
          <p className="paragraph text-center lg:text-left">Use our tracking system to monitor the status of your shipments in real-time and monitor your shipping costs using our interactive and easy to use dashboard.</p>
          <a href="/dashboard" className="btn-custom m-auto ">Dashboard</a>
        </div>
      </section>

      
      {/* about section */}
      <section className=" flex relative flex-col items-center lg:top-40 gap-8 ">

        <div className="pb-[48px] flex flex-col lg:z-10  relative top-10 lg:top-0 lg:flex-row gap-8 lg:gap-16">
          {ServiceCard.map((card,index) => (
            <div key={index} className="bg-cardBg bg-no-repeat py-[23px] px-[20px] rounded-lg shadow-lg  flex flex-col items-start justify-center gap-4 w-[100%] lg:w-[25%]">
              <Image src={card.icon} alt={card.name}  width={40} height={40} />
              <h2 className="small-heading">{card.name}  </h2>
              <a className="paragraph flex items-center justify-center gap-1" href={card.link}>see more<Image src="/arrowRight.svg" alt="see-more"  width={20} height={20} /></a>
            </div>
          ))}

        </div>

        <div className="bg-aboutBg bg-no-repeat w-full rounded-lg  px-8 py-10  lg:pt-[140px] lg:bottom-[190px] lg:relative   lg:z-0  flex flex-col items-center ">
          <h1 className="  heading text-center lg:mt-10 ">Leading Logistics Company</h1>
          <div className="lg:flex gap-6">
            {
              aboutData.map((item,index) =>(
              <div key={index} className="w-[50dvw] my-5 lg:w-[15dvw] flex flex-col items-center gap-2">
                <h2 className="font-openSans  text-blue text-4xl font-bold ">{item.number}+</h2>
                <hr className="w-[90%] border-zinc-500" />
                <p className="font-openSans">{item.text}</p>
              </div>
              ))
            }

          </div >

        </div>
        
      </section>
      {/* Partner section */}
      {/* <section className="relative top-20 flex flex-col gap-20 items-center px-20">
        <h1 className="heading text-center"> Our <span className="text-blue">Partner</span> </h1>
        <div className=" m-auto flex flex-col  lg:flex-row flex-wrap basis-3/6 gap-4 lg:gap-36">
          {
            PartnerLogo.map((item,index)=>(
              <div key={index} className="">
                <Image className="bg-black rounded-lg p-3" src={item.src}alt={item.name}  width={100} height={100} />
              </div>

            ))
          }
         

        </div>
        <hr className="border-zinc-600 w-full my-1"/>
      </section> */}
      {/* what clients say section */}

      <section className=" relative top-20   flex flex-col items-center ">
        <h1 className="heading text-center mt-[100px] ">Our <span className="text-blue">Clients</span>  Know <span className="text-blue">Best</span></h1>
        <div className="flex flex-col lg:flex-row items-center justify-evenly m-auto px-5 py-10 lg:px-0 gap-10">
          <ReviewCard></ReviewCard>
        </div>
      </section>

      {/* contact us section */}
      <section className="">
          <h1 className="heading text-center mt-[100px]"><span className="text-blue">Contact </span> us</h1>
          <div className="flex flex-col lg:flex-row lg:items-baseline mt-20  items-center m-auto basis-1/2">
          <Image className=" m-auto lg:px-0 px-10" src="/contact-ill.svg" alt="contact ill"  width={400} height={400} />
          <form className="flex flex-col gap-4 p-10 m-auto mt-10 lg-mt-0    rounded-lg shadow-lg">
            <h2 className="text-xl font-raleway font-semibold text-center text-gray-800">Get in Touch</h2>
              <input type="text" id="firstName" name="firstName" placeholder="First Name" className="text-black bg-[#C8E9F9] h-10 px-5 pr-16 rounded-lg text-sm focus:outline-1" required />
              <input type="text" id="lastName" name="lastName" placeholder="Last Name" className="text-black bg-[#C8E9F9] h-10 px-5 pr-16 rounded-lg text-sm focus:outline-1" required />
              <input type="email" id="email" name="email"placeholder="Email"  className="text-black bg-[#C8E9F9] h-10 px-5 pr-16 rounded-lg text-sm focus:outline-1" required />
              <textarea id="shipmentDetails" name="shipmentDetails" placeholder="Shipment Details"  rows="3" className="text-black bg-[#C8E9F9] h-32 px-5 pr-16 rounded-lg text-sm focus:outline-1" required></textarea>
            
            <button type="submit" className="btn-custom">Submit</button>
          </form>
          </div>
      </section>

    </main>
  );
}
