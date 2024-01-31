import React from "react";
import TopSection from "../components/TopSection";
import Transaction from "../components/Transaction";
import PageChange from "../components/PageChange";
import TopNav from "../components/TopNav";

function Home() {
  return (
    <div className="bg-slate-100 w-full h-full">
      <TopNav/>
      <TopSection />
      <Transaction />
    </div>
  );
}

export default Home;
