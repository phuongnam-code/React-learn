import React, { Component } from 'react'
import { connect } from 'react-redux'

class TableNguoiDung extends Component {
    render() {
        return (
            <div className='container'>
                <h3>Danh sách người dùng</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Tài khoản</th>
                            <th>Họ tên</th>
                            <th>Mật khẩu</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th>Loại người dùng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.mangNguoiDung.map((nguoiDung, index) => {
                            return (
                                <tr key={index}>
                                    <td>{nguoiDung.user}</td>
                                    <td>{nguoiDung.fullName}</td>
                                    <td>{nguoiDung.password}</td>
                                    <td>{nguoiDung.email}</td>
                                    <td>{nguoiDung.phoneNumber}</td>
                                    <td>{nguoiDung.idPersonal}</td>
                                    <td>
                                        <button onClick={() => {
                                            this.props.dispatch({
                                                type: 'SUA',
                                                nguoiDungChinhSua: nguoiDung
                                            })
                                        }}>Sửa</button>
                                    </td>
                                </tr>
                            );
                        })}

                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        mangNguoiDung: state.BaiTapQuanLyNguoiDungReducer.mangNguoiDung
    }
}


export default connect(mapStateToProps, null)(TableNguoiDung)