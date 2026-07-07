//import React from 'react'
import bg_image3 from "../assets/bg_image3.png"
import {services} from '../assets/assets.js'
import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <div>
        <div
                className="relative flex items-center justify-start w-full min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] px-6 sm:px-12 md:px-20 py-10"
                style={{
                  backgroundImage: `url(${bg_image3})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",

                }}
              >
                <div className = "pt-30">
                     <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-auto">
                  Our Services
                </h1>

                <p className="text-white text-lg sm:text-xl md:text-2xl font-bold mt-4">
                  Consulting, Planning and Managing Projects
                </p>
                </div>
        </div>

        <div className="flex flex-col bg-gray-100 p-5">
                  <div className="flex flex-col items-center justify-center p-5">
                        <p className="text-lg sm:text-xl md:text-2xl  mt-4">
                          We have wide and  long experienced engineers with varying capability to offer the requiredservices <br/>
                          in the following areas of expertise.
                        </p>
                   </div>



                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
                        {services.map((service,index) => (
                          <div key = {index} className="border border-white bg-white items-center justify-center h-60 rounded-xl">
                            <div className="flex flex-col gap-3 p-3 items-center justify-center">
                                <img src={service.image} alt="" className="h-20 w-20" />

                                <h3 className="text-blue-900  text-sm font-bold">{service.title}</h3>
                            </div>



                            <p className="whitespace-pre-line text-gray-500 text-sm pl-4 md:pl-15">{service.description}</p>


                          </div>
                        ))}
                  </div>
        </div>

        <div className="flex flex-col items-center justify-center ">
            <h1 className="text-3xl p-5 font-bold">Ready To Discuss Your Project ?</h1>
            <p className="p-2 font-bold">Contact us today to find out how we can assist with your engineering needs.</p>

           <div className="p-10">
                <NavLink to = "/contact" className="border border-blue-900 bg-blue-900 p-3 rounded pl-8 pr-8 text-white font-bold ">
            Get in Touch</NavLink>
           </div>
        </div>
    </div>
  )
}

export default Services