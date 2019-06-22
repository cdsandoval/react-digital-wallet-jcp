/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { connect } from "react-redux";

function Select(props) {
  let list;
  switch (props.name) {
    case "category":
      list = props.category;
      break;
    case "types":
      list = props.types;
      break;
    case "month":
      list = props.month;
      break;
    default:
      break;
  }

  return (
    <>
      <select name={props.name} id={props.name} defaultValue="selected">
        <option value="selected" disabled hidden>
          Choose {props.name}
        </option>
        {list.map((value, index) => {
          return (
            <option key={index} value={value}>
              {value}
            </option>
          );
        })}
      </select>
    </>
  );
}

function mapState(state) {
  return {
    category: state.type.category,
    month: state.type.month,
    types: state.type.types
  };
}

export default connect(
  mapState,
  null
)(Select);
