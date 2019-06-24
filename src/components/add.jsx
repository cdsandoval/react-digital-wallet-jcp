/** @jsx jsx */
import { jsx } from "@emotion/core";
import { connect } from "react-redux";
import { Add, Total } from "../store/actions";
import { navigate } from "@reach/router";
import {
  Container,
  styledSelect,
  submitButton,
  inputAmount
} from "../utils/add-css";

function AddComponent(props) {
  function setAmount(e) {
    e.preventDefault();
    const payload = {
      type: e.currentTarget.type.value === "withdraw" ? 0 : 1,
      category: e.currentTarget.category.value,
      amount: Number(e.currentTarget.amount.value)
    };
    props.AddTest(payload);
    navigate("/");
  }

  return (
    <div css={Container}>
      <h1>ADD AMOUNT</h1>
      <form onSubmit={setAmount}>
        <select css={styledSelect} defaultValue="select" name="type">
          <option value="select" disabled hidden>
            Choose One
          </option>
          <option value="withdraw">Withdraw</option>
          <option value="deposit">Deposit</option>
        </select>
        <select defaultValue="select" css={styledSelect} name="category">
          <option value="select" disabled hidden>
            Choose One
          </option>
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
          name="amount"
          id="amount"
          autoFocus
          autoComplete="off"
        />
        <button css={submitButton} type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

function mapDispatch(dispatch) {
  return {
    AddTest(payload) {
      return dispatch(Add(payload));
    }
  };
}

export default connect(
  null,
  mapDispatch
)(AddComponent);
