import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";

const TransactionList = ({ transactions }) => {
  // const assignColorToTransctionstatus = (transacton) => {
  //   if (transacton.type === "cr") {
  //     return "p-3 mb-2 bg-success text-white";
  //   } else if (transacton.type === "dr") {
  //     return "p-3 mb-2 bg-warning text-dark";
  //   }
  // };

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  return (
    <div className="container">
      {transactions && transactions.length === 0 ? (
        <h2>You currently have no transacton created</h2>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Qty</th>
              <th>Category</th>
              <th>Transaction Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions &&
              transactions.map((transaction) => (
                <tr key={transaction._id}>
                  <td>{transaction._id}</td>
                  <td>-</td>
                  <td>{transaction.qty}</td>
                  <td>{transaction.category}</td>
                  <td>{transaction.description}</td>
                  <td>R {addDecimals(transaction.lineTotal)}</td>
                  <td>
                    <LinkContainer to={`/transactions/${transaction._id}`}>
                      <Button className="btn-sm" varaint="light">
                        Details
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TransactionList;
