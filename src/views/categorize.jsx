/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import Select from "../components/select";

function Categorize() {
  function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Select name="types" />
        <Select name="category" />
        <Select name="month" />
        <p>Resultado</p>
        <button type="submit" css={{ display: "block", margin: "30px auto" }}>
          Search
        </button>
      </form>
    </div>
  );
}

export default Categorize;
