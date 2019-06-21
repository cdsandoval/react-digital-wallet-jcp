// withdraw: ["Transporte", "Comida", "Servicios basicos"],
// deposit: ["Sueldo", "Fijo"]
/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { redirectTo } from "@reach/router";

import Button from "../components/button";

// const initialWallet = [
//   {
//     id: 1,
//     type: 1,
//     category: "transporte",
//     amount: 100,
//     mes: "Enero"
//   },
//   {
//     id: 2,
//     type: 0,
//     category: "transporte",
//     amount: 200,
//     mes: "Enero"
//   },
//   {
//     id: 3,
//     type: 1,
//     category: "transporte",
//     amount: 100,
//     mes: "Enero"
//   },
//   {
//     id: 4,
//     type: 1,
//     category: "Trans",
//     amount: 150,
//     mes: "Enero"
//   },
//   {
//     id: 5,
//     type: 0,
//     category: "Cosa de locos",
//     amount: 103,
//     mes: "Enero"
//   },
//   {
//     id: 6,
//     type: 0,
//     category: "Cositas",
//     amount: 500,
//     mes: "Enero"
//   }
// ];

function Home() {
  return (
    <>
      <div>
        <Button path="/add">Add</Button>
        <Button path="/report">Report</Button>
        <Button path="/report/idMonth">Report of the Month</Button>
      </div>
      <div>
        <table>
          <tr>
            <th>Category</th>
            <th>Amount</th>
          </tr>
          {initialWallet.map(wallet => {
            console.log(wallet.amount);
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

export default Home;
