import { useContext } from "react";
import { AppContext } from "../context/AppContext";



const MyContainer = () => {
  const { data } = useContext(AppContext);
  const url = "https://images.pexels.com/photos/889545/pexels-photo-889545.jpeg"

  return (
    <div className="img-container">



      
    </div>
  );
};

export default MyContainer;

{/* {data.map((item) => (
  <img src={item.src.original} alt="" />
))} */}