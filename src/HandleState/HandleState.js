import React, { Component } from 'react'

export default class HandleState extends Component {
    //state: thuộc tính có  sẵn của class component => cho phép thay đổi giá trị và render lại
    state = {
        isLogin: false
    }

    // tạo ra 2 thuộc tính 
    // isLogin: nếu = true => hello Nam
    // isLogin: nếu = false => hiển thị nút đăng nhập 
    isLogin = false;
    userNam = 'Nam';

    renderContent = () => {
        if (this.state.isLogin) {
            return <h1>Hello {this.userNam}</h1>;
        }
        return <button onClick={() => {
            this.login();
        }}>Đăng nhập</button>;
    }
    // định nghĩa phương thức xử lý sự kiện login
    login = () => {
        // không gán giá trị các thuộc tính  của state trực tiếp
        // this.state.isLogin = true;
        //this.setState là method có sẵn của component nhận vào state mới  thay cho 
        // giá trị state cũ và tự động gọi lại hàm render 
        const newState = {
            isLogin: true
        }
        //setState là method bất đồng bộ
        this.setState(newState, () => {
            //tham số thứ 2 của hàm setState là callback chạy sau khi state thay đổi 
            console.log(this.state.isLogin);
        });

    }
    render() {
        return (
            <div>
                {this.renderContent()}
                {/* cách khác
                    {this.isLogin ? <h1>Hello {this.userNam}</h1> : <button>Đăng nhập</button>} 
                */}


            </div>
        )
    }
}
