
import React from "react";
// import Link from "next/link";
const ShipmentsTable = () => {
  const shipments = [
    {
      refNo: 1,
      details:
        "1kg Gold Kenya to South Africa dadada adadad adadad ada bfbfbfb bgbg bgbg ",
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
    <>
        <section>
            <div className="mt-8 border border-black bg-white rounded-lg shadow-md p-2">
                <h2 className="text-2xl font-extrabold font-manrope text-secondary text-center mb-2">
                    Your Shipments
                </h2>
                <p className="text-sm text-center font-openSans font-normal text-gray-500 mb-4">
                    Here you can manage all your shipments!
                </p>
            </div>
            <div className="mt-8 border border-black bg-white rounded-lg shadow-md p-6">
                <table className=" divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Shipment Title
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Shipment Status
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {shipments.slice(0, 3).map((shipment) => (
                            <tr key={shipment.refNo}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">
                                        {shipment.details.split(" ").slice(0, 6).join(" ")}
                                    </div>
                                    <div className="text-sm text-gray-500">{shipment.dateCreated}</div>
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
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button className="bg-blue-100 block w-[8dvw] px-3 py-1 font-manrope text-blue-900 font-bold border border-gray-100 hover:border hover:border-blue-900 transition-all ease-in-out duration-150">
                                        View
                                    </button>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    </>
);
};

export default ShipmentsTable;