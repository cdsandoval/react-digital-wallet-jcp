const initialState = {
  type: {
    withdraw: ["Transporte", "Comida", "Servicios basicos", "Extras"],
    deposit: ["Sueldo Fijo", "Extras"]
  },
  wallet: [
    {
      id: 1,
      type: 1,
      category: "transporte",
      amount: 100,
      mes: "Enero"
    },
    {
      id: 2,
      type: 0,
      category: "transporte",
      amount: 200,
      mes: "Enero"
    },
    {
      id: 3,
      type: 1,
      category: "transporte",
      amount: 100,
      mes: "Enero"
    },
    {
      id: 4,
      type: 1,
      category: "Trans",
      amount: 150,
      mes: "Enero"
    },
    {
      id: 5,
      type: 0,
      category: "Cosa de locos",
      amount: 103,
      mes: "Enero"
    },
    {
      id: 6,
      type: 0,
      category: "Cositas",
      amount: 500,
      mes: "Enero"
    }
  ],
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
