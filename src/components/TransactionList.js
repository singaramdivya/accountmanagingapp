import React from "react";
import "./styles.css";

const TransactionList = ({ transactions }) => {
  let balance = 0;

  const calculateBalance = (transaction) => {
    if (transaction.type === "credit") {
      balance += transaction.amount;
    } else {
      balance -= transaction.amount;
    }
    return balance;
  };

  return (
    <div className="transaction-list">
      <h2>Office Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Credit</th>
            <th>Debit</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.type === "credit" ? transaction.amount : ""}</td>
              <td>{transaction.type === "debit" ? transaction.amount : ""}</td>
              <td>{calculateBalance(transaction)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
