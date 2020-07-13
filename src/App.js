import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BaiTapLayout from "./Components/BaiTapLayout/BaiTapLayout";
import DataBinding from "./DataBinding/DataBinding";

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout /> */}
      <DataBinding />
    </div>
  );
}

export default App;
