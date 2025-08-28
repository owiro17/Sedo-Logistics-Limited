import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "IOR Services - Sedo Logistics",
  description:
    "Importer of Record (IOR) solutions by Sedo Logistics. We handle customs clearance, tax compliance, and legal import responsibilities on your behalf.",
  keywords: [
    "IOR",
    "Importer of Record",
    "Logistics",
    "Customs Clearance",
    "International Shipping",
    "Kenya Import Services"
  ],
  author: "Sedo Logistics",
  openGraph: {
    title: "IOR Services - Sedo Logistics",
    description:
      "Importer of Record (IOR) solutions by Sedo Logistics. We handle customs clearance, tax compliance, and legal import responsibilities on your behalf.",
    url: "https://www.sedologistics.co.ke/IOR",
    images: [
      {
        url: "/logo 3.png",
        width: 800,
        height: 600,
        alt: "Sedo Logistics Logo"
      }
    ]
  }
};

const page = () => {
  const documentData = [
    {
      heading: "Import Declaration Form (IDF)",
      description:
        "A mandatory document registered with the Kenya Revenue Authority to begin the import process."
    },
    {
      heading: "Certificate of Conformity (CoC)",
      description:
        "Ensures the goods meet Kenya Bureau of Standards (KEBS) requirements before entry."
    },
    {
      heading: "Commercial Invoice",
      description:
        "Breakdown of the goods’ value, currency, and transaction terms."
    },
    {
      heading: "Packing List",
      description:
        "Details the contents of the shipment including weight, quantity, and packaging information."
    },
    {
      heading: "KRA PIN Certificate",
      description:
        "Proof of the importer’s registration with the Kenya Revenue Authority."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-airFreightBg bg-cover flex flex-col m-auto items-center justify-evenly gap-24 p-8 lg:flex-row lg:justify-evenly">
        <div className="mt-10 flex flex-col bottom-10 relative lg:block lg:w-2/4 ">
          <h1 className="heading text-center lg:text-left">
            <span className="text-blue">Reliable</span> Importer of Record <span className="text-blue">Services</span>
          </h1>
          <p className="paragraph my-4 text-center lg:text-left text-wrap">
            Sedo Logistics offers trusted Importer of Record (IOR) services in Kenya. We handle all customs clearance, documentation, and tax compliance—so you can focus on business while we manage the paperwork.
          </p>
          <Link className="btn-custom w-auto m-auto" href="/Contact">
            Get IOR Support
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
            src={"/IORIll.svg"}
            alt={"Customs Illustration"}
            width={280}
            height={350}
            className="aspect-square absolute z-10 shadow-sm rounded-sm"
          />
        </div>
      </section>

      {/* Why Choose Sedo Logistics for IOR */}
      <section className="mt-28 p-8">
        <h1 className="heading text-center lg:text-left">
          Why <span className="text-blue">Sedo Logistics</span> is Your Trusted IOR Partner
        </h1>
        <h4 className="font-manrope text-center my-2 lg:text-left text-gray-500">
          Seamless Importation Process
        </h4>

        <div className="flex flex-col item-center gap-8 lg:flex-row">
          <div className="lg:w-[60%]">
            <p className="paragraph text-center text-wrap lg:text-left">
              With our in-depth knowledge of Kenyan customs regulations, we ensure smooth importation of your goods. Our IOR services are tailored for corporates, resellers, and manufacturers importing to Kenya.
            </p>
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-center mt-4">
              <div className="flex flex-col items-center lg:items-start border border-secondary bg-freightCardBg bg-cover rounded-lg p-4 w-[65dvw] lg:h-[55dvh] gap-2">
                <Image src={"/globe.svg"} alt={""} width={30} height={40} />
                <h4 className="font-raleway text-secondary font-bold text-xl">Full Compliance</h4>
                <p className="paragraph text-wrap text-center lg:text-left">
                  We ensure compliance with all Kenyan import regulations and tax requirements.
                </p>
              </div>
              <div className="flex flex-col items-center lg:items-start border border-secondary bg-freightCardBg bg-cover rounded-lg p-4 w-[65dvw] lg:w-[65dvw] lg:h-[55dvh] gap-2">
                <Image src={"/check.svg"} alt={""} width={30} height={40} />
                <h4 className="font-raleway text-secondary font-bold text-xl">Dedicated Support</h4>
                <p className="paragraph text-wrap text-center lg:text-left">
                  Our team guides you through every step—from documentation to clearance.
                </p>
              </div>
              <div className="flex flex-col items-center lg:items-start border border-secondary bg-freightCardBg bg-cover rounded-lg p-4 w-[65dvw] lg:h-[55dvh] gap-2">
                <Image src={"/speed.svg"} alt={""} width={30} height={40} />
                <h4 className="font-raleway text-secondary font-bold text-xl">Quick Turnaround</h4>
                <p className="paragraph text-wrap text-center lg:text-left">
                  Efficient processing so your goods are released and delivered without delay.
                </p>
              </div>
            </div>
          </div>
          <Image
            src={"/seaFreightIll.svg"}
            alt={""}
            width={300}
            height={300}
            className="lg:w-[35%] relative m-auto lg:top-4"
          />
        </div>
      </section>

      {/* Document Section */}
      <section className="mt-28 p-8">
        <h1 className="heading text-center lg:text-left">
          IOR <span className="text-blue">Documentation</span> Requirements
        </h1>
        <div className="bg-[#9ec5d4] flex flex-col flex-wrap items-center justify-center gap-8 lg:flex-row bg-opacity-10 mt-8 p-8">
          {documentData.map((item, index) => (
            <div key={index} className="flex flex-col lg:w-[30%] gap-3">
              <h3 className="font-raleway font-bold text-center text-secondary bg-[#C8E9F9] p-2">
                {item.heading}
              </h3>
              <p className="paragraph text-wrap bg-white break-words text-center text-secondary p-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* IOR Process */}
      <section className="mt-28 p-8">
        <h1 className="heading text-center lg:text-left">
          <span className="text-blue">How Our IOR</span> Process Works
        </h1>
        <div className="mt-8 flex flex-col items-center justify-evenly lg:flex-row flex-wrap gap-8">
          <div className="flex flex-col lg:flex-row gap-9 ">
            <div className="rounded-full flex flex-col gap-2 items-center justify-center bg-[#C8E9F9] m-auto w-[169px] h-[169px] p-2">
              <h3 className="font-raleway font-bold text-xl text-secondary">Step 1.</h3>
              <p>Submit Inquiry</p>
              <Image src={"/hand.svg"} alt={""} width={30} height={40} />
            </div>
            <Image src={"/dots.svg"} alt={""} width={60} height={40} className="rotate-90 lg:rotate-0 m-auto h-full" />
            <div className="rounded-full flex flex-col gap-2 items-center justify-center bg-[#C8E9F9] m-auto w-[169px] h-[169px] p-2">
              <h3 className="font-raleway font-bold text-xl text-secondary">Step 2.</h3>
              <p>Share Documents</p>
              <Image src={"/docUpload.svg"} alt={""} width={30} height={40} />
            </div>
            <Image src={"/dots.svg"} alt={""} width={60} height={40} className="rotate-90 lg:rotate-0 m-auto" />
            <div className="rounded-full flex flex-col gap-2 items-center justify-center bg-[#C8E9F9] m-auto w-[169px] h-[169px] p-2">
              <h3 className="font-raleway font-bold text-xl text-secondary">Step 3.</h3>
              <p>We Clear Goods</p>
              <Image src={"/customsClear.svg"} alt={""} width={30} height={40} />
            </div>
          </div>

          <Image src={"/dots.svg"} alt={""} width={60} height={40} className="rotate-90 lg:absolute lg:hidden lg:rotate-0 m-auto" />

          <div className="flex flex-col lg:flex-row lg:mt-10 gap-9">
            <div className="rounded-full flex flex-col gap-2 items-center justify-center bg-[#C8E9F9] m-auto w-[169px] h-[169px] p-2">
              <h3 className="font-raleway font-bold text-xl text-secondary">Step 4.</h3>
              <p>Delivery</p>
              <Image src={"/delivery.svg"} alt={""} width={30} height={40} />
            </div>
            <Image src={"/dots.svg"} alt={""} width={60} height={40} className="rotate-90 lg:rotate-0 m-auto" />
            <div className="rounded-full flex flex-col gap-2 items-center justify-center bg-[#C8E9F9] m-auto w-[169px] h-[169px] p-2">
              <h3 className="font-raleway font-bold text-xl text-secondary">Step 5.</h3>
              <p>Invoice & Support</p>
              <Image src={"/invoice.svg"} alt={""} width={23} height={40} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;