/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import Select from "./select";

function Categorize() {
  function onSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <Select name="withdraw" />
        <Select name="deposit" />
        <Select name="month" />
        <input
          type="text"
          name="money"
          css={{ display: "block", margin: "30px auto" }}
        />
        <button type="submit" css={{ display: "block", margin: "30px auto" }}>
          Search
        </button>
      </form>
    </div>
  );
}

export default Categorize;
