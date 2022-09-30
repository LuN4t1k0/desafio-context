import React from 'react'
import {NavLink} from 'reac-router-dom'
const MyNavBar = () => {
  return (
    <div className="w-full h-[64px] bg-pink-400 text-white flex justify-between items-center">
      <div className="derecha flex justify-around w-60">
        <div className="home  ">
          <NavLink
            className="text-lg"
            to="/"
          >
            INICIO
          </NavLink>
        </div>
        <div className="contacto">
          <NavLink className="text-lg" to="/contact">
            CONTACTO
          </NavLink>
        </div>
      </div>
      <div className="izquierda w-1/3 lg:w-60 md:w-60">
        <div className="logo w-full flex items-center justify-center  ">
          <h1 className="text-lg pr-2">Happy Cupcake</h1>
          <div className="imgLogo"><img className="w-8" src={logo} alt="" /></div>
        </div>
      </div>
    </div>
  )
}

export default MyNavBar