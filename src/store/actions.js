function Add(data) {
  const id = Date.now();
  const date = new Date();
  const month = date.toLocaleDateString("en-us", { month: "long" });
  return {
    type: "ADD",
    payload: {
      id,
      type: data.type,
      category: data.category,
      amount: data.amount,
      month
    }
  };
}

function Total(data) {
  return {
    type: "TOTAL",
    payload: {
      month: data.month,
      total: data.total
    }
  };
}

export { Add, Total };
