import React, { useContext } from "react";
import MyContainer from "../components/Gallery";
import { AppContext } from "../context/AppContext";

const Favorites = () => {
  const { data } = useContext(AppContext);

  return (
    <div className="p-2">
      {data.filter((item) => item.liked === true) != 0 ? <MyContainer data={data.filter((item) => item.liked === true)} /> : <h1 className="">Debes seleccionar alguna foto</h1> }
      
    </div>
  );
};

export default Favorites;
