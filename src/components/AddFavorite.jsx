import React from 'react'

const AddFavorite = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center h-[calc(100vh-128px)] ">
    <div className="img">
    </div>
    <div className="text flex flex-col items-center justify-center">
      <h1 className="text-4xl"><i className="fa-regular fa-heart"></i> </h1>
      <h2 className="text-2xl">Recuerda agregar favoritos</h2>
    </div>
  </div>
  )
}

export default AddFavorite