import { DANG_NHAP_USER, FETCH_DANH_MUC_KHOA_HOC, FETCH_DANH_SACH_KHOA_HOC, FETCH_DANH_SACH_KHOA_HOC_HOME_COURSE_CAROUSEL, FETCH_THONG_TIN_KHOA_HOC_THEO_TEN_KHOA_HOC, USER_DANG_NHAP } from "../Constant/KhoaHocConstant";

//Fetch data Danh mục/Danh sách khoá học tại Homepage
export const FetchDanhSachKhoaHocApiAction = (dataDanhSach) => ({
    type: FETCH_DANH_SACH_KHOA_HOC,
    payload: dataDanhSach,
});

export const FetchDanhMucKhoaHocApiAction = (dataDanhMuc) => ({
    type: FETCH_DANH_MUC_KHOA_HOC,
    payload: dataDanhMuc,
});

//Danh sách khoá học theo lựa chọn danh mục tại HomeCourseCarousel
export const FetchDanhSachKhoaHocTheoDanhMucAction = (dataKhoaHoc) => ({
  type: FETCH_DANH_SACH_KHOA_HOC_HOME_COURSE_CAROUSEL,
  payload: dataKhoaHoc,
});

//Fetch thông tin khoá học theo tên khoá học tại DetailCoursePage
export const FetchThongTinKhoaHocTheoTenKhoaHoc = (dataKhoaHoc) => ({
    type: FETCH_THONG_TIN_KHOA_HOC_THEO_TEN_KHOA_HOC,
    payload: dataKhoaHoc,
});

//Async action fetch thông tin user đăng nhập
export const FetchThongTinUserDangNhapAction = (payload) => ({
  type: USER_DANG_NHAP,
  payload
})




