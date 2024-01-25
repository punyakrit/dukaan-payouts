import React from "react";
import TransactionDetails from "./TransactionDetails";

function Transaction() {
  return (
    <div className="mt-8 m-8">
      <div>
        <h1 className="text-xl font-medium text-[#1A181E]">
          Transactions | This Month
        </h1>
      </div>
      <div>
        <TransactionDetails />
      </div>
      
    </div>
  );
}

export default Transaction;
