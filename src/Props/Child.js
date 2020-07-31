import React, { Component } from 'react'

export default class Child extends Component {
    //this.props: là thuộc tính  có sẵn của compnent nhận giá trị từ component truyền vào
    // và không thể gán lại giá trị 
    render() {
        let { id, name, price, img } = this.props.sanPham;
        return (
            <div className="card text-left">
                <img className="card-img-top" src={img} alt='' />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <span>ID: {id}</span>
                    <p className="card-text">{price}</p>
                </div>
            </div>
        )
    }
}
