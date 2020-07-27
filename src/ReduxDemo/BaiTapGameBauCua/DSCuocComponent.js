import React, { Component } from 'react'
import { connect } from 'react-redux'

class DSCuocComponent extends Component {

    renderDSCuoc = () => {
        return this.props.dsCuoc.map((quanCuoc, index) => {
            return (
                <div className='col-4 mb-4' key={index}>
                    <img src={quanCuoc.hinhAnh} alt width='80%' />
                    <button className='mt-2 btn btn-primary'>Cược {quanCuoc.diemCuoc}</button>
                </div>
            );
        })
    }

    render() {
        return (
            <div className='row mb-5 mt-4'>
                {this.renderDSCuoc()}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        dsCuoc: state.BaiTapGameBauCuaReducer.dsCuoc
    }
}
export default connect(mapStateToProps)(DSCuocComponent)
