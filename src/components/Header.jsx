import React from 'react';
import {NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <div className=" h-[100vh] ">
      <div className="flex gap-3 h-[100%] w-64 p-4 text-2xl font-bold">
        <NavLink to="/" className="text-cyan-100">
          BRH
        </NavLink>
        <NavLink to="/about " className="text-cyan-100">
          CRUD
        </NavLink>
        <NavLink to="/contact" className="text-cyan-100">
          DDisplay
        </NavLink>
        <NavLink to="/contact" className="text-cyan-100">
          DManipu
        </NavLink>
        <NavLink to="/contact" className="text-cyan-100">
          DSelec
        </NavLink>
        <NavLink to="/contact" className="text-cyan-100">
          Forms
        </NavLink>
        <NavLink to="/contact" className="text-cyan-100">
          Home
        </NavLink>
        <NavLink to="/contact" className="text-cyan-100">
          ImgHand
        </NavLink>
        <NavLink to="/contact" className="text-cyan-100">
          MasterReac
        </NavLink>
        <NavLink to="/contact" className="text-cyan-100">
          StatPr
        </NavLink>
      </div>
      <div className=""></div>
    </div>
  )
}

export default Header