import React, { Component } from 'react'
import { connect } from 'react-redux'

class DSCuocComponent extends Component {

    renderDSCuoc = () => {
        return this.props.dsCuoc.map((quanCuoc, index) => {
            return (
                <div className='col-4 mb-4' key={index}>
                    <img src={quanCuoc.hinhAnh} alt='' width='80%' />
                    <p className='mt-2 btn btn-primary'>Cược
                        <button className='mr-1 btn btn-primary' style={{ background: 'green' }}
                            onClick={() => this.props.datCuoc(quanCuoc.ma, true)}>
                            +
                        </button>
                        {quanCuoc.diemCuoc}
                        <button className='ml-1 btn btn-primary ' style={{ background: 'green' }}
                            onClick={() => this.props.datCuoc(quanCuoc.ma, false)}>
                            -
                        </button>
                    </p>
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

const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc: (maQuanCuoc, tangGiam) => {
            console.log('mã quân cược: ', maQuanCuoc);
            console.log('tăng giảm: ', tangGiam);
            let action = {
                type: 'DAT_CUOC',
                maQuanCuoc,
                tangGiam
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DSCuocComponent)
