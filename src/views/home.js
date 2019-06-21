// withdraw: ["Transporte", "Comida", "Servicios basicos"],
// deposit: ["Sueldo", "Fijo"]
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { connect } from "react-redux";

import Button from "../components/button";

function Home(props) {
  return (
    <>
      <div>
        <Button path="/add">Add</Button>
        <Button path="/report">Report</Button>
        {/* TODO: Refactor report link */}
        <Button path="/report/idMonth">Report of the Month</Button>
      </div>
      <div>
        <table>
          <tr>
            <th>Category</th>
            <th>Amount</th>
          </tr>
          {props.wallet.map(wallet => {
            return (
              <tr>
                <td>{wallet.category}</td>
                <td>
                  {wallet.type ? `+ ${wallet.amount}` : `- ${wallet.amount}`}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

function mapState(state) {
  return {
    wallet: state.wallet
  };
}

export default connect(
  mapState,
  null
)(Home);
