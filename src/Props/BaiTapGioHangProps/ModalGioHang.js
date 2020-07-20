import React, { Component } from 'react'

export default class ModalGioHang extends Component {

    renderGioHang = () => {
        let { gioHang } = this.props;
        return gioHang.map((sp, index) => {
            return (
                <tr key={index}>
                    <td>{sp.maSP}</td>
                    <td>{sp.tenSP}</td>
                    <td>
                        <img src={sp.hinhAnh} style={{ width: '10%' }} />
                    </td>
                    <td>{sp.soLuong}</td>
                    <td>{sp.gia}</td>
                    <td>{sp.soLuong * sp.gia}</td>
                    <td>
                        <button>Xóa</button>
                    </td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div className='container my-3'>
                <h3>Giỏ hàng</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <th>Hình ảnh</th>
                            <th>Số lượng</th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
                </table>
            </div>
        )
    }
}
