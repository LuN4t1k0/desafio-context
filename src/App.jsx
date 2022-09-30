
import "../src/assets/css/styles.css";
import MyContainer from "./components/MyContainer";
import AppProvider from "./context/AppContext";

function App() {


  return (
    <AppProvider>
      <MyContainer/>
    </AppProvider>
  );
}

export default App;
