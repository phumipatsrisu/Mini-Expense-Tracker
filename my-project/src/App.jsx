import React, { useState } from "react";

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
    </div>
  );
};

export default App;
