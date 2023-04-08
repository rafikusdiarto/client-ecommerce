import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Laptop() {
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    fetchLaptops();
  }, []);

  const fetchLaptops = async () => {
    await axios
      .get(`http://127.0.0.1:8000/api/product/laptop`)
      .then(({ data }) => {
        setLaptops(data);
      });
  };

  return (
    <div>
      <Navbar />

      <div className="container w-full mx-auto justify-content-center flex px-10 py-10 mt-20 gap-4">
        {laptops.length > 0 &&
          laptops.map((item, key) => (
            <div
              className="overflow-hidden xl:w-1/4 bg-white rounded-lg shadow-lg dark:bg-gray-800 py-5 my-[100]"
              key={key}
            >
              <div className="px-4 py-2">
                <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
                  {item.product_name}
                </h1>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {item.product_short_des}
                </p>
              </div>
              <img
                className="object-cover w-full h-48 mt-2"
                src={`http://192.168.1.4:8000/${item.product_img}`}
              />

              <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                <h1 className="text-lg font-bold text-white">{item.price}</h1>
                <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
      </div>

      <Footer />
    </div>
  );
}
