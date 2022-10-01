import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Favorites = () => {
  const {data} = useContext(AppContext)

  const dataFiltrada = data.filter(item => item.liked ===true)

  return (
    <div className="p-2">
    {/* <MyContainer data = {dataFiltrada}/> */}
    {dataFiltrada.map(item => <p key={item.id}>{item.id} </p> )}

    
  </div>
  )
}

export default Favorites