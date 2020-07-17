import React, { Component } from 'react'

export default class RenderWithMap extends Component {

    danhSachSanPham = [
        { ma: 1, ten: 'iPhone', gia: 3000, hinh: 'https://picsum.photos/30/20' },
        { ma: 2, ten: 'Samsung', gia: 2000, hinh: 'https://picsum.photos/30/20' },
        { ma: 3, ten: 'Sonny', gia: 1500, hinh: 'https://picsum.photos/30/20' }
    ]
    renderTable = () => {
        let arrSPJSX = [];
        //cách 1: 
        /**
         * for (let index = 0; index < this.danhSachSanPham.length; index++) {
            // mỗi lần duyệt lấy ra một sản phẩm
            const sp = this.danhSachSanPham[index];
            //từ sản phẩm tạo ra object jsx(thẻ <tr></tr>)
            let trJSX = <tr key={index}>
                <td>{sp.ma}</td>
                <td>{sp.ten}</td>
                <td>{sp.gia}</td>
                <td>
                    <img src={sp.hinh} alt={sp.hinh} />
                </td>
                <td>
                    <button className='btn btn-danger'>Xóa</button>
                </td>
            </tr>;
            //push tr vào mảng jsx
            arrSPJSX.push(trJSX);
        }
        return arrSPJSX;
         */
        //cách 2: dùng map()
        arrSPJSX = this.danhSachSanPham.map((sp, index) => {
            return <tr key={index}>
                <td>{sp.ma}</td>
                <td>{sp.ten}</td>
                <td>{sp.gia}$</td>
                <td>
                    <img src={sp.hinh} alt={sp.hinh} />
                </td>
                <td>
                    <button className='btn btn-danger'>Xóa</button>
                </td>
            </tr>;
        })
        return arrSPJSX;
    }
    render() {
        return (
            <div className='container'>
                <h2>Danh mục sản phẩm</h2>
                <table className='table '>
                    <thead>
                        <tr>
                            <th>Mã</th>
                            <th>Tên</th>
                            <th>Giá</th>
                            <th>Hình</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>

        )
    }
}
