import { THEM_NGUOI_DUNG } from './../types/typeQuanLyNguoiDung'

export let actionThemNguoiDung = (nguoiDung) => {
    return {
        type: THEM_NGUOI_DUNG,
        nguoiDung
    }
}