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

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "ADD": {
      return {
        ...state,
        wallet: { ...state.wallet, [action.payload.id]: action.payload }
      };
    }
    case "TOTAL": {
      return {
        ...state,
        totalMonthly: {
          ...state.totalMonthly,
          [action.payload.id]: {
            ...state.totalMonthly[action.payload.id],
            total: action.payload.total
          }
        }
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
