import React, { Component } from 'react'
import SanPham from './SanPham';

export default class DS_SanPham extends Component {

    renderSanPham = () => {
        //render nội dung các sản phẩm
        let { mangSP } = this.props;
        return mangSP.map((sp, index) => {
            return (
                <div className='col-4' key={index}>
                    <SanPham
                        sp={sp}
                        themGioHang={this.props.themGioHang}
                    />
                </div>

            );
        })
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    {this.renderSanPham()}
                </div>
            </div>
        )
    }
}
