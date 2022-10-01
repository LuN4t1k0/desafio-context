import React from 'react'
import imagen from '../assets/img/404.png'
const NotFound = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center h-[calc(100vh-128px)] ">
      <div className="img">
        <img src={imagen} alt="" />
      </div>
     
    </div>
  )
}

export default NotFound