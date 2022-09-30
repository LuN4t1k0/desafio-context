import React, { useContext } from 'react'
import MyContainer from '../components/Gallery'
import { AppContext } from '../context/AppContext'

const Home = () => {
  const {data} = useContext(AppContext)
  return (
    <div className="p-3">
      <MyContainer data = {data}/>

    </div>

  )
}

export default Home