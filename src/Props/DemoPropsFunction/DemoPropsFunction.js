import React, { Component } from 'react'
import SanPhamProps from './SanPhamProps';

export default class DemoPropsFunction extends Component {

    arrProduct = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/img2/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/img2/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/img2/applephone.jpg" }
    ]

    renderSanPham = () => {
        //render nội dung các sản phẩm
        return this.arrProduct.map((sp, index) => {
            return (
                <div className='col-4' key={index}>
                    <SanPhamProps sp={sp} xemChiTiet={this.xemChiTiet} />
                    {/* <div className="card text-left">
                        <img className="card-img-top" src={sp.hinhAnh} alt />
                        <div className="card-body">
                            <h4 className="card-title">{sp.tenSP}</h4>
                            <p className="card-text">{sp.giaBan}</p>
                            <button onClick={() => {
                                this.xemChiTiet(sp);
                            }}>Xem chi tiết</button>
                        </div>
                    </div> */}
                </div>

            );
        })
    }

    xemChiTiet = (spClick) => {
        //setState của sp chi tiết => render lại giao diện
        this.setState({
            spChiTiet: spClick
        })
    }

    state = {
        spChiTiet: { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/img2/vsphone.jpg" }
    }

    render() {
        return (
            <div className='container'>
                <h3>Danh sách sản phẩm</h3>
                <div className='row'>
                    {this.renderSanPham()}
                </div>
                <div className='row my-5'>
                    <div className='col-4'>
                        <img src={this.state.spChiTiet.hinhAnh} alt='abc' style={{ width: '100%' }} />
                    </div>
                    <div className='col-8'>
                        <h3> Thông số kỹ thuật</h3>
                        <table class="table">
                            <tbody>
                                <tr>
                                    <td className='float-left'>Màn hình</td>
                                    <td>{this.state.spChiTiet.manHinh}</td>
                                </tr>
                                <tr>
                                    <td className='float-left'>Hệ điều hành</td>
                                    <td>{this.state.spChiTiet.heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <td className='float-left'>Camera trước</td>
                                    <td>{this.state.spChiTiet.cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <td className='float-left'>Camera sau</td>
                                    <td>{this.state.spChiTiet.cameraSau}</td>
                                </tr>
                                <tr>
                                    <td className='float-left'>RAM</td>
                                    <td>{this.state.spChiTiet.ram}</td>
                                </tr>
                                <tr>
                                    <td className='float-left' > ROM</td>
                                    <td>{this.state.spChiTiet.rom}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        )
    }
}
