import React, { useState } from "react";
import TranscationForm from "./Components/TranscationForm";
import TransactionList from "./Components/TransactionList";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (text, amount) => {
    const newTransaction = {
      id: Date.now(),
      text: text,
      amount: +amount,
    };
    setTransactions([newTransaction, ...transactions]);
  };
  return (
    <div>
      <h2>บันทึกรายจ่าย</h2>
      <TransactionList transactions={transactions} />
      <TranscationForm addTransaction={addTransaction} />
    </div>
  );
};

export default App;
