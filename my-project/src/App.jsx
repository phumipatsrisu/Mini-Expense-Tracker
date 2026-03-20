import React, { useState } from "react";
import TranscationForm from "./Components/TranscationForm";
import TransactionList from "./Components/TransactionList";
import Balance from "./Components/Balance";

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

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((item) => item.id !== id));
  };
  return (
    <div>
      <Balance transactions={transactions} />
      <h2>บันทึกรายจ่าย</h2>
      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />
      <TranscationForm addTransaction={addTransaction} />
    </div>
  );
};

export default App;
