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
  wallet: [
    {
      id: 1,
      type: 1,
      category: "Transporte",
      amount: 100,
      mes: "January"
    },
    {
      id: 2,
      type: 0,
      category: "Transporte",
      amount: 200,
      mes: "January"
    },
    {
      id: 3,
      type: 1,
      category: "transporte",
      amount: 100,
      mes: "October"
    },
    {
      id: 4,
      type: 1,
      category: "Comida",
      amount: 150,
      mes: "October"
    },
    {
      id: 5,
      type: 0,
      category: "Servicios basicos",
      amount: 103,
      mes: "June"
    },
    {
      id: 6,
      type: 0,
      category: "Comida",
      amount: 500,
      mes: "June"
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
