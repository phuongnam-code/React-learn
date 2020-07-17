import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BaiTapLayout from "./Components/BaiTapLayout/BaiTapLayout";
import DataBinding from "./DataBinding/DataBinding";
import EventBinding from "./EventBinding/EventBinding";
import HandleState from "./HandleState/HandleState";
import BaiTapChonXe from "./HandleState/BaiTapChonXe";
import RenderWithMap from "./renderWithMap/RenderWithMap";
import EXRenderMap from "./EXRenderMap/EXRenderMap";
import DemoProps from "./Props/DemoProps";
import BTProducList from "./Props/BTProducList";

function App() {
    return (
        <div className="App">
            {/* <BaiTapLayout /> */}
            {/* <DataBinding /> */}
            {/* <EventBinding /> */}
            {/* <HandleState /> */}
            {/* <BaiTapChonXe /> */}
            {/* <RenderWithMap /> */}
            {/* <EXRenderMap /> */}
            {/* <DemoProps /> */}
            <BTProducList />
        </div>
    );
}

export default App;
