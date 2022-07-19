import { DanhMucKhoaHoc, DanhSachKhoaHoc, ThongTinKhoaHoc } from "../../_Cores/Models/ThongTinKhoaHoc";
import { ThongTinUser } from "../../_Cores/Models/ThongTinUser";
import { DANG_NHAP_USER, FETCH_DANH_MUC_KHOA_HOC, FETCH_DANH_SACH_KHOA_HOC, FETCH_DANH_SACH_KHOA_HOC_HOME_COURSE_CAROUSEL, FETCH_THONG_TIN_KHOA_HOC_THEO_TEN_KHOA_HOC, USER_DANG_NHAP } from "../Constant/KhoaHocConstant";
import { LocalStoreService } from "../KhoaHocService/LocalStoreService";

const initialState = {
    //Fetch data Danh mục/Danh sách khoá học tại Homepage
    DanhMucKhoaHoc: DanhMucKhoaHoc,
    ThongTinKhoaHoc: ThongTinKhoaHoc,
    DanhSachKhoaHoc: DanhSachKhoaHoc,

    //Danh sách khoá học theo lựa chọn danh mục tại HomeCourseCarousel
    DanhSachKhoaHocTheoDanhMuc: DanhSachKhoaHoc,

    //Fetch thông tin khoá học theo tên khoá học tại DetailCoursePage
    ThongTinKhoaHocTheoTenKhoaHoc: ThongTinKhoaHoc,

    //Thông tin user đang đăng nhập
    ThongTinUserDangNhap: LocalStoreService.getUserLocal(),
};

export const KhoaHocReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        //Async action fetch thông tin user đăng nhập
        case USER_DANG_NHAP: {
            state.ThongTinUserDangNhap = payload;
            return { ...state }
        }

        //Fetch data Danh mục/Danh sách khoá học tại Homepage
        case FETCH_DANH_SACH_KHOA_HOC: {
            state.DanhSachKhoaHoc = payload;
            return { ...state }
        }
        case FETCH_DANH_MUC_KHOA_HOC: {
            state.DanhMucKhoaHoc = payload;
            return { ...state }
        }

        //Danh sách khoá học theo lựa chọn danh mục tại HomeCourseCarousel
        case FETCH_DANH_SACH_KHOA_HOC_HOME_COURSE_CAROUSEL: {
            state.DanhSachKhoaHocTheoDanhMuc = payload;
            return { ...state }
        }

        //Fetch thông tin khoá học theo tên khoá học tại DetailCoursePage
        case FETCH_THONG_TIN_KHOA_HOC_THEO_TEN_KHOA_HOC: {
            state.ThongTinKhoaHocTheoTenKhoaHoc = payload;
            return { ...state }
        }

        default:
            return state
    }
}
