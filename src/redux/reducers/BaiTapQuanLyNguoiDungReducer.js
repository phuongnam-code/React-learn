import { THEM_NGUOI_DUNG } from './../types/typeQuanLyNguoiDung'

const stateDefault = {
    mangNguoiDung: [
        { user: 'nguyenvana', password: '123', fullName: 'Nguyễn Văn A', email: 'vana@gmail.com', phoneNumber: '0909777888', idPersonal: 'khách hàng' },
        { user: 'nguyenvanb', password: '123', fullName: 'Nguyễn Văn B', email: 'vanb@gmail.com', phoneNumber: '0909777999', idPersonal: 'Quản trị' }
    ],
    nguoiDungEdit: [
        { user: '', password: '', fullName: '', email: '', phoneNumber: '', idPersonal: '' },
    ]
}

const BaiTapQuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case THEM_NGUOI_DUNG:
            let mangNguoiDungUpdate = [...state.mangNguoiDung, action.nguoiDung];
            state.mangNguoiDung = mangNguoiDungUpdate
            return { ...state }
        case 'SUA':
            state.nguoiDungEdit = action.nguoiDungChinhSua;
            return { ...state }

        default:
            return { ...state }
    }
}
export default BaiTapQuanLyNguoiDungReducer