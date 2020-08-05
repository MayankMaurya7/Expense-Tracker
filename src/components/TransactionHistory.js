import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTransaction } from "../redux/transactions/transactionAction";

function TransactionHistory() {
  const dispatchRemoveTransaction = useDispatch();
  const transactionHistory = useSelector((state) => {
    console.log(state);
    return state.transactionHistory;
  });

  //   const transactionClass = (transactionHistory) => {
  //     const sign = Math.sign(transactionHistory.amount);
  //     return sign === -1 ? "redClass" : "greenClass";
  //   };

  console.log(transactionHistory);

  return (
    <div className="history-Container">
      <h3>History</h3>
      <section className="history-Wrapper">
        {transactionHistory.length &&
          transactionHistory.map((transactionDetails) => (
            <div key={transactionDetails.id} className="trasaction">
              <p>{transactionDetails.name}</p>
              <p>₹{transactionDetails.amount}</p>
              <button
                className="removeButton"
                onClick={() =>
                  dispatchRemoveTransaction(
                    removeTransaction(transactionDetails.id)
                  )
                }
              >
                X
              </button>
            </div>
          ))}
      </section>
    </div>
  );
}

export default TransactionHistory;
