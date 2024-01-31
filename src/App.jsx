import React from "react";
import Home from "./pages/Home";
import TopNav from "./components/TopNav";
import SideSections from "./components/SideSections";

function App() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <SideSections/>
      </div>
      <div className="col-span-10">
        

        <Home />
      </div>
    </div>
  );
}

export default App;
