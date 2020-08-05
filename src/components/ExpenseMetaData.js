import React from "react";
import { useSelector } from "react-redux";

function ExpenseMetaData() {
  const transactionHistory = useSelector((state) => state.transactionHistory);
  const expenseDetails = transactionHistory.map((e) => parseInt(e.amount));
  console.log(expenseDetails);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  //     return
  //      state.transactionHistory.map((e)=>( key=e.id [e.amount])
  // )})

  const totalBalance = expenseDetails.reduce(reducer, 0);

  const incomeArray = expenseDetails.filter(
    (expenseDetails) => expenseDetails > 0
  );
  const income = incomeArray.reduce(reducer, 0);

  const expenseArray = expenseDetails.filter(
    (expenseDetails) => expenseDetails < 0
  );
  const expense = Math.abs(expenseArray.reduce(reducer, 0));

  return (
    <div>
      <div className="balance">
        <h4>YOUR BALANCE</h4>
        <h1>₹{totalBalance}</h1>
      </div>
      <div className="incomeExpenseCard">
        <div className="income">
          <h4>INCOME</h4>
          <p>₹{income}</p>
        </div>
        <div className="expense">
          <h4>EXPENSE</h4>
          <p>₹{expense}</p>
        </div>
      </div>
    </div>
  );
}
export default ExpenseMetaData;
