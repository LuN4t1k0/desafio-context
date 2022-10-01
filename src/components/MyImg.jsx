import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyImg = ({ url, alt, like,id, }) => {

  const { LikeOrNot } = useContext(AppContext)


  return (
    <div className="grid">
      <img src={url} alt={alt} className="grid__img " />
      <p className="grid__paragraph" onClick={() => LikeOrNot(id)} >
        {like === true ? (
          <i className="fa-solid fa-heart"></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
};

export default MyImg;
