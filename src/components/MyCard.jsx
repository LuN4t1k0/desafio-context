import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyCard = () => {
  const {data, setData} = useContext(AppContext)
  return (
    <div>{data}</div>
  )
}

export default MyCard