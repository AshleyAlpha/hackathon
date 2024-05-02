import React from 'react'
import { Outlet } from "react-router-dom";
import Header from "../Header";
const Layaout = () => {
  return (
    <div>
        <div className="bg-[#c78ad5] p-3 ">
        <Header/>
     <div className="flex">
        <div className="flex  w-[100%] h-[100vh] bg-yellow-100 rounded-lg border border-[#828181]">
        <Outlet/>
        </div>
     </div>
    </div>
    </div>
  )
}

export default Layaout