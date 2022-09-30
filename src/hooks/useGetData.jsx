import { useState, useEffect } from "react";

const useGetData = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_ENDPOINT, {
        method: "GET",
        headers: {
          Authorization: import.meta.env.VITE_PEXELX,
        },
      });
      const fotos = await response.json();
      setData(fotos.photos)
      console.log(fotos.photos);
      return fotos.photos
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data
  };
};

export default useGetData;
