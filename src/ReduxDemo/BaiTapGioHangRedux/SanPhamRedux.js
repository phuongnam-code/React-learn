import React, { Component } from 'react'
import { connect } from 'react-redux'

class SanPhamRedux extends Component {
    render() {
        let { sp } = this.props;
        return (
            <div className="card text-left">
                <img className="card-img-top" src={sp.hinhAnh} alt />
                <div className="card-body">
                    <h4 className="card-title">{sp.tenSP}</h4>
                    <p className="card-text">{sp.giaBan.toLocaleString()}</p>
                    <button onClick={() => {
                        { this.props.themGioHang(sp) }
                    }}>Thêm vào giỏ</button>
                </div>
            </div>
        )
    }
}

//hàm tạo ra props là phương thức đưa dữ liệu lên reducer thông qua dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        themGioHang: (spClick) => {
            let spGH = {
                maSP: spClick.maSP,
                tenSP: spClick.tenSP,
                gia: spClick.giaBan,
                soLuong: 1,
                hinhAnh: spClick.hinhAnh
            }
            let action = {
                type: 'THEM_GIO_HANG',// thuộc tính 
                spGH: spGH
            }
            //dùng hàm dispatch gửi giá trị
            dispatch(action)
        }
    }
}
export default connect(null, mapDispatchToProps)(SanPhamRedux)