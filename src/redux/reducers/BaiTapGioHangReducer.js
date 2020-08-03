// import BaiTapGioHangRedux from "../../ReduxDemo/BaiTapGioHangRedux/BaiTapGioHangRedux"

const stateDefault = {
    stateGioHang: [
        { "maSP": 1, "tenSP": "VinSmart Live", "gia": 5700000, "hinhAnh": "./img/img2/vsphone.jpg", 'soLuong': 1000 }
    ]
}

const BaiTapGioHangReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'THEM_GIO_HANG': {
            let gioHangCapNhat = [...state.stateGioHang];
            let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.spGH.maSP)
            if (index !== -1) {
                gioHangCapNhat[index].soLuong += 1;
            } else {
                gioHangCapNhat.push(action.spGH)
            }
            // state.stateGioHang = gioHangCapNhat
            return { ...state, stateGioHang: gioHangCapNhat }
        }

        case 'XOA_GIO_HANG': {
            let gioHangCapNhat = [...state.stateGioHang];
            let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.maSP)
            if (index !== -1) {
                gioHangCapNhat.splice(index, 1)
            }

            return { ...state, stateGioHang: gioHangCapNhat }
        }
        case 'TANG_GIAM_SO_LUONG': {
            let gioHangCapNhat = [...state.stateGioHang];
            let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.maSP)
            if (index !== -1) {
                if (action.tangGiam) {
                    gioHangCapNhat[index].soLuong += 1;
                } else {
                    if (gioHangCapNhat[index].soLuong > 1) {
                        gioHangCapNhat[index].soLuong -= 1;
                    } else {
                        alert('Số lượng tối thiểu là 1');
                    }
                }
            }

            return { ...state, stateGioHang: gioHangCapNhat }
        }
        default: return { ...state }
    }

}

export default BaiTapGioHangReducer;