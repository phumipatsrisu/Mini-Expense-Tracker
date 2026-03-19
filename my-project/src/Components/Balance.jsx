import React from "react";

const Balance = ({ transaction }) => {
  const amounts = transaction.map((item) => item.amount);
  console.log("amounts :", amounts);

  const total = amounts.reduce((acc, item) => (acc += item), 0);
  console.log("total:", total);

  return (
    <div>
      <div className="text-center my-4">
        <h4 className="text-gray-500 uppercase">ยอดเงินคงเหลือ</h4>
        <h1
          className={`text-3xl font-bold ${total >= 0 ? "text-green-500" : "text-red-500"}`}
        >
          ฿{total.toLocaleString()}
        </h1>
      </div>
    </div>
  );
};

export default Balance;
