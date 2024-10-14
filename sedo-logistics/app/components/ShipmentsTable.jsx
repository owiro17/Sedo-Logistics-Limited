import React from "react";

const ShipmentsTable = () => {
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

  ];

  return (
    <div className="w-full overflow-x-scroll lg: lg:w-[92%] mt-8 border border-black bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-extrabold font-manrope text-secondary text-center mb-2">
        Your Shipments
      </h2>
      <p className="text-sm text-center font-openSans font-normal text-gray-500 mb-4">
        Here you can manage all your shipments!
      </p>
      <table className="min-w-full overflow-x-scroll lg:overflow-y-hidden divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-nowrap text-secondary text-sm font-bold font-manrope">
              Ref No.
            </th>
            <th className="px-4 py-2 text-left text-secondary text-sm font-bold font-manrope">
              Shipment Details
            </th>
            <th className="px-4 py-2 text-left text-secondary text-sm font-bold font-manrope">
              Status
            </th>
            <th className="px-4 py-2 text-nowrap text-left text-secondary text-sm font-bold font-manrope">
              Date Created
            </th>
            <th className="px-4 py-2 text-left text-secondary text-sm font-bold font-manrope">
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
              <td className="px-4 py-2 text-nowrap text-sm text-gray-900">
                {shipment.details.split(" ").slice(0, 10).join(" ")}
              </td>
              <td
                className={`px-4 py-2 text-sm font-semibold ${
                  shipment.status === "Delivered"
                    ? "text-green-600"
                    : "text-yellow-600"
                }`}
              >
                {shipment.status}
              </td>
              <td className="px-4 py-2 text-sm text-gray-500">
                {shipment.dateCreated}
              </td>
              <td className="px-4 py-2">
                <button className="text-sm text-white px-3 ease-in-out duration-200 py-2 bg-primary hover:bg-secondary rounded-md hover:text-white">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShipmentsTable;
