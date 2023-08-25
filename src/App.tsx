import "./App.scss";
import BankDepositFormHeader from "./components/bankdepositformheader/BankDepositFormHeader";
import BankDepositFormTable from "./components/bankdepositformtable/BankDepositFormTable";

function App() {

  return (
    <div className="App">
      <BankDepositFormHeader />
      <BankDepositFormTable />
    </div>
  );
}

export default App;
