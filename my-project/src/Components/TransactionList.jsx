import React from "react";

const TransactionList = ({ transactions }) => {
  console.log(transactions);

  return (
    <div>
      <h3>ประวัติรายการ</h3>
      <p>
        {transactions.length === 0
          ? "ยังไม่มีรายการ"
          : `มีทั้งหมด ${transactions.length} รายการ`}
      </p>
      <ul>
        {transactions.map((item) => (
          <li key={item.id}>
            {item.text} {item.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
