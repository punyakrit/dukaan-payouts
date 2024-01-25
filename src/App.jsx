import React from "react";
import Home from "./pages/Home";
import TopNav from "./components/TopNav";

function App() {
  return (
    <div>
      <TopNav />
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
