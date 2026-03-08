import React, { useState } from "react";

const TranscationForm = ({ addTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("No data");
      return;
    }

    addTransaction(text, amount);
    setText("");
    setAmount(0);
  };
  console.log(text);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            value={text}
            placeholder="ชื่อรายการ..."
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            value={amount}
            placeholder="กรอกจำนวนเงิน"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TranscationForm;
