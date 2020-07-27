import React, { Component } from 'react'
// import style from './font.module.css'
import TongDiemComponent from './TongDiemComponent'
import DSCuocComponent from './DSCuocComponent'
import XucXacComponent from './XucXacComponent'
export default class BaiTapGameBauCua extends Component {
    render() {
        return (
            //${style.BaiTapGameBauCua} 
            <div className='container'>
                <div className='display-4 text-center text-danger'>Bài tập Bầu cua CyberSoft</div>
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
        )
    }
}
