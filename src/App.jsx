
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/assets/css/styles.css";
import MyNavBar from "./components/MyNavBar";

import AppProvider from "./context/AppContext";
import Home from "./pages/Home";
import Favorites from './pages/Favorites'


function App() {


  return (
    <BrowserRouter>
    <MyNavBar/>
    <AppProvider>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/favoritos" element={ <Favorites/> }/>
      <Route path="*" element={ <h1>:( Pagina no encontrada</h1> }/>
    </Routes>
    
    </AppProvider>
    </BrowserRouter>
  );
}

export default App;
