import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function MotherboardComponents() {

    const [components, setComponents] = useState([])

    useEffect(()=>{
        fetchComponents()
    },[])

    const fetchComponents = async () => {
        await axios.get(`http://127.0.0.1:8000/api/product/components-motherboard`).then(({data})=>{
        setComponents(data)
        })
    }

    return (
        <div>
            <Navbar/>
            <div className=''>
            <div className='container w-full mx-auto justify-content-center flex px-10 py-10 mt-20 gap-4'>
                {
                    components.length > 0 && (
                        components.map((item, key) => (
                            <div class=" overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 py-5 my-[100]" key={key}>
                            <div class="px-4 py-2">
                                <h1 class="text-xl font-bold text-gray-800 uppercase dark:text-white">{item.product_name}</h1>
                                <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">{item.product_short_des}</p>
                            </div>
        
                            <img class="object-cover w-full h-48 mt-2" src="https://oneit-solution.com/wp-content/uploads/2021/10/5-21-7.jpg" alt="NIKE AIR"/>
        
                            <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
                                <h1 class="text-lg font-bold text-white">Rp. {item.price}</h1>
                                <button class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button>
                            </div>
                        </div>
                        ))
                    )
                }

                
            </div>
    
            </div>
            <Footer/>
        </div>
    )
}
