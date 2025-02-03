import React from "react";
import Link from "next/link";
// import { useUser } from '../context/UserContext';
// import { UserProvider } from '../context/UserContext';
const page = () => {
  // const { user } = useUser();
  const shipments = [
    {
      refNo: 1,
      details:
        "1kg Gold Kenya to South Africa sdsd sdsds sdsds sdsd sdsd sdsds dsds dsddd dddd ",
      status: "Pending",
      dateCreated: "30/08/2024",
    },
    {
      refNo: 2,
      details: "100pc Comesa Pads",
      status: "Delivered",
      dateCreated: "02/08/2024",
    },
    {
      refNo: 3,
      details: "100pc Comesa Pads",
      status: "Delivered",
      dateCreated: "02/08/2024",
    },
    {
      refNo: 2,
      details: "100pc Comesa Pads",
      status: "Delivered",
      dateCreated: "02/08/2024",
    },
    {
      refNo: 2,
      details: "100pc Comesa Pads",
      status: "Delivered",
      dateCreated: "02/08/2024",
    },
  ];
  return (
    <div className="flex align-top relative gap-8">
                  {/* <h1>Welcome, {user?.firstName}</h1> */}
      <div className="overflow-x-scroll  border border-black bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-extrabold font-manrope text-secondary text-center mb-2">
          Your Shipments
        </h2>
        <p className="text-sm text-center font-openSans font-normal text-gray-500 mb-4">
          Here you can manage all your shipments!
        </p>
        <table className=" overflow-x-scroll lg:overflow-y-hidden divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ref No.
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Shipment Details
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date Created
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {shipments.map((shipment) => (
              <tr key={shipment.refNo}>
                <td className="px-4 py-2 text-sm text-gray-900">
                  {shipment.refNo}
                </td>
                <td className="px-4 py-2 text-nowrap text-sm text-gray-900 font-medium ">
                  {shipment.details.split(" ").slice(0, 6).join(" ")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                                    <span
                                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                            shipment.status === "Pending"
                                                ? "bg-orange-100 text-orange-800"
                                                : "bg-green-100 text-green-800"
                                        }`}
                                    >
                                        {shipment.status}
                                    </span>
                                </td>
                <td className="px-4 py-2 text-sm text-gray-500">
                  {shipment.dateCreated}
                </td>
                <td className="px-4 py-2">
                  <Link
                    href={`/Dashboard/Shipment/${encodeURIComponent(
                      shipment.refNo
                    )}/`}
                  >
                        <button className="bg-blue-100 block w-[8dvw] px-3 py-1 font-manrope text-blue-900 font-bold border border-gray-100 hover:border hover:border-blue-900 transition-all ease-in-out duration-150">
                            View
                        </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default page;