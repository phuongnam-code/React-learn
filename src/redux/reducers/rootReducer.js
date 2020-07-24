import { combineReducers } from 'redux';
import BaiTapGioHangReducer from './BaiTapGioHangReducer'
import BaiTapGioHangRedux from '../../ReduxDemo/BaiTapGioHangRedux/BaiTapGioHangRedux';
//rootReducer quản lý state của toàn ứng dụng
const rootReducer = combineReducers({
    //nơi khai báo các state (reducer) theo từng nghiệp vụ
    // GioHangReducer chứa stateGioHang
    GioHangReducer: BaiTapGioHangReducer
});

export default rootReducer;