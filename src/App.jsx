
import "../src/assets/css/styles.css";
import MyNavBar from "./components/MyNavBar";

import AppProvider from "./context/AppContext";
import Home from "./pages/Home";

function App() {


  return (
    <AppProvider>
      <MyNavBar/>
     <Home/>
    </AppProvider>
  );
}

export default App;
