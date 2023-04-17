import { https } from "./config";


export const movieServ = {
    getMovieList: () => {

        return https.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP04");
    },

    getMovieRap: () => {
        return https.get("/api/QuanLyRap/LayThongTinHeThongRap?maNhom=GP04")
    },
    getMovieSchelude: (id) => {
        return https.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
    },

    getMovieList: () => {
        return https.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP07");
    },

    getMovieByTheater: () => {
        return https.get("/api/QuanLyRap/LayThongTinLichChieuHeThongRap");
    },
    getMovieDetailSchedule: (id) => {
        return https.get(`https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`);
    }
}
