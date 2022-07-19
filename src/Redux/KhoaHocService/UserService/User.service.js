import axios from "axios";
import { FetchThongTinUserDangNhapAction } from "../../Action/KhoaHocAction";
import { BASE_URL } from "../ConfigURL";
import { LocalStoreService } from "../LocalStoreService";

// "taiKhoan": "demo0126",
// "hoTen": "momo",
// "email": "demo0126@gmail.com",
// "soDt": "123456789",
// "matKhau": "123456789",
// "maLoaiNguoiDung": "HV",
// "tenLoaiNguoiDung": "Học viên"

export const UserService = {
    //Đăng nhập thông tin user
    DangNhapUser: (dataUserDangNhap) => {
        return axios({
            url: `${BASE_URL}/api/QuanLyNguoiDung/DangNhap`,
            method: 'POST',
            data: dataUserDangNhap,
        })
    },

    //Đăng ký thông tin user mới
    DangKyUser: (dataUserDangKy) => {
        return axios({
            url: `${BASE_URL}/api/QuanLyNguoiDung/DangKy`,
            method: 'POST',
            data: dataUserDangKy,
        })
    },
};

//Async action  fetch thông tin user đăng nhập
export const FetchDangNhapUser = (dataUserDangNhap, handleSuccess, handleFail) => {
    return dispatch => {
        UserService.DangNhapUser(dataUserDangNhap)
            .then((res) => {
                console.log(res);
                LocalStoreService.setUserLocal(res.data);
                dispatch(FetchThongTinUserDangNhapAction(res.data));
                handleSuccess();
            })
            .catch((err) => {
                console.log(err);
                handleFail('Đã xảy ra lỗi đăng nhập');
            });
    }
}