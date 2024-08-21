import React from "react";
import Link from "next/link";
import Image from "next/image";
const page = () => {
  const documentData = [
    {
      heading: "Bill of Lading (BOL)",
      description:
        "A legal document between the shipper and carrier detailing the type, quantity, and destination of the goods being shipped.",
    },
    {
      heading: "Consignment Note",
      description:
        "A document that accompanies goods in transit, detailing the contents, origin, and destination.",
    },
    {
      heading: "Packing List",
      description:
        "A detailed list of the contents of the shipment, including weight, dimensions, and packaging type.",
    },
    {
      heading: "Commercial Invoice",
      description:
        "An invoice provided by the shipper to the receiver, outlining the value and details of the goods being transported.",
    },
    {
      heading: "Customs Documents",
      description:
        "Required for cross-border shipments, these documents ensure compliance with international shipping regulations.",
    },
  ];
  return (
    <div>
      {/* hero section */}
      <section className="bg-airFreightBg bg-cover flex flex-col m-auto items-center justify-evenly gap-24 p-8 lg:flex-row lg:justify-evenly">
        <div className="mt-10 flex flex-col bottom-10 relative lg:block lg:w-2/4 ">
          <h1 className="heading text-center lg:text-left">     
          <span className="text-blue">Reliable</span> Road Freight <span className="text-blue">Solutions</span> for your business
          </h1>
          <p className="paragraph my-4 text-center lg:text-left text-wrap  ">
          Sedo Logistics offers dependable road freight services tailored to meet your domestic and regional shipping needs. Our comprehensive network and expert team ensure your cargo is delivered safely and on time, whether across the country or to neighboring regions.
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
            src={"/truckPhoto.jpg"}
            alt={""}
            width={280}
            height={350}
            objectFit="cover"
            className=" aspect-square  absolute z-10 shadow-sm rounded-sm"
          />
        </div>
      </section>
      {/* Why choose us  */}
      <section className="mt-28 p-8">
        <h1 className="heading text-center lg:text-left">
        Why <span className="text-blue">Sedo Logistics</span>  Is Your Ideal Partner 
        </h1>
        <h4 className="font-manrope  text-center  my-2 lg:text-left text-gray-500">
        Tailored Road Freight Solutions
        </h4>

        <div className="flex flex-col item-center gap-8 lg:flex-row">
          <div className="lg:w-[60%]">
            <p className="paragraph text-center text-wrap lg:text-left">
            At Sedo Logistics, we understand that every shipment is unique. We customize our road freight services to fit your specific requirements, whether you’re moving goods across town or across borders.
            </p>
            <div className="flex flex-col  lg:flex-row  gap-4 items-center justify-center mt-4">
              <div className="flex bg-freightCardBg bg-cover flex-col items-center lg:items-start border border-secondary rounded-lg p-4 w-[65dvw] lg:h-[45dvh] gap-2">
                <Image
                  src={"/speed.svg"}
                  alt={""}
                  width={30}
                  height={40}
                  className=" "
                />
                <h4 className="font-raleway text-secondary font-bold text-xl">
                Flexibility
                </h4>
                <p className="paragraph text-wrap text-center lg:text-left">
                Efficient transportation with flexible scheduling to meet tight deadlines.
                </p>
              </div>
              <div className="flex flex-col bg-freightCardBg bg-cover items-center lg:items-start border border-secondary rounded-lg p-4 w-[65dvw] lg:w-[65dvw] lg:h-[45dvh] gap-2">
                <Image
                  src={"/globe.svg"}
                  alt={""}
                  width={30}
                  height={40}
                  className=" "
                />
                <h4 className="font-raleway text-secondary font-bold text-xl">
                  Global Network
                </h4>
                <p className="paragraph text-center lg:text-left text-wrap ">
                Extensive network ensuring reliable deliveries across Kenya and neighboring countries.
                </p>
              </div>
              <div className="flex flex-col bg-freightCardBg bg-cover h-full items-center lg:items-start border border-secondary rounded-lg p-4 w-[65dvw] lg:h-[45dvh] gap-2">
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
                Competitive pricing for all sizes of shipments, whether full truckload (FTL) or less than truckload (LTL).
                </p>
              </div>
            </div>
          </div>
          <Image
            src={"/roadIll.svg"}
            alt={""}
            width={300}
            height={300}
            className="lg:w-[35%] relative m-auto lg:top-4 "
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
          <span className="text-blue">Step-by-Step</span> Sea Freight <br /> Shipping
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
            <p>Road Transport</p>
            <Image
                src={"/truck.svg"}
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
