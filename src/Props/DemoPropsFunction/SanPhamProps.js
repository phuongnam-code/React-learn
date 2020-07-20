import React, { Component } from 'react'

export default class SanPhamProps extends Component {
    render() {
        let { sp } = this.props;
        return (
            <div className="card text-left">
                <img className="card-img-top" src={sp.hinhAnh} alt />
                <div className="card-body">
                    <h4 className="card-title">{sp.tenSP}</h4>
                    <p className="card-text">{sp.giaBan}</p>
                    <button onClick={() => {
                        this.props.xemChiTiet(sp);
                    }}>Xem chi tiết</button>
                </div>
            </div>
        )
    }
}
