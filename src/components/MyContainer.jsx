import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyContainer = () => {
  const {data} = useContext(AppContext)
  return (
    <div><h1>{data}</h1></div>
  )
}

export default MyContainer