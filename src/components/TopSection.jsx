import React, { useState } from "react";
import TopCards from "./TopCards";

function TopSection() {
  return (
    <div className="mr-8 ml-8">
      <div className="flex justify-between pt-24">
        <h1 className="text-xl font-medium ">OverView</h1>
        <div className="dropdown">
          <select className="text-lg text-gray-500 py-1 px-3 ">
            <option>Last Month</option>
          </select>
        </div>
      </div>
      <div className="flex mt-6">
        <TopCards title={"Online Orders"} value={"231"} />
        <TopCards title={"Amount recieved"} value={"₹23,312.19"} />
      </div>
    </div>
  );
}

export default TopSection;
