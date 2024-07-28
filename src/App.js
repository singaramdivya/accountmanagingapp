import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import "./App.css";

const App = () => {
  const [transactions, setTransactions] = useState([
    { date: "02/20/2020", description: "Misc Expenses", amount: 3000, type: "debit" },
    { date: "02/18/2020", description: "Printing sheets for office documents", amount: 285, type: "debit" },
    { date: "02/18/2020", description: "Snacks Party", amount: 500, type: "debit" },
    { date: "02/17/2020", description: "Credited to Office Account", amount: 5000, type: "credit" }
  ]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <>
     
    <Router>
      <div className="app">
      <h1>Transaction System</h1>
      <nav>
        <Link to="/">Office Transactions</Link>
        <Link to="/add">Add Transaction</Link>
      </nav>
        <Routes>
          <Route path="/" element={<TransactionList transactions={transactions} />} />
          <Route path="/add" element={<AddTransaction addTransaction={addTransaction} />} />
        </Routes>
      </div>
    </Router>
    </>
  );
};

export default App;

