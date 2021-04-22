import React from "react";
import generatePDF from "../services/generatePDF";
import TransactionScreen from "./TransactionScreen";
import Transactions from "../Transactions";
import { Row, Container, Button } from "react-bootstrap";

const TransactionList = () => {
  const reportTransactions = Transactions.filter((transaction) => transaction.type === "dr");

  return (
    <>
      <Container className=" mb-4 mt-4 p-3">
        <Row>
          <Button className="btn-sm btn-primary" onClick={() => generatePDF(reportTransactions)}>
            Generate monthly report
          </Button>
        </Row>
      </Container>
      <TransactionScreen transactions={Transactions} />
    </>
  );
};

export default TransactionList;
