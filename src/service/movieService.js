import { https } from "./config";


export const movieServ = {
    getMovieList: () => {
        return https.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP04");
    },
    getMovieByTheater: () => {
        return https.get("/api/QuanLyRap/LayThongTinLichChieuHeThongRap");
    }
}