import { createContext, useEffect, useState } from "react";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
 

  const getData = async () => {
    const response = await fetch(import.meta.env.VITE_ENDPOINT, {
      method: "GET",
      headers: {
        Authorization: import.meta.env.VITE_PEXELX,
      },
    });
    const { photos } = await response.json();
    console.log(photos);
    setData(photos);
    return photos;
  };

  useEffect(() => {
    getData();
  }, []);

  const LikeOrNot = (id) => {
    const index = data.findIndex(item => item.id === id);
    data[index].liked = !data[index].liked
    setData([...data])
    console.log(data)
  }

  return (
    <AppContext.Provider value={{ data, setData, LikeOrNot  }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
