import React from "react";
import Image from "next/image";


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
const PartnerLogo =[
    {
      src:'/jswebLogo.svg',
      name:'jsweb',

    },
    {
      src:'/jswebLogo.svg',
      name:'jsweb',

    },
    {
      src:'/jswebLogo.svg',
      name:'jsweb',

    },
    {
      src:'/jswebLogo.svg',
      name:'jsweb',

    },
]
  return (
    <main className="">
 
        <div className="bg-hero-page  lg:w-auto m-auto h-[80dvh]   flex flex-col md:items-center items-start justify-center p-8  ">
          <h1 className="heading py-3 lg:text-[45px] lg:text-center md:text-center text-left ">Reliable <span className="text-blue">Logistics </span>Solutions <br></br> for Your <span className="text-blue">Business</span> </h1>
          <p className="paragraph font-raleway text-balance text-left md:text-center lg:text-center ">Welcome to , your trusted partner in logistics and supply chain management. We offer efficient, cost-effective solutions to meet your transportation needs..</p>
          <a href="/contact" className="btn-custom mt-6">Get Started</a>
        </div>
      {/* dashboard section */}
      <section className="flex flex-col lg:flex-row bg-triangleBg justify-evenly align-middle gap-[60px] p-[48px] rounded-lg">
        <div className="">
          <div className=" border-black">
          <Image className="rounded-lg shadow-lg" src="/dashboardPic.png" alt="dashboard sample"   width={1000} height={500} />
          </div>
        </div>
        <div className="flex flex-col  gap-10 items-start ">
          <h1 className="heading lg:text-4xl">Track <span className="text-blue">Shipping</span>  Expenses <br /> on Your Dashboard</h1>
          <p className="paragraph text-left">Use our tracking system to monitor the status of your shipments in real-time and monitor your shipping costs using our interactive and easy to use dashboard.</p>
          <a href="/dashboard" className="btn-custom ">Dashboard</a>
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

        <div className="bg-aboutBg bg-no-repeat w-full rounded-lg pb-5 px-8 lg:pt-[140px] lg:bottom-[190px] lg:relative   lg:z-0  flex flex-col items-center gap-16">
          <h1 className=" heading pt-8">Leading Logistics Company</h1>
          <div className="flex-col md:flex lg:flex-row lg:gap-12 ">
            {
              aboutData.map((item,index) =>(
              <div key={index} className="pb-8 w-[30dvw] lg:w-[15dvw]  flex flex-col items-center gap-2">
                <h2 className="font-openSans  text-blue text-4xl font-bold ">{item.number}+</h2>
                <hr className="w-[90%] border-zinc-500" />
                <p className="font-openSans">{item.text}</p>
              </div>
              ))
            }
          </div>
        </div>
        
      </section>
      {/* Partner section */}
      <section className="relative top-20 flex flex-col gap-20 items-center">
        <h1 className="heading text-center"> Our <span className="text-blue">Partner</span> </h1>
        <div className=" m-auto flex flex-row flex-wrap basis-3/6 gap-4 lg:gap-36">
          {
            PartnerLogo.map((item,index)=>(
              <div key={index} className="">
                <Image className="bg-black rounded-lg p-3" src={item.src}alt={item.name}  width={100} height={100} />
              </div>

            ))
          }
         

        </div>
        <hr className="border-zinc-600 w-full my-1"/>
      </section>
      {/* what clients say section */}
      <section className=" relative top-20">
        <h1 className="heading">Our <span className="text-blue">Clients</span>  Know <span className="text-blue">Best</span></h1>
        <div>
          <div>

          </div>
          <p></p>
          <div></div>
        </div>
      </section>
    </main>
  );
}
