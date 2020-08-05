import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../redux/transactions/transactionAction";

function AddTransaction() {
  const [transactionName, setTransactionName] = useState("");
  const [transactionValue, setTransactionValue] = useState(0);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const transactionDetails = {
      id: new Date().getTime(),
      name: transactionName,
      amount: transactionValue,
    };

    dispatch(addTransaction(transactionDetails));
  };
  return (
    <div>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={transactionName}
            onChange={(e) => setTransactionName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>
            Amount <br />
            (negative - expense, positive - income)
            <br />
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={transactionValue}
            onChange={(e) => setTransactionValue(e.target.value)}
          />
        </div>
        <button className="Addbutton" type="submit">
          Add transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransaction;
