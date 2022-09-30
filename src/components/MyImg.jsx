

const MyImg = ({ url, alt,like}) => {

  return (
 
    <div className="grid">
      <img src={url} alt={alt} className="grid__img " />
      <p className="grid__paragraph">
        {like === true ? 
          <i class="fa-solid fa-heart"></i>
         : 
          <i className="fa-regular fa-heart"></i>
        }
      </p>
    </div>
  );
};

export default MyImg;
