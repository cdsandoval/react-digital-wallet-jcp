/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

const type = {
  withdraw: ["Transporte", "Comida", "Servicios basicos"],
  deposit: ["Sueldo", "Fijo"]
};

function Categorize() {
  function onSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <select
          name="type"
          id="type"
          defaultValue="selected"
          css={{ display: "block", margin: "30px auto" }}
        >
          <option value="selected" disabled hidden>
            Choose here
          </option>

          {type.withdraw.map((value, index) => {
            return (
              <option key={index} value={value}>
                {value}
              </option>
            );
          })}
        </select>

        <select
          name="categorize"
          id="categorize"
          defaultValue="selected"
          css={{ display: "block", margin: "30px auto" }}
        >
          <option value="selected" disabled hidden>
            Choose here
          </option>

          {type.deposit.map((value, index) => {
            return (
              <option key={index} value={value}>
                {value}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          name="money"
          css={{ display: "block", margin: "30px auto" }}
        />
        <button type="submit" css={{ display: "block", margin: "30px auto" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Categorize;
