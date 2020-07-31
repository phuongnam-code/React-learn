const dsXucXac = [
    { ma: 1, img: './img/gameXucXac/1.png', soDiem: 1 },
    { ma: 2, img: './img/gameXucXac/2.png', soDiem: 2 },
    { ma: 3, img: './img/gameXucXac/3.png', soDiem: 3 },
    { ma: 4, img: './img/gameXucXac/4.png', soDiem: 4 },
    { ma: 5, img: './img/gameXucXac/5.png', soDiem: 5 },
    { ma: 6, img: './img/gameXucXac/6.png', soDiem: 6 },
]

const stateDefault = {
    banChon: 'TÀI',
    soBanThang: 0,
    soBanChoi: 0,
    mangXacXac: [
        { ma: 1, img: './img/gameXucXac/1.png', soDiem: 1 }
    ]
}

const BaiTapXucXacReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'value': { }
        default:
            return { ...state }
    }
}

export default BaiTapXucXacReducer;