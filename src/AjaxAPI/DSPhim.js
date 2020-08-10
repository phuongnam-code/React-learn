import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { layDanhSachPhimAction } from './../redux/actions/actionQuanLyPhim'

class DSPhim extends Component {

    state = {
        dsPhim: []
    }

    renderDsPhim = () => {
        return this.props.danhSachPhim.map(({ ID, Title, Image, ...restProps }, index) => {
            return (
                <div className='col-4' key={index}>
                    <div className="card text-left">
                        <img className="card-img-top" src={Image} alt='' />
                        <div className="card-body">
                            <h4 className="card-title">{Title}</h4>
                            <p className="card-text">id: {ID}</p>
                        </div>
                    </div>
                </div>
            );
        })
    }


    componentDidMount() {
        this.props.dispatch(layDanhSachPhimAction())
    }
    render() {
        return (
            <div className='container'>
                <h1>Danh sách phim</h1>
                <div className='row'>
                    {this.renderDsPhim()}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        danhSachPhim: state.QuanLyPhimReducer.danhSachPhim
    }
}
export default connect(mapStateToProps, null)(DSPhim)


