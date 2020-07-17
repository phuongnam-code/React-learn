import React, { Component } from 'react'

export default class EXRenderMap extends Component {

    arrProduct = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/img2/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/img2/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/img2/applephone.jpg" }
    ]
    renderSanPham = () => {
        return this.arrProduct.map((sp, index) => {
            return (
                <div className='col-4' key={index}>
                    <div className="card text-center" >
                        <img className="card-img-top" src={sp.hinhAnh} alt={sp.hinhAnh} />
                        <div className="card-body">
                            <h4 className="card-title">{sp.tenSP}</h4>
                            <p className="card-text">{sp.giaBan}</p>
                            <button>Xem chi tiết</button>
                        </div>
                    </div>
                </div>)
        });
    }
    render() {
        return (
            <div className='container'>
                <div className='row '>
                    {this.renderSanPham()}
                </div>
            </div>
        )
    }
}
