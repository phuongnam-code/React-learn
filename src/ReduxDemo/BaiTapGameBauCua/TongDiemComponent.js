import React, { Component } from 'react'
import { connect } from 'react-redux'

class TongDiemComponent extends Component {
    render() {
        return (
            <div style={{ marginTop: '10px' }}>
                <div style={{
                    fontSize: '25px', color: '#FFFF00',
                    backgroundColor: '#FF0000', padding: '10px',
                    borderRadius: '4px', width: '25%', margin: 'auto'
                }}>
                    <span>Tiền thưởng: </span>
                    <span style={{ color: 'white', fontWeight: 'bold', fontSize: '35px' }}>
                        {this.props.diemThuong}
                    </span>
                    <span>$</span>
                </div>
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        diemThuong: state.BaiTapGameBauCuaReducer.diemThuong
    }
}

export default connect(mapStateToProps)(TongDiemComponent)
