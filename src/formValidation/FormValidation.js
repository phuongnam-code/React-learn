import React, { Component, Fragment } from 'react'
import TableNguoiDung from './TableNguoiDung';
import { connect } from 'react-redux'
import { actionThemNguoiDung } from './../redux/actions/QuanLyNguoiDungAction'
//thư viện support cực mạnh về xử lý mảng và object
import _ from 'lodash'

class FormValidation extends Component {

    state = {
        values: {
            user: '',
            password: '',
            email: '',
            fullName: '',
            phoneNumber: '',
            idPersonal: 'Khách hàng'
        },
        errors: {
            user: '',
            password: '',
            email: '',
            fullName: '',
            phoneNumber: '',
            idPersonal: ''
        }
    }

    handleChange = (event) => {
        let { name, value, type } = event.target;

        let newValues = {
            ...this.state.values,
            [name]: value
        }
        let newErrors = {
            ...this.state.errors,
            [name]: value.trim() === '' ? `${name} không được để trống` : ''
        }

        if (type === 'email') {
            let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regexEmail.test(value)) {
                newErrors[name] = name + ' không hợp lệ!'
            }
        }
        let newState = {
            values: newValues,
            errors: newErrors
        }

        this.setState(newState, () => {
            console.log(this.state);
        })
    }
    handleSubmit = (event) => {
        //ngăn sự kiện submit lại trang
        event.preventDefault();

        //kiểm tra ngăn submit khi còn lỗi 
        let valid = true;
        for (const key in this.state.value) {
            if (this.state.values[key] !== '') {
                valid = false;
                break;
            }
        }
        for (const key in this.state.errors) {
            if (this.state.errors[key] !== '') {
                valid = false;
            }
        }
        if (!valid) {
            alert('Dữ liệu không hợp lệ!');
            return;
        }

        this.props.dispatch(actionThemNguoiDung(this.state.values))
    }
    // hàm này được chạy khi props hoặc state thay đổi và chạy trước khi render
    // componentWillReceiveProps(newProps, newState) {
    //     //this.props có thuộc tính gì thì newProps cũng có
    //     let { nguoiDungEdit } = newProps;
    //     //trước render => gắn state.values = nguoiDungEdit
    //     this.setState({
    //         values: nguoiDungEdit
    //     })

    // }



    static getDerivedStateFromProps(newProps, currentState) {
        let { nguoiDungEdit } = newProps;
        if (!_.isEqual(nguoiDungEdit.user, currentState.values.user)) {
            let newState = { ...currentState, values: nguoiDungEdit }

            return newState;
        }

        return null;
    }

    render() {
        let { user, password, email, phoneNumber, idPersonal, fullName } = this.state.values;
        return (
            <Fragment >
                <form className='container' onSubmit={this.handleSubmit}>
                    <div className="card my-3">
                        <h1 className="card-title">Form đăng kí</h1>
                        <div className="card-body">
                            <div className="row text-left ">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label >Tài khoản</label>
                                        <input type="text" className="form-control" name='user' onChange={this.handleChange} value={user} />
                                        <p className='text-danger'>{this.state.errors.user}</p>
                                    </div>
                                    <div className="form-group">
                                        <label >Mật khẩu</label>
                                        <input type="password" className="form-control" name='password' onChange={this.handleChange} value={password} />
                                        <p className='text-danger'>{this.state.errors.password}</p>
                                    </div>
                                    <div className="form-group">
                                        <label >Email</label>
                                        <input type="email" className="form-control" name='email' onChange={this.handleChange} value={email} />
                                        <p className='text-danger'>{this.state.errors.email}</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label >Họ tên</label>
                                        <input type="text" className="form-control" name='fullName' onChange={this.handleChange} value={fullName} />
                                        <p className='text-danger'>{this.state.errors.fullName}</p>
                                    </div>
                                    <div className="form-group">
                                        <label >Số điện thoại</label>
                                        <input type="number" className="form-control" name='phoneNumber' onChange={this.handleChange} value={phoneNumber} />
                                        <p className='text-danger'>{this.state.errors.phoneNumber}</p>
                                    </div>
                                    <div className="form-group">
                                        <label >Mã loại người dùng</label>
                                        <select className="form-control" name="idPersonal" onChange={this.handleChange} value={idPersonal}>
                                            <option selected>Khách hàng</option>
                                            <option>Quản trị</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='text-left'>
                                <button type='submit' className='btn btn-primary' >Đăng kí</button>
                            </div>
                        </div>
                    </div>
                </form>
                <TableNguoiDung />
            </Fragment>
        )
    }
}

// componentDidUpdate(preProps, preState) {
//     console.log('componentDidUpdate')
//     if (!_.isEqual(preProps.nguoiDungEdit, this.props.nguoiDungEdit)) {

//     }
// }

const mapStateToProps = (state) => {
    return {
        nguoiDungEdit: state.BaiTapQuanLyNguoiDungReducer.nguoiDungEdit
    }
}

export default connect(mapStateToProps, null)(FormValidation)

/**
 * Nguyên nhân lỗi giao diện không nhập liệu được
 *      + 1. khi thay đổi dữ liệu input => setState() được gọi => giao diện sẽ render() lại
 *      + 2. mặt khác value của các input trên giao diện đang được lấy từ redux
 *      + 3. theo life cycle react class component thì khi setState() được gọi render() sẽ chạy lại , nhưng
 *              render() đang theo dõi props từ redux (nguoiDungEdit)
 *      => Từ 1 2 3 => vòng lặp được sinh ra -> người dùng gõ phím => setState được gọi => render() chạy lại
 *          => render() lại lấy dữ liệu từ redux qua props (nguoiDung) edit => luôn load lại dữ liệu cũ
 *
 * KHẮC PHỤC:
 *      + props: nguoiDungEdit => mỗi khi click chỉnh sửa thì nó thay đổi
 *      + state.value: dữ liệu của người dùng
 * LifeCycle cũ: bằng 1 cách nào đó trước khi giao diện gọi hàm render ta lấy được props gắn vào state =>
 * sau đó binding giá trị giao diện ra từ state.values
 */