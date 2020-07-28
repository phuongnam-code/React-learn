import React, { Component } from 'react'
import style from './font.module.css'
import TongDiemComponent from './TongDiemComponent'
import DSCuocComponent from './DSCuocComponent'
import XucXacComponent from './XucXacComponent'
export default class BaiTapGameBauCua extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#FFA500', padding: '20px 0px' }}>
                <div className={`container ${style.gameBauCua}`} >
                    <div>
                        <img src='./img/gameBauCua/Logo.png' width='50%' alt />
                    </div>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <TongDiemComponent />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-7 '>
                            <DSCuocComponent />
                        </div>
                        <div className='col-5 '>
                            <XucXacComponent />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
