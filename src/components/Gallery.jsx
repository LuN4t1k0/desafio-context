import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import MyImg from "./MyImg";

const MyContainer = () => {
  const { data } = useContext(AppContext);

  return (
    <div className="galeria">
      {data.map((x) => (
        <MyImg  key={x.id} nombre={x.photographer} url={x.src.original} alt={x.alt}/>
      ))}
    </div>
  );
};

export default MyContainer;
