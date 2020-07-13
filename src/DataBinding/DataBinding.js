import React, { Component } from "react";
import cssDataBinding from "./DataBinding.module.css";

export default class DataBinding extends Component {
  //thuộc tính
  name = "Phương Nam";
  img = "https://picsum.photos/300/200";
  //phương thức
  renderImg = () => {
    return (
      <div className="card w-25 container">
        <h1 className={cssDataBinding.title}>Đây là hình ảnh</h1>
        <img className="card-img-top" src={this.img} alt="123" />
      </div>
    );
  };
  render() {
    let title = "Hello Phương Nam";
    // let imgSRC = "https://picsum.photos/300/200";
    let renderText = () => {
      return <h1 style={{ color: "red" }}>Phương Nam</h1>;
    };
    return (
      <div>
        <h1>{title}</h1>
        {/* <img src={imgSRC} alt="123" /> */}
        {renderText()}
        <p>Name: {this.name}</p>
        {this.renderImg()}
      </div>
    );
  }
}
