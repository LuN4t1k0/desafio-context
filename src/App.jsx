
import "../src/assets/css/styles.css";

import AppProvider from "./context/AppContext";
import Home from "./pages/Home";

function App() {


  return (
    <AppProvider>
     <Home/>
    </AppProvider>
  );
}

export default App;
