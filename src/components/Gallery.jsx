import MyImg from "./MyImg";

const MyContainer = ({ data }) => {
  return (
    <div className="gallery">
      {data.map((x) => (
        <MyImg key={x.id} like={x.liked} url={x.src.portrait} alt={x.alt} />
      ))}
    </div>
  );
};

export default MyContainer;
