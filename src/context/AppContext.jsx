import { createContext, useState } from "react";
import fotos from '../data/fotos.json'
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const APIKEY = "563492ad6f917000010000011dec5a491d6940fdbaabae66f4986fd6";
  const ENDPOINT = "https://api.pexels.com/v1/search?query=people";


  const getData = async () => {
    const response = await fetch("https://api.pexels.com/v1/search?query=people",
    {method: "GET",
      headers: {
        Authorization:
          "563492ad6f917000010000011dec5a491d6940fdbaabae66f4986fd6",
      },
    })
    const data = await response.json()
    console.log(data.photos)

  };

  getData()




  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
