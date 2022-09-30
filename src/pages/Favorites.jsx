import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Favorites = () => {
  const {likes} = useContext(AppContext)
  return (
    <div className="p-2">
    <MyContainer data = {likes}/>
  </div>
  )
}

export default Favorites