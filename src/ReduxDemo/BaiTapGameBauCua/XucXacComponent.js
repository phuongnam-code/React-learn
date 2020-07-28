import React, { Component } from 'react'
import { connect } from 'react-redux'

class XucXacComponent extends Component {
    render() {
        return (

            <div>
                <div className='mt-5'>
                    <div style={{ position: 'relative' }}>
                        <img src='./img/gameBauCua/Dia.png' width='300px' alt />
                    </div>
                    <div>
                        <div style={{ position: 'absolute', top: '22%', left: '28%' }}>
                            <img src={this.props.xucXac[0].hinhAnh} alt width='30%' />
                        </div>
                        <div style={{ position: 'absolute', top: '37%', left: '17%' }}>
                            <img src={this.props.xucXac[1].hinhAnh} alt width='30%' />
                        </div>
                        <div style={{ position: 'absolute', top: '37%', left: '36%' }}>
                            <img src={this.props.xucXac[2].hinhAnh} alt width='30%' />
                        </div>
                    </div>
                </div>
                <div className='mt-2' style={{ cursor: 'pointer' }}>
                    <img src='./img/gameBauCua/soc.png' width='40%' />
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
