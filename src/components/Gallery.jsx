import { useContext } from "react";
import { AppContext } from "../context/AppContext";


const MyContainer = () => {
  const { data } = useContext(AppContext);

  return <div>
    <h1>gallery</h1>
  </div>;
};

export default MyContainer;

{
  /* {data.map((item) => (
  <img src={item.src.original} alt="" />
))} */
}