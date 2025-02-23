"use client";
import { useState } from "react";
import * as React from "react";
import { useEdgeStore } from "../../../libs/edgestore";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
// import { MultiFileDropzone } from "../../components/MultiFileDropZone";
import { MultiFileDropzone } from "../../components/MultiFileDropZone";
export default function Page() {
  const [file, setFile] = useState();
  const { edgestore } = useEdgeStore();
  const [userData, setUser] = useState(null); // To store user data
  const user = useUser();
  useEffect(() => {
    setUser(user.user);
  }, []);

  return (
    <>
      <main className="w-full p-8 top-0 bg-white border border-black rounded-lg shadow-md">
        <h1 className="heading text-3xl text-center">Lets Create Your Quotation</h1>
        <p className="paragraph text-sm font-openSans text-gray-700 text-center">
          Please provide the necessary documents and information below
        </p>
        <form className="">
        {/* /*personal details */}
                  <section className="border-b border-t py-4 border-black mt-4">
                    <div>
                      <h1 className="small-heading ">Personal Details</h1>
                      <p className="small-paragraph">
                        Enter and confirm your personal details
                      </p>
                    </div>
                    <div className="mt-4">
                      <div className="flex gap-4 align-middle ">
                        <div className="">
                        <label
                          htmlFor="firstName"
                          className="font-normal text-gray-700 block "
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          className="custom-input bg-gray-300"
                          value={userData?.firstName}
                          disabled
                        />
                        </div>
                        <div className="">
                          <label
                            htmlFor="lastName"
                            className="font-normal text-gray-700 block "
                          >
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            className="custom-input bg-gray-300"
                            value={userData?.lastName}
                            disabled
                          />
                        </div>
                      </div>
                    <div className="flex gap-4 align-middle">
                        <div>

                      <label
                        htmlFor="fullName"
                        className="font-normal text-gray-700 block mt-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        className="custom-input bg-gray-300"
                        value={userData?.fullName}
                        disabled
                      />
                        </div>
                        <div>
                        <label
                            htmlFor="email"
                            className="font-normal text-gray-700 block mt-2">
                            Email
                            </label>
                            <input
                            type="email"
                            id="email"
                            className="custom-input bg-gray-300"
                            value={userData?.emailAddresses[0].emailAddress}
                            disabled
                            />  

                        </div>

                    </div>
                    </div>

                  </section>
                  {/* Shipping details */}
                  <section className="border-b  py-4 border-black mt-2">
                    <div>
                      <h1 className="small-heading">Shipping Details</h1>
                      <p className="small-paragraph">
                        Enter the details for your shipment
                      </p>
                    </div>
                    <div className="mt-4">
                      <div className="flex gap-4 align-middle">
                        <div className="">
                          <label
                            htmlFor="pickupLocation"
                            className="font-normal text-gray-700 block "
                          >
                            Pickup Location
                          </label>
                          <input
                            type="text"
                            id="pickupLocation"
                            className="custom-input"
                            placeholder="city, country"
                          />
                        </div>
                        <div className="">
                          <label
                            htmlFor="deliveryLocation"
                            className="font-normal text-gray-700 block "
                          >
                            Delivery Location 
                          </label>
                          <input
                            type="text"
                            id="deliveryLocation"
                            className="custom-input"
                            placeholder="city, country"

                          />
                        </div>
                      </div>
                      <div className="mt-4 flex gap-4 align-middle">
                        <div>
                        <label
                          htmlFor="shippingMethod"
                          className="font-normal text-gray-700 block "
                        >
                          Preferred Shipping Method
                        </label>
                        <select id="shippingMethod" className="custom-input w-[180px]">
                          <option value="air">Air</option>
                          <option value="sea">Sea</option>
                          <option value="road">Road</option>
                        </select>

                        </div>
                        <div className="">
                          <label
                            htmlFor="Address"
                            className="font-normal text-gray-700 block "
                          >
                            Address
                          </label>
                          <input
                            type="text"
                            id="Address"
                            className="custom-input"
                            placeholder=" 123 Avenue,city"

                          />
                        </div>
                      </div>
                    </div>
                  </section>
                {/* Package details */}
                <section className="border-b py-4 border-black mt-2">
                    <div>
                        <h1 className="small-heading">Package Details</h1>
                        <p className="small-paragraph">
                            Enter the details for your package
                        </p>
                    </div>
                    <div className="mt-4">
                        <div className="flex gap-4 align-middle">
                            <div className="">
                                <label
                                    htmlFor="typeOfGoods"
                                    className="font-normal text-gray-700 block "
                                >
                                    Type of Goods
                                </label>
                                <input
                                    type="text"
                                    id="typeOfGoods"
                                    className="custom-input"
                                    placeholder="e.g., electronics, furniture"
                                />
                            </div>
                            <div className="">
                                <label
                                    htmlFor="numberOfItems"
                                    className="font-normal text-gray-700 block "
                                >
                                    Number of Items
                                </label>
                                <input
                                    type="number"
                                    id="numberOfItems"
                                    className="custom-input"
                                    placeholder="0"
                                />
                            </div>
                        </div>
                        <div className="mt-4 flex gap-4 align-middle">
                            <div>
                                <label
                                    htmlFor="weight"
                                    className="font-normal text-gray-700 block "
                                >
                                    Weight 
                                </label>
                                <input
                                    type="text"
                                    id="weight"
                                    className="custom-input"
                                    placeholder="kg/lbs"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="dimensions"
                                    className="font-normal text-gray-700 block "
                                >
                                    Dimensions
                                </label>
                                <input
                                    type="text"
                                    id="dimensions"
                                    className="custom-input"
                                    placeholder="(L x W x H ) cm/inches"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="additionalServices"
                                className="font-normal text-gray-700 block "
                            >
                                Additional Services Needed
                            </label>
                            <input
                                type="text"
                                id="additionalServices"
                                className="custom-input"
                                placeholder="e.g., packaging, insurance"
                            />
                        </div>
                    </div>
                </section>
                {/* File Upload Section */}
                <section className="border-b py-4 border-black mt-2">
                  <div>
                    <h1 className="small-heading">Upload Documents</h1>
                    <p className="small-paragraph">
                      Attach any necessary documents for your shipment
                    </p>
                  </div>
                  <div className="mt-4">

                    <MultiFileDropzone />
                  </div>
                </section>
        </form>
      </main>
    </>
  );
}
