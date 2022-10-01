
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/assets/css/styles.css";
import MyNavBar from "./components/MyNavBar";

import AppProvider from "./context/AppContext";
import Home from "./pages/Home";
import Favorites from './pages/Favorites'
import NotFound from "./pages/NotFound";


function App() {


  return (
    <BrowserRouter>
    <MyNavBar/>
    <AppProvider>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/favoritos" element={ <Favorites/> }/>
      <Route path="*" element={ <NotFound/> }/>
    </Routes>
    
    </AppProvider>
    </BrowserRouter>
  );
}

export default App;
