/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";

function AddComponent({ setAmount }) {
  const Container = {
    display: "flex",
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100vh"
  };

  const styledSelect = {
    alignItems: "center",
    justifyContent: "center",
    width: "500px",
    padding: "1.5em",
    background: "skyblue",
    borderRadius: "0.5em",
    margin: "15px auto"
  };

  const inputAmount = {
    margin: "1em 0",
    fontSize: "20px",
    paddingTop: "10px",
    paddingBottom: "10px",
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

  return (
    <div css={Container}>
      <h1>ADD AMOUNT</h1>
      <select css={styledSelect}>
        <option value="Select type">Select type</option>
        <option value="Withdraws">Withdraws</option>
        <option value="Ingresses">Ingresses</option>
      </select>
      <select id="selectType" css={styledSelect}>
        <option value="Select type">Select category</option>
        <option value="Basics">Basics</option>
        <option value="Transport">Transport</option>
        <option value="Food">Food</option>
        <option value="More">More</option>
      </select>
      <input
        css={inputAmount}
        aria-label="Input to get amount"
        placeholder="Enter the amount"
        type="text"
        required
        name="company"
        id="company"
        autoFocus
        autoComplete="off"
      />
      <button css={submitButton} type="submit">
        Add
      </button>
    </div>
  );
}

export default AddComponent;
