
import "../src/assets/css/styles.css";
import Gallery from "./components/Gallery";
import AppProvider from "./context/AppContext";

function App() {


  return (
    <AppProvider>
      <Gallery/>
    </AppProvider>
  );
}

export default App;
