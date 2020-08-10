

import { layDanhSachPhim } from '../types/typeQuanLyPhim'
const initialState = {
    danhSachPhim: []
}
export default (state = initialState, action) => {
    switch (action.type) {
        case layDanhSachPhim: {
            console.log(action)
            state.danhSachPhim = action.danhSachPhim
            return { ...state }
        }

        default:
            return { ...state }
    }
}