import axios from "axios";
import React, { useEffect, useState } from "react";

export default function DisplayCategory() {
  const [displaysCategory , setDisplayCategory] = useState([])

  useEffect(() => {
    fetchDisplayCategory()
  }, [])

  const fetchDisplayCategory = async () => {
    await axios.get(`http://127.0.0.1:8000/api/product/display-desktop`).then(({data})=>{
      setDisplayCategory(data)
      })
  }

  return (
    <div>
      <div class="container px-5 py-12 mx-auto">
        <div class="flex flex-wrap w-full mb-10">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Display/Desktop
            </h1>
            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
        </div>
        <div class="flex flex-wrap -m-4">
          {
            displaysCategory.length > 0 && (
              displaysCategory.map((item, key) => (
              <div class="xl:w-1/4 md:w-1/2 p-4" key={key}>
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src={`http://192.168.1.4:8000/${item.product_img}`}
                    alt="content"
                  />
                  <h3 class="tracking-widest text-indigo-500 text-xs font-medium uppercase title-font">
                    {item.product_category_name}
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    {item.product_name}
                  </h2>
                  <p class="leading-relaxed text-base">
                    {item.product_short_des}
                  </p>
                </div>
              </div>

              ))
            )
          }
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src="https://dummyimage.com/721x401"
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                Colosseum Roma
              </h2>
              <p class="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src="https://dummyimage.com/722x402"
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                Great Pyramid of Giza
              </h2>
              <p class="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src="https://dummyimage.com/723x403"
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                San Francisco
              </h2>
              <p class="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
            <a
              className="text-indigo-500 inline-flex text-xl items-center ml-4 mt-5"
              type="button"
              href="/display-desktop"
            >
              More Products
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-7 h-7 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
