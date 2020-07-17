import React, { Component } from 'react'

export default class ChildProductGiay extends Component {
    render() {
        let { productItem } = this.props;
        return (
            <div className="card text-left my-2">
                <img className="card-img-top" src={productItem.image} alt />
                <div className="card-body">
                    <h4 className="card-title" >{productItem.name}</h4>
                    <p className="card-text">{productItem.price}</p>
                    <button classname="btn btn-dark">Thêm vào giỏ</button>
                </div>
            </div>

        )
    }
}
