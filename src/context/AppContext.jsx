import { createContext, useState } from "react";

export const AppContext = createContext()

import React from 'react'

const AppProvider = ({children}) => {
  const [data, setData] = useState("Cristian")
  return (
    <AppContext.Provider value={{data, setData}}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider