'use client'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { useAuth } from '@clerk/nextjs';
import { useEffect, useState } from 'react';

const Admin = () => {
    const { userId } = useAuth();
    if(!userId){
      console.log("error no user id"); 
    }
  console.log("User ID:",userId);
    const [userData, setUser] = useState(null); // To store user data
  
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const response = await axios.get(`/api/getUser?userId=${userId}`);
          setUser(response.data);
          console.log(response.data);
        } catch (error) {
          console.error('There was a problem fetching user data:', error);
        }
      };
        fetchUserData();
  
    }, []);
  
  return (
    <div>
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
                    10+
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
                  Create shipment
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
      
    </div>
  )
}

export default Admin
