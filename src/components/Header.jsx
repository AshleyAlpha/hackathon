import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex items-center justify-between h-16 bg-gray-800 px-4">
      <div className="flex items-center space-x-3">
    
        <NavLink to="/Layout/BasicReactHooks" className="text-cyan-100">
          BasicReacHook
        </NavLink>
        <NavLink to="/Layout/CRUD" className="text-cyan-100">
          CRUD
        </NavLink>
        <NavLink to="/Layout/DataDisplay" className="text-cyan-100">
          DDisplay
        </NavLink>
        <NavLink to="/Layout/DataManipulation" className="text-cyan-100">
          DManipu
        </NavLink>
        <NavLink to="/Layout/DataSelection" className="text-cyan-100">
          DSelec
        </NavLink>
        <NavLink to="/Layout/Forms" className="text-cyan-100">
          Forms
        </NavLink>
        <NavLink to="/Layout/ImageHandling" className="text-cyan-100">
          ImgHand
        </NavLink>
        <NavLink to="/Layout/MasterReactRouterDOM" className="text-cyan-100">
          MasterReac
        </NavLink>
        <NavLink to="/Layout/StatePropagation" className="text-cyan-100">
          StatPr
        </NavLink>
        <NavLink to="/Layout/Styling" className="text-cyan-100">
          Styling
        </NavLink>
      </div>

    </div>
  );
};

export default Header;
