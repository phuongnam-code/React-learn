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
    switch (action.type) {
        case 'DAT_CUOC': {
            let mangCuocUpdate = [...state.dsCuoc];
            let index = mangCuocUpdate.findIndex((quanCuoc) => quanCuoc.ma === action.maQuanCuoc);
            if (index !== -1) {
                if (action.tangGiam) {
                    if (state.diemThuong > 0) {
                        mangCuocUpdate[index].diemCuoc += 100;
                        state.diemThuong -= 100;
                    }
                } else {
                    if (mangCuocUpdate[index].diemCuoc > 0) {
                        mangCuocUpdate[index].diemCuoc -= 100;
                        state.diemThuong += 100;
                    }
                }
            }
            return { ...state, dsCuoc: mangCuocUpdate }
        }
        case 'XOC': {
            //1. xử lý random xúc xắc
            let mangXucXacRandom = [];
            for (let i = 0; i < 3; i++) {
                //random ra 1 số ngẫu nhiên từ 0 -> 5
                let numberRandom = Math.floor(Math.random() * 6);
                console.log(numberRandom);
                //tạo ra 1 viên xúc xắc từ numberRandom
                let xucXacRandom = {
                    ma: state.dsCuoc[numberRandom].ma,
                    hinhAnh: state.dsCuoc[numberRandom].hinhAnh,
                }
                mangXucXacRandom.push(xucXacRandom);
            }
            //bỏ xúc xắc ngẫu nhiên vào mảng
            state.xucXac = mangXucXacRandom;

            //2. xử lý trúng thưởng
            for (const xucXacNN of mangXucXacRandom) {
                let indexMangCuoc = state.dsCuoc.findIndex((qc) => qc.ma === xucXacNN.ma);
                if (indexMangCuoc !== -1) {
                    state.diemThuong += state.dsCuoc[indexMangCuoc].diemCuoc;
                }
            }

            //3. xử lý hoàn tiền
            for (const quanCuoc of state.dsCuoc) {
                let indexXucXac = mangXucXacRandom.findIndex((xx) => xx.ma === quanCuoc.ma);
                if (indexXucXac !== -1) {
                    state.diemThuong += quanCuoc.diemCuoc;

                }
            }

            //4. xử lý mảng dsCuoc
            state.dsCuoc = state.dsCuoc.map((qc, index) => {
                return { ...qc, diemCuoc: 0 }
            })
            return { ...state }

        }
        default:
            return { ...state }

    }

}

export default BaiTapGameBauCuaReducer