import React, { Component } from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import Smartphone from "./Smartphone";
import Laptop from "./Laptop";
import Promotion from "./Promotion";

export default class BaiTapLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <Smartphone />
        <Laptop />
        <Promotion />
      </div>
    );
  }
}
