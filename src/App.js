import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BaiTapLayout from "./Components/BaiTapLayout/BaiTapLayout";
import DataBinding from "./DataBinding/DataBinding";
import EventBinding from "./EventBinding/EventBinding";
import HandleState from "./HandleState/HandleState";
import BaiTapChonXe from "./HandleState/BaiTapChonXe";

function App() {
    return (
        <div className="App">
            {/* <BaiTapLayout /> */}
            {/* <DataBinding /> */}
            {/* <EventBinding /> */}
            {/* <HandleState /> */}
            <BaiTapChonXe />
        </div>
    );
}

export default App;
