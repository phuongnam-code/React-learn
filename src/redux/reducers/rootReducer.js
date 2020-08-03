import { combineReducers } from 'redux';
import BaiTapGioHangReducer from './BaiTapGioHangReducer'
import BaiTapGameBauCuaReducer from './BaiTapGameBauCuaReducer'
import XucXacReducer from './XucXacReducer'

//rootReducer quản lý state của toàn ứng dụng
const rootReducer = combineReducers({
    //nơi khai báo các state (reducer) theo từng nghiệp vụ
    // GioHangReducer chứa stateGioHang
    GioHangReducer: BaiTapGioHangReducer,
    BaiTapGameBauCuaReducer,
    XucXacReducer
});

export default rootReducer;