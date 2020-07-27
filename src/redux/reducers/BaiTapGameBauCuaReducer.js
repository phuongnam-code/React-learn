const stateDefault = {
    dsCuoc: [
        { ma: 'cua', hinhAnh: './img/gameBauCua/cua.png', diemCuoc: 0 },
        { ma: 'ga', hinhAnh: './img/gameBauCua/ga.png', diemCuoc: 0 },
        { ma: 'nai', hinhAnh: './img/gameBauCua/nai.png', diemCuoc: 0 },
        { ma: 'tom', hinhAnh: './img/gameBauCua/tom.png', diemCuoc: 0 },
        { ma: 'bau', hinhAnh: './img/gameBauCua/bau.png', diemCuoc: 0 },
        { ma: 'ca', hinhAnh: './img/gameBauCua/ca.png', diemCuoc: 0 }
    ],
    diemThuong: 500,
    xucXac: [
        { ma: 'cua', hinhAnh: './img/gameBauCua/cua.png' },
        { ma: 'ga', hinhAnh: './img/gameBauCua/ga.png' },
        { ma: 'nai', hinhAnh: './img/gameBauCua/nai.png' }
    ]
}

const BaiTapGameBauCuaReducer = (state = stateDefault, action) => {
    return { ...state }
}

export default BaiTapGameBauCuaReducer