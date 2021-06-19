import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";

// // 1. Store - global state
// // 2. Action - define what to do
// const petIncrement = () => {
//   return {
//     type: "PET_INCREASED",
//   };
// };

// const petDecrement = () => {
//   return {
//     type: "PET_DECREASED",
//   };
// };
// // 3. Reducer - describe how an action change from one state into another
// //            - reducer will check which action is called and store will be modified based on the action
// const petCounter = (state = 0, action) => {
//   switch (action.type) {
//     case "PET_INCREASED":
//       return state + 1;
//     case "PET_DECREASED":
//       return state - 1;
//     default:
//       return state;
//   }
// };

// let store = createStore(petCounter);

// store.subscribe(() => console.log(store.getState()));

// // 4. Dispath - perform the action to reducer
// store.dispatch(petIncrement());
// store.dispatch(petIncrement());
// store.dispatch(petDecrement());

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore)(reducers);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
