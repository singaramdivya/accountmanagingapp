import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const AddTransaction = ({ addTransaction }) => {
  const [type, setType] = useState("credit");
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      date: new Date().toLocaleDateString("en-US"),
      description,
      amount,
      type,
    };
    addTransaction(newTransaction);
    navigate("/");
  };

  return (
    <div className="add-transaction">
      <h2>New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <label>Transaction Type:</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="credit">Credit</option>
            <option value="debit">Debit</option>
          </select>
        </div>
        <div className="container">
          <label>Amount:</label>
          <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} required />
        </div>
        <div className="container">
          <label>Description:</label>
          <textarea rows={6} cols={38} type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div className="buttons">
          <button type="submit">Save</button>
          <button type="button" onClick={() => navigate("/")}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
