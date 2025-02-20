'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ShortShipmentsTable from '../components/ShortShipmentsTable';
import { Protect, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import axios from 'axios';
import { useAuth } from '@clerk/nextjs';

export default function DashboardPage() {
  const { userId } = useAuth();
  if(!userId){
    console.log("error no user id"); 
  }
  console.log("User ID:", userId);
  
  const [userData, setUser] = useState(null); // To store user data
  const [shipmentData, setShipment] = useState([]); // To store shipment data
  
  const fetchUserData = async () => {
    try {
      const response = await axios.get(`/api/getUser?userId=${userId}`);
      setUser(response.data);
      console.log("userdata: " + JSON.stringify(response.data));
    } catch (error) {
      console.error('There was a problem fetching user data:', error);
    }
  };
  
  const fetchShipmentData = async () => {
    try {
      const response = await axios.get(`/api/getShipment`);
      setShipment(response.data);
      console.log("shipment data from api: " + JSON.stringify(response.data));
    } catch (error) {
      console.error('There was a problem fetching shipment data:', error);
    }
  };
  
  const postShipmentData = async () => {
    try {
      const shipmentData = {
        "consignee": {
          "firstName": "Shawn",
          "lastName": "Owiro",
          "email": "shawn.owiro@example.com",
          "phone": "+254792649085",
          "address": "Nyayo Estate, Nairobi, Kenya"
        },
        "shipmentInfo": {
          "ref": "SHIP12345",
          "awb": "234-684-443",
          "currentLocation": "Ethiopia",
          "shipmentTitle": "White Towels and Shower Curtains",
          "destination": "Kenya",
          "estimatedDeliveryDate": "2025-05-30T00:00:00.000Z",
          "status": "Documentation",
          "modeOfTransport": "Air"
        },
        "goodsInfo": [
          {
            "description": "White Towels",
            "quantity": 20,
            "unit": "Pc",
            "dimension": "50cm x 60cm",
            "weight": "5kg"
          },
          {
            "description": "Shower Curtains",
            "quantity": 10,
            "unit": "Pc",
            "dimension": "200cm x 180cm",
            "weight": "3kg"
          }
        ],
        "documents": [
          {
            "name": "IDF Document",
            "link": "https://example.com/documents/idf.pdf"
          },
          {
            "name": "Invoice",
            "link": "https://example.com/documents/invoice.pdf"
          }
        ],
        "progress": [
          {
            "step": "Documentation",
            "completed": true
          },
          {
            "step": "Customs Clearance",
            "completed": false
          },
          {
            "step": "Delivery",
            "completed": false
          },
          {
            "step": "Delivered",
            "completed": false
          }
        ]
      }
      const response = await axios.post('/api/getShipment', shipmentData);
      console.log("Posted shipment data: " + JSON.stringify(response.data));
    } catch (error) {
      console.log("Error posting shipment data: " + error)
    }
  }

  useEffect(() => {
    fetchUserData();
    fetchShipmentData();
    // postShipmentData();
  }, []);

  return (
    <>
      <Protect>
        <main className="flex-col align-top flex lg:flex-row">
          {/* Main section */}
          <main className="lg:ml-5 w-full">
            {/* {shipmentData ? JSON.stringify(shipmentData) : 'Loading...'} */}
            {/* Top main navbar */}
            <section className="flex flex-col w-full lg:flex-row gap-4">
              {/* Greeting babel */}
              <div className="babel">
                <h1 className="font-manrope text-secondary font-bold">
                  Hey {userData ? userData.firstName : 'Loading...'}
                </h1>
                <p className="font-openSans font-normal text-sm text-gray-500">
                  {new Date().toLocaleDateString("en-US", {
                    day: "numeric",
                    weekday: "long",
                    month: "long",
                  })}
                </p>
              </div>
              {/* Total shipment babel */}
              <div className="babel">
                <div className="inline-block align-middle">
                  <h1 className="font-manrope text-4xl mr-2 text-green-600 font-extrabold">
                    {/* 10+{userData.shipments ? userData.shipments.length : 'Loading...'} */}
                  </h1>
                </div>
                <div className="inline-block align-middle">
                  <h3 className="font-manrope text-secondary font-extrabold">
                    Total Shipments
                  </h3>
                  <p className="font-openSans font-normal text-sm text-gray-500">
                    vs Last Month
                  </p>
                </div>
              </div>
              {/* Request quote babel */}
              <div className="babel border-green-900 border-2 inline-block">
                <Link
                  href="/"
                  className="inline-block align-middle font-manrope text-secondary font-extrabold hover:text-primary ease-in-out duration-200 mr-2"
                >
                  Request Quote
                </Link>
                <Image
                  className="inline-block align-middle"
                  src="/plus.svg"
                  alt="Plus.svg"
                  width={35}
                  height={40}
                />
              </div>
            </section>

            <section>
              <ShortShipmentsTable shipmentData={shipmentData} count={3} />
            </section>
          </main>
        </main>
      </Protect>
      <SignedOut>
        <RedirectToSignIn signInFallbackRedirectUrl={"/sign"} />
      </SignedOut>
    </>
  );
}
