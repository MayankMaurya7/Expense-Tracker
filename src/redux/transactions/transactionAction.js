import { ADD_TRANSACTION } from "./transactionTypes";
import { REMOVE_TRANSACTION } from "./transactionTypes";

export const addTransaction = (transactionData) => {
  console.log(transactionData);
  return {
    type: ADD_TRANSACTION,
    payload: transactionData,
  };
};
export const removeTransaction = (transactionData) => {
  console.log(transactionData);
  return {
    type: REMOVE_TRANSACTION,
    payload: transactionData,
  };
};
