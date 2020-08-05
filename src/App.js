import React from "react";
import "./App.css";
import AddTransaction from "./components/AddTransaction";
import { Provider } from "react-redux";
import store from "./redux/store";
import TransactionHistory from "./components/TransactionHistory";
import ExpenseMetaData from "./components/ExpenseMetaData";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <h2>Expense Tracker</h2>
        <div className="container">
          <ExpenseMetaData />
          <TransactionHistory />
          <AddTransaction />
        </div>
      </Provider>
    </div>
  );
}

export default App;
