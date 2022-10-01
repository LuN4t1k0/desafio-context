import React, { useContext } from 'react'
import MyContainer from '../components/Gallery'
import { AppContext } from '../context/AppContext'

const Home = () => {
  const {data, setFavoritos, favoritos} = useContext(AppContext)

  const LikeOrNot = (id) => {
    const index = data.findIndex(item => item.id === id);
    data[index].liked = !data[index].liked
    setFavoritos([...data])
    console.log(favoritos)
  }

  return (
    <div className="p-3">
      <MyContainer data = {data} setFavoritos ={setFavoritos} />

    </div>

  )
}

export default Home