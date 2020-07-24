import React, { Component } from 'react'
import { connect } from 'react-redux'


class GioHangRedux extends Component {
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
                    <td>{(sp.soLuong * sp.gia).toLocaleString()}</td>
                    <td>
                        <button>Xóa</button>
                    </td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div>
                <h3>Giỏ hàng</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Hình ảnh</th>
                            <th>Giá bán</th>
                            <th>Số lượng</th>
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

//hàm có nhiệm vụ biến đổi state của redux trở thành props của component 
const mapStateToProps = (state) => {//state ứng tới rootReducer
    return {
        gioHang: state.GioHangReducer.stateGioHang
    }
}

export default connect(mapStateToProps)(GioHangRedux)
