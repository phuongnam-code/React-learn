import React, { Component } from 'react'
import ModalGioHang from './ModalGioHang'
import DS_SanPham from './DS_SanPham'

export default class BTGioHangProps extends Component {


    state = {
        gioHang: [
            // { maSP: 1, tenSP: 'VinSmart Live', hinhAnh: './img/img2/vsphone.jpg', gia: 1000, soLuong: 1 }
        ]
    }

    arrProduct = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/img2/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/img2/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/img2/applephone.jpg" }
    ]
    //nơi lưu trữ state phải đáp ứng 2 yêu cầu:
    // + phải chứa giao diện(trực tiếp hoặc gián tiếp)
    // + phải chứa nút xử lý(trực tiếp hoặc gián tiếp)

    //lưu ý: các giá trị tính toán được sẽ ko đưa vào lưu trữ

    themGioHang = (spClick) => {
        console.log(spClick);
        //từ sp được click tạo ra sản phẩm giỏ hàng
        let spGioHang = {
            maSP: spClick.maSP,
            tenSP: spClick.tenSP,
            hinhAnh: spClick.hinhAnh,
            gia: spClick.giaBan,
            soLuong: 1
        }
        //định nghĩa hàm thay đổi state tại nơi chứa state
        //tạo giỏ hàng mới
        let gioHangCapNhat = [...this.state.gioHang];
        //kiểm tra sp đã có trong giỏ hàng hay chưa??
        let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === spGioHang.maSP);
        if (index !== -1) {
            gioHangCapNhat[index].soLuong += 1;
        } else {
            gioHangCapNhat.push(spGioHang);
        }
        //cập nhật giỏ hàng cũ bằng method setState
        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    xoaGioHang = (maSP) => {
        console.log(maSP);
        //setState
        let gioHangCapNhat = [...this.state.gioHang];
        let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === maSP);

        if (index !== -1) {
            gioHangCapNhat.splice(index, 1)
        }

        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    tangGiamSoLuong = (maSP, tangGiam) => {
        //tangGiam == true là tăng, tangGiam == false là giảm
        let gioHangCapNhat = [...this.state.gioHang];
        let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === maSP);
        if (index !== -1) {
            if (tangGiam === true) {
                gioHangCapNhat[index].soLuong += 1;
            } else {
                if (gioHangCapNhat[index].soLuong < 2) {
                    alert('Số lượng tối thiểu là 1');
                    return
                } else {
                    gioHangCapNhat[index].soLuong -= 1;
                }
            }
        }

        this.setState({
            gioHang: gioHangCapNhat
        })
    }
    render() {
        return (
            <div className='container'>
                <DS_SanPham
                    mangSP={this.arrProduct}
                    themGioHang={this.themGioHang}
                />
                <ModalGioHang
                    tangGiamSoLuong={this.tangGiamSoLuong}
                    xoaGioHang={this.xoaGioHang}
                    gioHang={this.state.gioHang}
                />
            </div>
        )
    }
}
