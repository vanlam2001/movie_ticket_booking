import { dataGhe } from "../../Components/BookTicketPage/dataGhe";
import Toastify from 'toastify-js'

let initialState = {
    dataGhe: dataGhe,
    chonGhe: [],
}

export const gheReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHON_GHE": {
            if (action.ghe.daDat === false) {
                let chonGheClone = [...state.chonGhe];
                let dataGheClone = [...state.dataGhe];
                let index = chonGheClone.findIndex((ghe) => {
                    return ghe.soGhe === action.ghe.soGhe;
                })

                if (index === -1) {
                    chonGheClone.push(action.ghe);

                    Toastify({
                        text: `Chọn ghế ${action.ghe.soGhe} thành công`,
                        duration: 3000

                    }).showToast();

                    dataGheClone.forEach(ghe1 => {
                        let index = ghe1.danhSachGhe.findIndex((ghe2) => {
                            return ghe2.soGhe === action.ghe.soGhe;
                        })

                        if (index !== -1) {
                            ghe1.danhSachGhe[index].daDat = "dangDat";
                        }

                        state.dataGhe = dataGheClone;
                        state.chonGhe = chonGheClone;
                        return { ...state };
                    })


                }
            }



            else if (action.ghe.daDat === "dangDat") {
                Toastify({
                    text: `Bạn đang chọn ghế ${action.ghe.soGhe}. Vui lòng chọn thêm ghế khác`,
                    duration: 3000,
                    style: {
                        background: "linear-gradient(to right, #FF0000, #FF0000)",
                    }
                }).showToast();
            }

            else {
                Toastify({
                    text: `ghế ${action.ghe.soGhe} đã có người chọn . Vui lòng chọn ghế khác`,
                    duration: 3000,
                    style: {
                        background: "linear-gradient(to right, #FF0000, #FF0000)",
                    }

                }).showToast();
            }
        }

        case "XOA_GHE": {
            let chonGheClone = [...state.chonGhe];
            let dataGheClone = [...state.dataGhe];

            let locGhe = chonGheClone.filter((ghe) => {
                return ghe.soGhe !== action.soGhe;
            })

            dataGheClone.forEach(ghe1 => {
                let index = ghe1.danhSachGhe.findIndex((ghe2) => {
                    return ghe2.soGhe === action.soGhe;
                })

                if (index !== -1) {
                    ghe1.danhSachGhe[index].daDat = false;
                }

                state.dataGhe = dataGheClone;
                state.chonGhe = locGhe;
                return { ...state };
            })

        }
    }
    return { ...state }
}
