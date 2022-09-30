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

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
