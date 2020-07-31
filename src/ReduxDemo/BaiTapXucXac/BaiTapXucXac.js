import React, { Component } from 'react'
import BanCuoc from './BanCuoc'
import KetQua from './KetQua'
import fontGame from './fontGameXucXac.module.css'

export default class BaiTapXucXac extends Component {
    render() {
        return (
            <div className={fontGame.gameXucXac} style={{
                background: 'url(./img/gameXucXac/bgGame.png)',
                width: '100%', height: '100%',
                position: 'fixed', top: '0', left: '0'
            }}>
                <h1>Bài tập game xúc xắc</h1>
                <BanCuoc />
                <KetQua />
            </div>
        )
    }
}
