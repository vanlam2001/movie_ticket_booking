
import axios from "axios";
import { https } from "./config";
export const userServ = {
    login: (loginData) => {

        return axios({
            url: `${BASE_URL}/api/QuanLyNguoiDung/DangNhap`,
            method: "POST",
            data: loginData,
            headers: configHeaders(),
        });
    },
};

userServ.login();


