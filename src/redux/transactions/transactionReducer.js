import { ADD_TRANSACTION, REMOVE_TRANSACTION } from "./transactionTypes";

const initialState = {
  transactionHistory: [],
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRANSACTION: {
      // payload Sample =  {
      //       id: 1596199359844,
      //       name: "txt",
      //       amount: "1",
      //     }

      const updatedTransactionHistory = [
        ...state.transactionHistory,
        action.payload,
      ];

      return { ...state, transactionHistory: updatedTransactionHistory };
    }

    case REMOVE_TRANSACTION: {
      //  payload sample ="1596199359844"
      const updatedTransactionList = state.transactionHistory.filter(
        (transactionDetails) => transactionDetails.id !== action.payload
      );
      return {
        ...state,
        transactionHistory: updatedTransactionList,
      };
    }
    default:
      return state;
  }
};
// console.log(transactionHistory);

export default transactionReducer;
