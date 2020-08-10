import { layDanhSachPhim } from '../types/typeQuanLyPhim'
import axios from 'axios'

export const layDanhSachPhimAction = () => {
    console.log("helo")
    return (dispatch) => {
        axios({
            method: 'get',
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01'
            // url: 'http://svcy.myclass.vn/api/Movie/GetMovie'
        }).then((result) => {
            console.log(result.data);
            dispatch({
                type: layDanhSachPhim,
                danhSachPhim: result.data
            })
        }).catch((error) => {
            console.log(error.responsive.data);
        })
    }
}