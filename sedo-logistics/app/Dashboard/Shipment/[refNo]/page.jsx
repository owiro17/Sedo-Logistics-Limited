"use client";
import React from "react";
import PropTypes from "prop-types";
import SideNavbar from "../../../components/SideNavbar";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }) {
  const { refNo, slug } = params;
  const shipmentStatus = [
    { status: "Documentation" },
    { status: "Customs Clearance" },
    { status: "Delivery" },
    { status: "Delivered" },
  ];

  return (
    <div className="flex align-top relative top-10 gap-8">
      <SideNavbar />
      <div className="bg-white flex flex-col p-4 rounded-lg  border border-black shadow-md w-full self-start items-start">
        <Link
          href={"/Dashboard"}
          className="text-decoration inline-flex items-center"
        >
          <Image
            className="p-2"
            src="/backIcon.svg"
            alt="back icon"
            width={50}
            height={50}
          />
          <p className="font-bold ml-2">See All</p>
        </Link>
        {/* consingee heading */}
        <h1 className="text-xl text-secondary font-bold inline-block">
          <Image
            className="p-2 inline-block"
            src="/documentIcon-1.svg"
            alt="back icon"
            width={50}
            height={50}
          />
          Consingee Information
        </h1>
        {/* ----------consingee information----------------  */}
        <div className="flex relative p-2  gap-5">
          <div className="flex flex-col gap-3">
            <p className="font-normal text-gray-600">
              <b className=" text-black font-extrabold">First Name:</b> Shawn
            </p>
            <p className="font-normal text-gray-600">
              <b className="text-black font-extrabold">Email:</b>{" "}
              Shawnowiro@gmail.com{" "}
            </p>
            <p className="font-normal text-gray-600">
              <b className="text-black font-extrabold">Address:</b> Nyayo
              Estate, Nairobi, Kenya{" "}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-normal text-gray-600">
              <b className="text-black font-extrabold">Last Name:</b> Owiro{" "}
            </p>
            <p className="font-normal text-gray-600">
              <b className="text-black font-extrabold">Phone:</b> +254 792 649
              085{" "}
            </p>
            <p className="font-normal text-gray-600">
              <b className="text-black font-extrabold">Date:</b>{" "}
              {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
        <hr className="w-full border-t-2 border-gray-300 my-4" />
        {/* ----shipment heading---- */}
        <h1 className="text-xl text-secondary font-bold inline-block">
          <Image
            className="p-2 inline-block"
            src="/pinIcon.svg"
            alt="back icon"
            width={50}
            height={50}
          />
          Shipment Information
        </h1>
        {/* ----shipment information---- */}
        <div className="flex relative p-2  gap-5">
          <div className="flex flex-col gap-3">
            <p className="font-normal text-gray-600">
              <b className="text-black font-extrabold">Shipment Ref:</b> {refNo}
            </p>
            <p className="font-normal text-gray-600">
              <b className="text-black font-extrabold">Current Location:</b>{" "}
              Ethiopia
            </p>
            <p className="font-normal text-gray-600">
              <b className="text-black font-extrabold">
                Estimated Delivery Date:
              </b>{" "}
              30/5/2024
            </p>
            <p className="font-normal text-gray-600">
              <b className="text-black font-extrabold">Mode of Transport:</b>{" "}
              Air
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-normal text-gray-600">
              <b className="text-black font-extrabold">AWB/BOL:</b> 234-684-443{" "}
            </p>
            <p className="font-normal text-gray-600">
              <b className="text-black font-extrabold">Destination:</b> Kenya
            </p>
            <p className="font-normal text-gray-600">
              <b className="text-black font-extrabold">Shipment Status:</b>
              Documenataion
            </p>
          </div>
        </div>
        <hr className="w-full border-t-2 border-gray-300 my-4" />
        <section className="flex gap-16">
          {/* shipment graph section  */}
          <div className="w-[50%]">
            <h1 className="text-xl text-secondary font-bold inline-block">

              Your shipment is here
            </h1>

            {shipmentStatus.map((status, index) => (
              <div key={index} className="">
                <div className="flex align-middle items-center gap-1">
                  <Image
                    className="p-2 inline-block"
                    src="/solidCheckIcon.svg"
                    alt="solidCheckIcon"
                    width={50}
                    height={50}
                  />
                  <Image
                    className="p-2 inline-block"
                    src="/doubleLineIcon.svg"
                    alt="doubleLineIcon"
                    width={50}
                    height={50}
                  />
                  {status.status}
                </div>
                {index !== shipmentStatus.length - 1 && (
                  <Image
                    className="pl-2 relative left-3 inline-block"
                    src="/lineDownIcon.svg"
                    alt="downLineIcon"
                    width={18}
                    height={18}
                  />
                )}
              </div>
            ))}
          </div>
          {/* good description section  */}
          <div className="flex w-[58%] flex-col">
          <h1 className="text-xl text-secondary font-bold inline-block">
              <Image
                className="p-2 inline-block"
                src="/boxIcon.svg"
                alt="back icon"
                width={50}
                height={50}
              />
              Goods Information
            </h1>
            <div className="flex pl-2 left-3 flex-col gap-3">
            <p className="font-normal text-gray-600">
              <b className="text-black font-extrabold text-nowrap">Description of Goods:</b> White towels 
            </p>
            <p className="font-normal text-gray-600">
              <b className="text-black font-extrabold">Quantity::</b> 20
            </p>
            <p className="font-normal text-gray-600">
              <b className="text-black font-extrabold">Unit:</b>
              Pc
            </p>
            <p className="font-normal text-gray-600">
              <b className="text-black font-extrabold">Dimension:</b>
              50cm x 60cm
            </p>
          </div>

          </div>
        </section>
        {/* ------shipment status ------ */}
      </div>
    </div>
  );
}

Page.propTypes = {
  params: PropTypes.shape({
    refNo: PropTypes.string.isRequired,
    slug: PropTypes.string,
  }).isRequired,
};
