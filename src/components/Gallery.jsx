import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import MyImg from "./MyImg";

const MyContainer = () => {
  const { data } = useContext(AppContext);

  return (
    <div className="gallery">
      {data.map((x) => (
        <MyImg key={x.id} like={x.liked} url={x.src.portrait} alt={x.alt} />
      ))}
    </div>
  );
};

export default MyContainer;
