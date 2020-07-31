import React, { Component } from 'react'
import { connect } from 'react-redux'
import styleBauCua from './font.module.css'

class XucXacComponent extends Component {
    render() {

        let numberNN = Date.now();

        let keyframeCSS = `
            @keyframes animationBauCua${numberNN}{
                0% { right: -25px }
                25% { left: 25px }
                50% { right: 0px }
                75% { left: -25px }
                100% { right: 25px }
            }

            .xucXac {
                left: 0;
                position: relative;
                animation: animationBauCua${numberNN} 1.5s;
            }
        `;

        return (

            <div>
                <style>
                    {keyframeCSS}
                </style>
                <div className='mt-5'>
                    <div style={{ position: 'relative' }}>
                        <img src='./img/gameBauCua/Dia.png' width='300px' alt />
                    </div>
                    <div>
                        <div className='xucXac' style={{ position: 'absolute', top: '22%', left: '28%' }} >
                            <img src={this.props.xucXac[0].hinhAnh} alt width='30%' />
                        </div>
                        <div className='xucXac' style={{ position: 'absolute', top: '37%', left: '17%' }}>
                            <img src={this.props.xucXac[1].hinhAnh} alt width='30%' />
                        </div>
                        <div className='xucXac' style={{ position: 'absolute', top: '37%', left: '36%' }}>
                            <img src={this.props.xucXac[2].hinhAnh} alt width='30%' />
                        </div>
                    </div>
                </div>
                <div className='mt-2 btn' style={{ cursor: 'pointer' }} onClick={() => this.props.playGame()}>
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

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            dispatch({
                type: 'XOC'
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(XucXacComponent)
