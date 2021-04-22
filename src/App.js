import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import TransactionsList from "./components/TransactionsList";

function App() {
  return (
    <Router>
      <div className="App">
        <TransactionsList />
      </div>
    </Router>
  );
}

export default App;
