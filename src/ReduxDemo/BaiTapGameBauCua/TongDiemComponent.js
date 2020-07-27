import React, { Component } from 'react'
import { connect } from 'react-redux'

class TongDiemComponent extends Component {
    render() {
        return (
            <div className='my-3'>
                <p>
                    <strong>Tiền thưởng: </strong>
                    <span style={{ fontSize: '25px', color: 'red', fontWeight: 'bold' }}>
                        {this.props.diemThuong} điểm
                    </span>
                </p>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        diemThuong: state.BaiTapGameBauCuaReducer.diemThuong
    }
}

export default connect(mapStateToProps)(TongDiemComponent)
