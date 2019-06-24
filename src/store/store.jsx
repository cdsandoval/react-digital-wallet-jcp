import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import logger from "redux-logger";
import offlineSync from "../middlewares/offline-sync";

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (localStorage.getItem("version") !== process.env.REACT_APP_VERSION) {
  localStorage.removeItem("state");
}

const initialState = {
  type: {
    withdraw: ["Transporte", "Comida", "Servicios basicos", "Extras"],
    deposit: ["Sueldo Fijo", "Extras"],
    month: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
  },
  wallet: {},
  totalMonthly: {}
};

const preloadedState = JSON.parse(
  localStorage.getItem("state") || JSON.stringify(initialState)
);

const store = createStore(
  reducer,
  preloadedState,
  composer(applyMiddleware(offlineSync, logger))
);

export default store;
