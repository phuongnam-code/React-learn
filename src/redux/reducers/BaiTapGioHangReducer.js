import BaiTapGioHangRedux from "../../ReduxDemo/BaiTapGioHangRedux/BaiTapGioHangRedux"

const stateDefault = {
    stateGioHang: [
        { "maSP": 1, "tenSP": "VinSmart Live", "gia": 5700000, "hinhAnh": "./img/img2/vsphone.jpg", 'soLuong': 1000 }
    ]
}

const BaiTapGioHangReducer = (state = stateDefault, action) => {
    console.log('reducer', action)
    switch (action.type) {
        case 'THEM_GIO_HANG': {
            let gioHangCapNhat = [...state.stateGioHang];
            let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.spGH.maSP)
            if (index !== -1) {
                gioHangCapNhat[index].soLuong += 1;
            } else {
                gioHangCapNhat.push(action.spGH)
            }
            return { ...state, stateGioHang: gioHangCapNhat }
        }
        default: return { ...state }
    }

}

export default BaiTapGioHangReducer;