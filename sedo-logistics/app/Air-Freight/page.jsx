import React from "react";
import Link from "next/link";
import Image from "next/image";
export const metadata = {
  title: "Air Freight Services - Sedo Logistics",
  description: "Fast and reliable air freight solutions by Sedo Logistics. We ensure your cargo reaches its destination quickly and safely, whether within Kenya or internationally.",
  keywords: ["Air Freight", "Logistics", "Shipping", "International Shipping", "Cargo Transportation","shipping in kenya"],
  author: "Sedo Logistics",
  openGraph: {
    title: "Air Freight Services - Sedo Logistics",
    description: "Fast and reliable air freight solutions by Sedo Logistics. We ensure your cargo reaches its destination quickly and safely, whether within Kenya or internationally.",
    url: "https://www.sedologistics.co.ke/Air-Freight",
    images: [
      {
        url: "/logo 3.png",
        width: 800,
        height: 600,
        alt: "Sedo Logistics Logo",
      },
    ],
  },
};

const page = () => {
  const documentData = [
    {
      heading: "Airway Bill(AWB)",
      description:
        "The contract between the shipper and the carrier detailing the terms and conditions of the shipment.",
    },
    {
      heading: "Commercial Invoice",
      description:
        "A document outlining the goods being shipped, their value, and the terms of sale.",
    },
    {
      heading: "Packing List",
      description:
        "A detailed list of the contents of the shipment, including weight, dimensions, and packaging type.",
    },
    {
      heading: "Certificate of Origin",
      description:
        "A document certifying the country in which the goods were manufactured.",
    },
    {
      heading: "Shipper’s Letter of Instruction",
      description:
        "A document outlining the goods being shipped, their value, and the terms of sale.",
    },
  ];
   return (
    <div>
      {/* hero section */}
      <section className="bg-airFreightBg bg-cover flex flex-col m-auto items-center justify-evenly gap-24 p-8 lg:flex-row lg:justify-evenly">
        <div className="mt-10 flex z-0 flex-col bottom-10 relative lg:block lg:w-2/4 ">
          <h1 className="heading text-center lg:text-left">
            {" "}
            <span className="text-blue z-0">Fast</span> Reliable{" "}
            <span className="text-blue">
              {" "}
              <br />
              Air Freight
            </span>{" "}
            Services{" "}
          </h1>
          <p className="paragraph my-4 text-center lg:text-left text-wrap  ">
            Experience the speed and reliability of air freight services with
            Sedo Logistics. Our air freight solutions ensure your cargo reaches
            its destination quickly and safely, whether you&apos;re shipping
            within Kenya or to international destinations.
          </p>
          <Link className="btn-custom w-auto m-auto" href="/Contact">
            Get Quote
          </Link>
        </div>
        <div className="relative m-10 hidden lg:flex items-center justify-center p-8 w-full lg:w-2/4 ">
          <Image
            src={"/blob.svg"}
            alt={""}
            width={400}
            height={400}
            className="aspect-square absolute z-0"
          />
          <Image
            src={"/planePicture.png"}
            alt={""}
            width={280}
            height={350}
            className=" aspect-square absolute z-10"
          />
        </div>
      </section>
      {/* Why choose us  */}
      <section className="mt-28 p-8">
        <h1 className="heading text-center lg:text-left">
          Why Choose <span className="text-blue">Sedo Logistics</span>
          <br /> for Air Freight?
        </h1>
        <h4 className="font-manrope  text-center  my-2 lg:text-left text-gray-500">
          Comprehensive Air Freight Solutions
        </h4>

        <div className="flex flex-col item-center gap-8 lg:flex-row">
          <div className="lg:w-[60%]">
            <p className="paragraph text-center text-wrap lg:text-left">
              At Sedo Logistics, we offer tailored air freight services to meet
              your specific shipping needs. Our global network and expertise
              ensure efficient, cost-effective transportation solutions for your
              cargo.
            </p>
            <div className="flex flex-col  lg:flex-row  gap-4 items-center justify-center mt-4">
              <div className="flex bg-freightCardBg bg-cover flex-col items-center lg:items-start border border-secondary rounded-lg p-4 w-[60dvw] lg:h-[40dvh] gap-2">
                <Image
                  src={"/speed.svg"}
                  alt={""}
                  width={30}
                  height={40}
                  className=" "
                />
                <h4 className="font-raleway text-secondary font-bold text-xl">
                  Speed
                </h4>
                <p className="paragraph text-wrap text-center lg:text-left">
                  Experience Fast transit times for urgent shipments.
                </p>
              </div>
              <div className="flex flex-col bg-freightCardBg bg-cover items-center lg:items-start border border-secondary rounded-lg p-4 w-[60dvw] lg:w-[55dvw] lg:h-[40dvh] gap-2">
                <Image
                  src={"/globe.svg"}
                  alt={""}
                  width={30}
                  height={40}
                  className=" "
                />
                <h4 className="font-raleway text-secondary font-bold text-xl">
                  Global Reach
                </h4>
                <p className="paragraph text-center lg:text-left text-wrap">
                  Extensive network to handle shipments to and from any location
                  worldwide.
                </p>
              </div>
              <div className="flex flex-col bg-freightCardBg bg-cover h-full items-center lg:items-start border border-secondary rounded-lg p-4 w-[60dvw] lg:h-[40dvh] gap-2">
                <Image
                  src={"/check.svg"}
                  alt={""}
                  width={30}
                  height={40}
                  className=" "
                />
                <h4 className="font-raleway text-secondary font-bold text-xl">
                  Reliability
                </h4>
                <p className="paragraph text-wrap text-center lg:text-left">
                  Consistent, on-time delivery you can count on..
                </p>
              </div>
            </div>
          </div>
          <Image
            src={"/airIll.svg"}
            alt={""}
            width={300}
            height={300}
            className="lg:w-[35%] relative m-auto lg:bottom-4 "
          />
        </div>
      </section>

      {/* document section  */}
      <section className="mt-28 p-8">
        <h1 className="heading text-center lg:text-left">
          Understanding Air Freight <br />{" "}
          <span className="text-blue">Documentation</span>{" "}
        </h1>
        <div className="bg-[#9ec5d4] flex flex-col flex-wrap items-center justify-center gap-8 lg:flex-row bg-opacity-10 mt-8 p-8">
          {documentData.map((item, index) => (
            <>
              <div key={index} className="flex flex-col  lg:w-[30%] gap-3">
                <h3 className="font-raleway font-bold text-center text-secondary bg-[#C8E9F9] p-2">
                  {item.heading}
                </h3>
                <p className="paragraph text-wrap bg-white  break-words  text-center text-secondary p-2">
                  {item.description}
                </p>
              </div>
            </>
          ))}
        </div>
      </section>
      {/* shipping process */}
      <section className="mt-28 p-8">
        <h1 className="heading text-center lg:text-left">
          <span className="text-blue">Step-by-Step</span> Air Freight <br /> Shipping
        </h1>
        <div className="mt-8 flex flex-col items-center justify-evenly lg:flex-row flex-wrap gap-8">
          {/* row 1 */}
          <div className="flex flex-col lg:flex-row gap-9 ">

            <div className="rounded-full flex flex-col gap-2 items-center justify-center bg-[#C8E9F9] m-auto w-[169px] h-[169px] p-2">
              <h3 className="font-raleway font-bold text-xl text-secondary">
                Step 1.
              </h3>
              <p>Request a Quote</p>
              <Image
                src={"/hand.svg"}
                alt={""}
                width={30}
                height={40}
                className=" "
              />
            </div>
            <Image
              src={"/dots.svg"}
              alt={""}
              width={60}
              height={40}
              className="rotate-90 lg:rotate-0 m-auto h-full"
            />
            <div className="rounded-full flex flex-col gap-2 items-center justify-center bg-[#C8E9F9] m-auto w-[169px] h-[169px] p-2">
              <h3 className="font-raleway font-bold text-xl text-secondary">
                Step 2.
              </h3>
              <p>Book Shipment</p>
              <Image
                src={"/bookmark.svg"}
                alt={""}
                width={30}
                height={40}
                className=" "
              />
            </div>
            <Image
              src={"/dots.svg"}
              alt={""}
              width={60}
              height={40}
              className="rotate-90 lg:rotate-0 m-auto"
            />
            <div className="rounded-full flex flex-col gap-2 items-center justify-center bg-[#C8E9F9] m-auto w-[169px] h-[169px] p-2">
              <h3 className="font-raleway font-bold text-xl text-secondary">
                Step 3.
              </h3>
              <p>Cargo Pickup</p>
              <Image
                src={"/truck.svg"}
                alt={""}
                width={30}
                height={40}
                className=" "
              />
            </div>
          </div>

          <Image
            src={"/dots.svg"}
            alt={""}
            width={60}
            height={40}
            className="rotate-90 lg:absolute lg:hidden lg:rotate-0 m-auto"
          />
          {/* row 2  */}
          <div className="flex flex-col lg:flex-row lg:mt-10 gap-9">
          <div className="rounded-full flex flex-col gap-2 items-center justify-center bg-[#C8E9F9] m-auto w-[169px] h-[169px] p-2">
            <h3 className="font-raleway font-bold text-xl text-secondary">
              Step 4.
            </h3>
            <p>Air Transport</p>
            <Image
              src={"/plane.svg"}
              alt={""}
              width={30}
              height={40}
              className=" "
            />
          </div>
          <Image
            src={"/dots.svg"}
            alt={""}
            width={60}
            height={40}
            className="rotate-90 lg:rotate-0 m-auto"
          />
          <div className="rounded-full flex flex-col gap-2 items-center justify-center bg-[#C8E9F9] m-auto w-[169px] h-[169px] p-2">
            <h3 className="font-raleway font-bold text-xl text-secondary">
              Step 5.
            </h3>
            <p>Delivery</p>
            <Image
              src={"/trolly.svg"}
              alt={""}
              width={30}
              height={40}
              className=" "
            />
          </div>
          <Image
            src={"/dots.svg"}
            alt={""}
            width={60}
            height={40}
            className="rotate-90 lg:rotate-0 m-auto"
          />
          <div className="rounded-full flex flex-col gap-2 items-center justify-center bg-[#C8E9F9] m-auto w-[169px] h-[169px] p-2">
            <h3 className="font-raleway font-bold text-xl text-secondary">
              Step 6.
            </h3>
            <p>Get Invoice</p>
            <Image
              src={"/invoice.svg"}
              alt={""}
              width={23}
              height={40}
              className=" "
            />
          </div>
            
          </div>

        </div>
      </section>
    </div>
  );
};

export default page;
/* Group 27 */
