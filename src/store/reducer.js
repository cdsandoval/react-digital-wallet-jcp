const initialState = {
  type: {
    withdraw: ["Transporte", "Comida", "Servicios basicos", "Extras"],
    deposit: ["Sueldo Fijo", "Extras"]
  },
  wallet: [],
  totalMonthly: []
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "ADD": {
      return {
        ...state,
        wallet: {
          ...state.wallet,
          [action.payload.id]: action.payload
        }
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
