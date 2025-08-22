"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const GetData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://mama-studio.vercel.app/api/products?limit=4")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="lg:w-9/12 mx-auto p-8">
      <h2 className="text-2xl font-normal md:text-3xl lg:text-4xl font-[Inter] pb-6">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((pro) => (
          <div key={pro._id} className="shadow rounded overflow-hidden">
            <figure className="relative overflow-hidden h-64 w-full">
              <img
                src={pro.images?.[0]}
                alt={pro.name}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              {pro.images?.[1] && (
                <img
                  src={pro.images[1]}
                  alt={pro.name}
                  className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              )}
            </figure>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{pro.name}</h3>
              <p className="text-black">{pro.category}</p>
              <p className="text-black font-bold">৳ {pro.price}</p>
              <Link href={`/products/${pro._id}`} className="btn btn-outline">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetData;
