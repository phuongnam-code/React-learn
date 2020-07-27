import React, { Component } from 'react'
import { connect } from 'react-redux'

class XucXacComponent extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-12 '>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <p style={{
                            width: '300px', height: '300px',
                            background: 'antiquewhite', borderRadius: '50%',
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                            <img src={this.props.xucXac[0].hinhAnh} alt width='20%' />
                            <img src={this.props.xucXac[1].hinhAnh} alt width='20%' className='mx-3' />
                            <img src={this.props.xucXac[2].hinhAnh} alt width='20%' />
                        </p>
                    </div>
                    <button className='mt-4 btn btn-danger'>Xóc</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        xucXac: state.BaiTapGameBauCuaReducer.xucXac
    }
}
export default connect(mapStateToProps)(XucXacComponent)
