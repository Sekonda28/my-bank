import "./App.css";
import Header from "./components/Header";
import Accounts from "./components/Accounts";
import data from "./assets/account-data.json";

const App = () => {
  return (
    <div className="App">
      <Header />
      {data.map((elem, index) => {
        return (
          <Accounts
            key={index}
            name={elem.name}
            balance={elem.balance}
            color={elem.color}
            operations={elem.operations}
          />
        );
      })}
    </div>
  );
};

export default App;
