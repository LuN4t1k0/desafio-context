

const MyImg = ({nombre, url, alt}) => {

  return (
    <div className="image">
      <h1 className="">
        {nombre}
      </h1>
      <img className="" src="" alt="" />
      <img
        src={url}
        alt={alt}
      />
    </div>
  );
};

export default MyImg;
