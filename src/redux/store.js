import { createStore } from "redux";
import transactionReducer from "./transactions/transactionReducer";

const store = createStore(
  transactionReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
