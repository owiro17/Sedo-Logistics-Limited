import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="font-openSans pb-20">
      <section className="flex flex-row p-12 bg-[url('/RoadHeroBgImage.png')] h-[67vh] justify-stretch items-center space-x-16">
        <div className="flex flex-col w-1/2 text-lg space-y-8">
          <h1 className="font-extrabold leading-tight text-[3.5rem] font-raleway">
            <span className="text-primary">Reliable</span> Road Freight <br />
            <span className="text-primary">Solutions</span> for your <br />
            business
          </h1>
          <p>
            Sedo Logistics offers dependable road freight services tailored to
            meet your domestic and regional shipping needs. Our comprehensive
            network and expert team ensure your cargo is delivered safely and on
            time, whether across the country or to neighboring regions.
          </p>
          <button className="bg-primary p-4 rounded-lg text-white w-fit">
            Get Quote
          </button>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <Image
            src={"/RoadHeroVector.svg"}
            alt={""}
            width={500}
            height={500}
            className="aspect-square absolute z-0"
          />
          <Image
            src={"/RoadHeroImage.png"}
            alt={""}
            width={400}
            height={400}
            className="aspect-auto absolute z-10"
          />
        </div>
      </section>
      <section className="h-screen flex flex-col justify-center space-y-6">
        <h1 className="font-extrabold leading-tight text-[3.5rem] font-raleway">
          Why <span className="text-primary">Sedo Logistics</span> Is Your
          <br />
          Ideal Partner
        </h1>
        <div className="flex flex-row">
          <div className="w-1/2 flex flex-col space-y-6">
            <p>Tailored Road Freight Solutions</p>
            <p>
              At Sedo Logistics, we understand that every shipment is unique. We
              customize our road freight services to fit your specific
              requirements, whether you’re moving goods across town or across
              borders.
            </p>
            <div className="flex flex-row items-start space-x-4 h-fit">
              <div className="flex flex-col w-[400px] items-start space-y-2 bg-[url('/RoadPointsBg.png')] bg-no-repeat h-full bg-cover rounded-lg border border-secondary p-8 pl-4 pb-12">
                <Image src={"FlexIcon.svg"} alt="icon" width={25} height={25} />
                <h3 className="text-secondary font-raleway font-bold text-xl">
                  Flexibility
                </h3>
                <p className="">
                  Efficient transportation with flexible scheduling to meet
                  tight deadlines.
                </p>
              </div>
              <div className="flex flex-col w-[400px] items-start space-y-2 bg-[url('/RoadPointsBg.png')] bg-no-repeat bg-cover h-full rounded-lg border border-secondary p-8 pl-4 pb-12">
                <Image
                  src={"GlobeIcon.svg"}
                  alt="icon"
                  width={25}
                  height={25}
                />
                <h3 className="text-secondary font-raleway font-bold text-xl">
                  Global Network
                </h3>
                <p className="">
                  Extensive network ensuring reliable deliveries across Kenya
                  and neighboring countries.
                </p>
              </div>
              <div className="flex flex-col w-[400px] items-start space-y-2 bg-[url('/RoadPointsBg.png')] bg-no-repeat h-full bg-cover rounded-lg border border-secondary p-8 pl-4 pb-12">
                <Image src={"TickIcon.svg"} alt="icon" width={25} height={25} />
                <h3 className="text-secondary font-raleway font-bold text-xl">
                  Cost-Effective
                </h3>
                <p className="">
                  Competitive pricing for all sizes of shipments, whether full
                  truckload (FTL) or less than truckload (LTL).
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full items-center justify-center">
            <Image
              src={"/QuestionIllustration.png"}
              alt="illustration"
              width={400}
              height={400}
              className="aspect-auto"
            />
          </div>
        </div>
      </section>
      <hr className="border-primary" />
    </div>
  );
};

export default page;
