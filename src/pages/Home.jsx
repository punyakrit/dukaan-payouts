import React from "react";
import TopSection from "../components/TopSection";
import Transaction from "../components/Transaction";

function Home() {
  return (
    <div className="bg-slate-100 w-full h-full">
      <TopSection />
      <Transaction />
    </div>
  );
}

export default Home;
