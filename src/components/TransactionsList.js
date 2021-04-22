import React from "react";
import generatePDF from "../services/generatePDF";
import TransactionScreen from "./TransactionScreen";
import Transactions from "../Transactions";

const TransactionList = () => {
  const reportTransactions = Transactions.filter((transaction) => transaction.type === "dr");

  return (
    <div>
      <div className="container mb-4 mt-4 p-3">
        <div className="row">
          <button className="btn btn-primary" onClick={() => generatePDF(reportTransactions)}>
            Generate monthly report
          </button>
        </div>
      </div>
      <TransactionScreen transactions={Transactions} />
    </div>
  );
};

export default TransactionList;
