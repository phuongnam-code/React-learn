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
                        <img src={sp.hinhAnh} style={{ width: '10%' }} alt='' />
                    </td>
                    <td>
                        <button onClick={() => {
                            this.props.tangGiamSoLuong(sp.maSP, true)
                        }}>+</button>
                        <button onClick={() => {
                            this.props.tangGiamSoLuong(sp.maSP, false)
                        }}>-</button>
                        {sp.soLuong}

                    </td>
                    <td>{sp.gia}</td>
                    <td>{(sp.soLuong * sp.gia).toLocaleString()}</td>
                    <td>
                        <button onClick={() => {
                            this.props.xoaGioHang(sp.maSP)
                        }}>Xóa</button>
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
                            <th>Giá bán</th>
                            <th>Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan='4'></td>
                            <th>Tổng tiền</th>
                            <td colSpan='2'>{this.props.gioHang.reduce((tongTien, spGH, index) => {
                                return tongTien += spGH.soLuong * spGH.gia;
                            }, 0).toLocaleString()}</td>
                        </tr>
                    </tfoot>
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
const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang: (maSP) => {
            console.log(maSP);
            let action = {
                type: 'XOA_GIO_HANG',
                maSP: maSP
            }
            // dùng hàm dispatch của redux đưa dữ liệu lên reducer
            dispatch(action);
        },
        tangGiamSoLuong: (maSP, tangGiam) => {
            // tangGiam = true là tăng số lượng, 
            // tangGiam = false là giảm số lượng.
            let action = {
                type: 'TANG_GIAM_SO_LUONG',
                maSP: maSP,
                tangGiam: tangGiam
            }
            //xử lý dispatch
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux)
