const Container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100vh"
};

const styledSelect = {
  width: "200px",
  padding: "1em",
  display: "block",
  background: "skyblue",
  borderRadius: "0.5em",
  margin: "5px auto"
};

const inputAmount = {
  margin: "1em 0",
  fontSize: "20px",
  paddingTop: "10px",
  paddingBottom: "10px",
  display: "block",
  borderRadius: "4px",
  outline: "none",
  border: "none",
  borderBottom: "1px solid #ddd",
  width: "500px",
  textAlign: "center",
  "&:focus": {
    border: "1px solid red",
    background: "##e5f1f3"
  }
};

const submitButton = {
  lineHeight: "1.5em",
  background: "#757575",
  border: "none",
  color: "white",
  fontSize: "20px",
  fontWeight: "bold",
  padding: "0.2em",
  cursor: "pointer",
  borderRadius: "0.25rem",
  textAlign: "center",
  width: "150px",
  "&:hover": {
    backgroundColor: "#484848"
  }
};

export { submitButton, inputAmount, styledSelect, Container };
