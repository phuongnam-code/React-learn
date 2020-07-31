import React, { Component } from 'react'

export default class BanCuoc extends Component {
    render() {
        return (
            <div className='container' style={{ position: 'relative' }}>
                <div className='row' >
                    <div className='col-4' >
                        <button className='btn btn-dark display-4 bg-danger' style={{ border: 'none', outline: 'none', fontSize: '60px', top: '60%', left: '20%', position: 'absolute' }}>Tài</button>
                    </div>
                    <div className='col-4' ></div>
                    <div className='col-4' >
                        <button className='btn display-4 bg-warning' style={{ border: 'none', outline: 'none', fontSize: '60px', top: '60%', right: '20%', position: 'absolute' }}>Xỉu</button>
                    </div>
                </div>
            </div>
        )
    }
}
