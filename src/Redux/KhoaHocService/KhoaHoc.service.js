import axios from "axios"
import { FetchDanhMucKhoaHocApiAction, FetchDanhSachKhoaHocApiAction, FetchThongTinKhoaHocTheoTenKhoaHoc } from "../Action/KhoaHocAction";
import { BASE_URL } from "./ConfigURL"

export const KhoaHocService = {
    //Fetch data Danh mục/Danh sách khoá học tại Homepage
    FetchDanhSachKhoaHoc: () => {
        return axios({
            url: `${BASE_URL}/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP08`,
            method: 'GET',
        })
    },
    FetchDanhMucKhoaHoc: () => {
        return axios({
            url: `${BASE_URL}/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc`,
            method: 'GET',
        })
    },
    //Danh sách khoá học theo lựa chọn danh mục tại HomeCourseCarousel
    FetchDanhSachKhoaHocTheoDanhMuc: (maDanhMuc) => {
        return axios({
            url: `${BASE_URL}/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=GP08`,
            method: 'GET',
        })
    },
    //Fetch thông tin khoá học theo tên khoá học tại DetailCoursePage
    FetchThongTinKhoaHocTheoTenKhoaHoc: (tenKhoaHoc) => {
        return axios({
            url: `${BASE_URL}/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKhoaHoc}&MaNhom=GP08`,
            method: 'GET',
        })
    }
};

//Async Action fetch data Danh mục/Danh sách khoá học tại Homepage
export const FetchDanhSachKhoaHoc = () => {
    return dispatch => {
        KhoaHocService.FetchDanhSachKhoaHoc()
            .then((res) => {
                console.log(res);
                dispatch(FetchDanhSachKhoaHocApiAction(res.data))
            }).catch((err) => {
                console.log(err);
            });
    };
};

export const FetchDanhMucKhoaHoc = () => {
    return dispatch => {
        KhoaHocService.FetchDanhMucKhoaHoc()
            .then((res) => {
                console.log(res);
                dispatch(FetchDanhMucKhoaHocApiAction(res.data))
            }).catch((err) => {
                console.log(err);
            });
    }
};

export const FetchThongTinKhoaHocTheoTenKhoaHocThunk = (tenKhoaHoc) => {
    return dispatch => {
        KhoaHocService.FetchThongTinKhoaHocTheoTenKhoaHoc(tenKhoaHoc)
            .then((res) => {
                console.log(res);
                dispatch(FetchThongTinKhoaHocTheoTenKhoaHoc(res.data[0]));
            }).catch((err) => {
                console.log(err);
            });
    }
};