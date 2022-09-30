import React from 'react'
import { NavLink } from "react-router-dom";
const MyNavBar = () => {
  return (
    <div className="w-full h-[64px] bg-purple-800 text-white flex justify-between items-center">
      <div className="derecha flex justify-around w-60">
        <div className="home  ">
          <NavLink
            className="text-lg"
            to="/"
          >
            <i class="fa-solid fa-image"></i>
          </NavLink>
        </div>
        <div className="contacto">
          <NavLink className="text-lg" to="/contact">
          <i class="fa-solid fa-heart"/>  
          </NavLink>
        </div>
      </div>
      <div className="izquierda w-1/3 lg:w-60 md:w-60">
        <div className="logo w-full flex items-center justify-center  ">
          <h1 className="text-lg pr-2"><i class="fa-solid fa-camera"></i></h1>
          <div className="imgLogo"><img className="w-8" src="" alt="" /></div>
        </div>
      </div>
    </div>
  )
}

export default MyNavBar