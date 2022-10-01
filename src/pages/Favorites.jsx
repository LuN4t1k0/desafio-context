import React, { useContext } from "react";
import MyContainer from "../components/Gallery";
import { AppContext } from "../context/AppContext";

const Favorites = () => {
  const { data } = useContext(AppContext);

  return (
    <div className="p-2">
      <MyContainer data={data.filter((item) => item.liked === true)} />
    </div>
  );
};

export default Favorites;
