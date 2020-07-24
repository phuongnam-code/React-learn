import React, { Component } from 'react'
import SanPhamRedux from './SanPhamRedux'

export default class DSSPRedux extends Component {
    renderSanPham = () => {
        return this.props.mangSanPham.map((sp, index) => {
            return (
                <div className='col-4' key={index}>
                    <SanPhamRedux sp={sp} />
                </div>
            );
        })
    }
    render() {
        return (
            <div className='row'>
                {this.renderSanPham()}
            </div>
        )
    }
}
