"use client";
import { useState } from "react";
import * as React from "react";
import { useEdgeStore } from "../../../libs/edgestore";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';

// import { MultiFileDropzone } from "../../components/MultiFileDropZone";
import { MultiFileDropzone } from "../../components/MultiFileDropZone";
export default function Page() {
  const [file, setFile] = useState([]);
  // const { edgestore } = useEdgeStore();
  const [userData, setUser] = useState(null); // To store user data
  const user = useUser();
  const CreateQuotation = async (formData) => {
    console.log("Quotation Data: ", formData.get("firstName"));
    const fullName = formData.get("fullName");
    const pickupLocation = formData.get("pickupLocation");
    const deliveryLocation = formData.get("deliveryLocation");
    const typeOfGoods = formData.get("typeOfGoods");
    const numberOfItems = formData.get("numberOfItems");
    const weight = formData.get("weight");
    const dimensions = formData.get("dimensions");
    const missingFields = [];
    if (!fullName || !pickupLocation || !deliveryLocation || !typeOfGoods || !numberOfItems || !weight || !dimensions) {
      missingFields.push("fullName", "pickupLocation", "deliveryLocation", "typeOfGoods", "numberOfItems", "weight", "dimensions");
      toast.error('Please fill in all required fields');
      return;
    }
    toast.success('Quotation Created Successfully');

    // validate input from from frontend


    // try {
    //   const response = await fetch("/api/getQuotation", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });
    //   const data = await response.json();
    //   console.log("Success:", data);
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };

  useEffect(() => {
    setUser(user.user);
  }, []);

  const [fileStates, setFileStates] = useState([]);
  const { edgestore } = useEdgeStore();
  function updateFileProgress(key, progress) {
    setFileStates((fileStates) => {
      const newFileStates = structuredClone(fileStates);
      const fileState = newFileStates.find(
        (fileState) => fileState.key === key,
      );
      if (fileState) {
        fileState.progress = progress;
      }
      return newFileStates;
      });
    }

  return (
    <>
      <main className="w-full p-8 top-0 bg-white border border-black rounded-lg shadow-md">
        <Toaster />
        <h1 className="heading text-3xl text-center">Lets Create Your Quotation</h1>
        <p className="paragraph text-sm font-openSans text-gray-700 text-center">
          Please provide the necessary documents and information below
        </p>
        <form action={CreateQuotation} className="">
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
                          name="firstName"
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
                            name="lastName"
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
                        name="fullName"
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
                            name="email"
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
                            name="pickupLocation"
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
                            name="deliveryLocation"
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
                        <select id="shippingMethod" name="shippingMethod" className="custom-input w-[180px]">
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
                            name="Address"
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
                                    name="typeOfGoods"
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
                                    name="numberOfItems"
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
                                    name="weight"
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
                                    name="dimensions"
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
                                name="additionalServices"
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

                  <MultiFileDropzone
        value={fileStates}
        onChange={(files) => {
          setFileStates(files);
        }}
        onFilesAdded={async (addedFiles) => {
          setFileStates([...fileStates, ...addedFiles]);
          await Promise.all(
            addedFiles.map(async (addedFileState) => {
              try {
                const res = await edgestore.publicFiles.upload({
                  file: addedFileState.file,
                  onProgressChange: async (progress) => {
                    updateFileProgress(addedFileState.key, progress);
                    if (progress === 100) {
                      // wait 1 second to set it to complete
                      // so that the user can see the progress bar at 100%
                      await new Promise((resolve) => setTimeout(resolve, 1000));
                      updateFileProgress(addedFileState.key, 'COMPLETE');
                    }
                  },
                });
                // set 
                setFile(res.url);
                console.log(res.url);
              } catch (err) {
                updateFileProgress(addedFileState.key, 'ERROR');
              }
            }),
          );
        }}
      />
                  </div>
                  <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Submit</button>

                </section>
        </form>
      </main>
    </>
  );
}
