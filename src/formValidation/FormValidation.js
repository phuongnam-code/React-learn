import React, { Component } from 'react'

export default class FormValidation extends Component {

    state = {
        values: {
            user: '',
            password: '',
            email: '',
            fullName: '',
            phoneNumber: '',
            idPersonal: ''
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
        console.log(name, value)
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
        for (const key in this.state.values) {
            if (this.state.values[key] !== '') {
                valid = false;
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
    }

    render() {
        return (
            <form className='container' onSubmit={this.handleSubmit}>
                <div className="card my-3">
                    <h1 className="card-title">Form đăng kí</h1>
                    <div className="card-body">
                        <div className="row text-left ">
                            <div className="col-6">
                                <div className="form-group">
                                    <label >Tài khoản</label>
                                    <input type="text" className="form-control" name='user' onChange={this.handleChange} />
                                    <p className='text-danger'>{this.state.errors.user}</p>
                                </div>
                                <div className="form-group">
                                    <label >Mật khẩu</label>
                                    <input type="password" className="form-control" name='password' onChange={this.handleChange} />
                                    <p className='text-danger'>{this.state.errors.password}</p>
                                </div>
                                <div className="form-group">
                                    <label >Email</label>
                                    <input type="email" className="form-control" name='email' onChange={this.handleChange} />
                                    <p className='text-danger'>{this.state.errors.email}</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label >Họ tên</label>
                                    <input type="text" className="form-control" name='fullname' onChange={this.handleChange} />
                                    <p className='text-danger'>{this.state.errors.fullName}</p>
                                </div>
                                <div className="form-group">
                                    <label >Số điện thoại</label>
                                    <input type="number" className="form-control" name='phoneNumber' onChange={this.handleChange} />
                                    <p className='text-danger'>{this.state.errors.phoneNumber}</p>
                                </div>
                                <div className="form-group">
                                    <label >Mã loại người dùng</label>
                                    <select className="form-control" name="idPersonal" onChange={this.handleChange}>
                                        <option>Khách hàng</option>
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
        )
    }
}
