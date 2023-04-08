import { https } from "./config";


export const movieServ = {
    getMovieList: () => {
        return https.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP04");
    },

    getMovieRap: () => {
        return https.get("/api/QuanLyRap/LayThongTinHeThongRap?maNhom=GP04")
    }
}