import "./App.css";
import Header from "./components/Header";
import Accounts from "./components/Accounts";
import data from "./assets/account-data.json";

const App = () => {
  return (
    <div className = "App">
      <Header />
      <Accounts />
    </div>
  );
};

export default App;
