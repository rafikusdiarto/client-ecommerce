import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Product() {

  const [products, setProduct] = useState([])

  useEffect(()=>{
    fetchProducts()
  },[])

  const fetchProducts = async () => {
    await axios.get(`http://127.0.0.1:8000/api/all-product`).then(({data})=>{
      setProduct(data)
    })
  }
  return (
    <div>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-16 mx-auto">
    <div className="flex flex-wrap gap-6">
        {
          products.length > 0 && (
            products.map((item,key)=>(
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full border ">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={`http://192.168.1.37:8000/${item.product_img}`}/>
              </a>
              <div className="mt-4" key={key}>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.product_category_name}</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{item.product_name}</h2>
                <div className="flex">
                  <p className="mt-1 mr-40">Rp. {item.price}</p>
                  <Link to={`/admin/edit-product/${item.id}`} className="px-5 py-2 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
                    Detail
                  </Link>

                </div>
              </div>
            </div>

            ))  
          )
        }

    </div>
  </div>
</section>
    </div>
  )
}
