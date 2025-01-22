import React from "react";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import SideNavbar from "../../../components/SideNavbar";

export default async function Page({ params }) {
  // eslint-disable-next-line no-unused-vars
  const { refNo, slug } = params;
  const QuotationInformation = [
    {
      InvNo: "001",
      refNo: "001",
      currentLocation: "Ethiopia",
      estimatedDeliveryDate: "30/5/2024",
      modeOfTransport: "Air",
      awbBol: "234-684-443",
      destination: "Kenya",
      shipmentStatus: "Documentation",
    },
  ];
  const QuotationItems = [
    {
        itemRef:1,
        description: "1kg Gold Kenya to South Africa ",
        quantity: 1,
        amount: 1000,
        tax: 0.18,
    },
    {
        itemRef:2,
        description: "1kg bronze plated dishes",
        quantity: 20,
        amount: 10000,
        tax: 0.19,
    },
    {
        itemRef:1,
        description: "10kg Gold glazed rings",
        quantity: 10,
        amount: 1000,
        tax: 0.22,
    },


  ];
  return (
    <>
      <main className="flex align-top relative top-10 gap-8">
        <SideNavbar></SideNavbar>

        <section className="bg-white  p-4 rounded-lg  border border-black shadow-md w-full self-start items-start">
          <Link
            href={"/Quotation"}
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
          <div className="flex justify-between w-full">
            <Image
              className="p-2"
              src="/logo 3.png"
              alt="logo"
              width={150}
              height={150}
            />
            <div>
              <p className="font-normal text-gray-600">
                <b className=" text-black font-extrabold">Quotation No:</b>
                {QuotationInformation[0].InvNo}
              </p>
              <p className="font-normal text-gray-600">
                <b className=" text-black font-extrabold">Date:</b>
                {QuotationInformation[0].estimatedDeliveryDate}
              </p>
            </div>
          </div>
          <hr className="w-full border-t-2 border-gray-300 my-4" />
          {/* ----------consingee information----------------  */}
          <h1 className="text-xl text-secondary font-bold inline-block">
            <Image
              className="p-2 inline-block"
              src="/documentIcon-1.svg"
              alt="back icon"
              width={50}
              height={50}
            />
            Consignee Information
          </h1>
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
          {/* ------shipment information-------- */}
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
          <div className="flex relative p-2  gap-5">
            <div className="flex flex-col gap-3">
              <p className="font-normal text-gray-600">
                <b className=" text-black font-extrabold">Ref No:</b> Shawn
              </p>
              <p className="font-normal text-gray-600">
                <b className="text-black font-extrabold">Entry No:</b>
                2W453E67UM
              </p>
              <p className="font-normal text-gray-600">
                <b className="text-black font-extrabold">Estimated Delivery Date:</b>30/5/2024
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-normal text-gray-600">
                <b className="text-black font-extrabold">AWB/BOL:</b> 234-684-443 
              </p>
              <p className="font-normal text-gray-600">
                <b className="text-black font-extrabold">Vessel:</b> +245-909-99
              </p>
              <p className="font-normal text-gray-600">
                <b className="text-black font-extrabold">Mode of Transport:</b>Air
              </p>
            </div>
          </div>
          <hr className="w-full border-t-2 border-gray-300 my-4" />
          <div>
          <table className="min-w-full overflow-x-scroll lg:overflow-y-hidden divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-nowrap text-secondary text-sm font-bold font-manrope border-x-2 border-y-2 border-black">
            Description
            </th>
            <th className="px-4 py-2 text-left text-secondary text-sm font-bold font-manrope border-x-2 border-y-2 border-black">
            Quantity
            </th>
            <th className="px-4 py-2 text-left text-secondary text-sm font-bold font-manrope border-x-2 border-y-2 border-black">
            Amount
            </th>
            <th className="px-4 py-2 text-nowrap text-left text-secondary text-sm font-bold font-manrope border-x-2 border-y-2 border-black">
            Tax
            </th>
            <th className="px-4 py-2 text-left text-secondary text-sm font-bold font-manrope border-x-2 border-y-2 border-black">
            Total Amount
            </th>
          </tr>
        </thead>
        <tbody className="bg-white border-x-2 border-y-2 border-black">
            {QuotationItems.map((Quotation) => (
            <tr key={Quotation.itemRef} className=" border-x-2 border-y-2 border-black">
                <td className="px-4 py-2 text-left text-nowrap text-secondary text-sm font-bold font-manrope border-x-2 border-y-2 border-black">
                {Quotation.description}
                </td>
                <td className="px-4 py-2 text-left text-nowrap text-secondary text-sm font-bold font-manrope border-x-2 border-y-2 border-black">
                {Quotation.quantity}
                </td>
                <td className="px-4 py-2 text-left text-nowrap text-secondary text-sm font-bold font-manrope border-x-2 border-y-2 border-black">
                {Quotation.amount * Quotation.quantity}
                </td>
                <td className="px-4 py-2 text-left text-nowrap text-secondary text-sm font-bold font-manrope border-x-2 border-y-2 border-black">
                {Quotation.tax}
                </td>
                <td className="px-4 py-2 text-left text-nowrap text-secondary text-sm font-bold font-manrope border-x-2 border-y-2 border-black">
                {Quotation.amount * Quotation.quantity + (Quotation.tax * Quotation.amount * Quotation.quantity)}
                </td>
            </tr>        
            ))}
            <tr>
                <td colSpan="4" className="px-4 py-2 text-left text-nowrap text-primary text-sm font-bold font-manrope border-x-2 border-y-2 border-black">
                Total
                </td>
                <td className="px-4 py-2 text-left text-nowrap text-secondary text-sm font-bold font-manrope border-x-2 border-y-2 border-black">
                {QuotationItems.reduce((acc, item) => acc + item.amount * item.quantity + (item.tax * item.amount * item.quantity), 0)}
                </td>
            </tr>

        </tbody>
      </table>
          </div>
        </section>
      </main>
    </>
  );
}
Page.propTypes = {
  params: PropTypes.shape({
    refNo: PropTypes.string.isRequired,
    slug: PropTypes.string,
  }).isRequired,
};
