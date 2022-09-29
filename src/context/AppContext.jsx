import { createContext, useEffect, useState } from "react";
import.meta.env.VITE_PEXELX
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(import.meta.env.VITE_ENDPOINT,
    {method: "GET",
      headers: {
        Authorization:import.meta.env.VITE_PEXELX,
      },
    })
    const data = await response.json()
    console.log(data.photos)
   
  };

  
  useEffect(() => {
    
    getData()
}, [])



  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
