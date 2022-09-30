
import { BrowserRouter } from "react-router-dom";
import "../src/assets/css/styles.css";
import MyNavBar from "./components/MyNavBar";

import AppProvider from "./context/AppContext";
import Home from "./pages/Home";

function App() {


  return (
    <BrowserRouter>
    <AppProvider>
      <MyNavBar/>
     <Home/>
    </AppProvider>
    </BrowserRouter>
  );
}

export default App;
