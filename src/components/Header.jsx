import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex items-center justify-between h-16 bg-gray-800 px-4">
      <div className="flex items-center space-x-3">
    
        <NavLink to="/BasicReactHooks" className="text-cyan-100">
          BasicReacHook
        </NavLink>
        <NavLink to="/CRUD" className="text-cyan-100">
          CRUD
        </NavLink>
        <NavLink to="/DataDisplay" className="text-cyan-100">
          DDisplay
        </NavLink>
        <NavLink to="/DataManipulation" className="text-cyan-100">
          DManipu
        </NavLink>
        <NavLink to="/DataSelection" className="text-cyan-100">
          DSelec
        </NavLink>
        {/* <NavLink to="/Forms" className="text-cyan-100">
          Forms
        </NavLink> */}
        <NavLink to="/ImageHandling" className="text-cyan-100">
          ImgHand
        </NavLink>
        <NavLink to="/MasterReactRouterDOM" className="text-cyan-100">
          MasterReac
        </NavLink>
        <NavLink to="/StatePropagation" className="text-cyan-100">
          StatPr
        </NavLink>
        <NavLink to="/Styling" className="text-cyan-100">
          Styling
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
