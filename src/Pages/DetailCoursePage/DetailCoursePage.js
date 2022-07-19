import React, { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../css/DetailCoursePage.css';
import { useSelector, useDispatch } from 'react-redux';
import { FetchThongTinKhoaHocTheoTenKhoaHocThunk, KhoaHocService } from '../../Redux/KhoaHocService/KhoaHoc.service';

export default function DetailCoursePage(props) {
    let { tenKhoaHoc } = useParams();
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(FetchThongTinKhoaHocTheoTenKhoaHocThunk(tenKhoaHoc));
    }, []);

    let { ThongTinKhoaHocTheoTenKhoaHoc } = useSelector(state => state.KhoaHocReducer);

    return (
        <div className='detail-course'>
            <div className='detail-course-header-container'>
                <div className='detail-course-header-inner'>
                    <div className='website-direction-path'>
                        Development
                        > Programming Languages
                        > {ThongTinKhoaHocTheoTenKhoaHoc.danhMucKhoaHoc.tenDanhMucKhoaHoc}
                    </div>
                    <h3 className='course-title'>
                        Learn {ThongTinKhoaHocTheoTenKhoaHoc.tenKhoaHoc}
                    </h3>
                    <p className='course-description'>
                        {ThongTinKhoaHocTheoTenKhoaHoc.moTa}
                    </p>
                    <p className='member-figure'>
                        <i className="fa-solid fa-user-group member-figure-icon"
                        /> {ThongTinKhoaHocTheoTenKhoaHoc.soLuongHocVien} students
                    </p>
                    <p className='course-author'>
                        Created by <u>
                            {ThongTinKhoaHocTheoTenKhoaHoc.nguoiTao.taiKhoan} -
                            {ThongTinKhoaHocTheoTenKhoaHoc.ngayTao}
                        </u>
                    </p>
                </div>
            </div>
            <div className='detail-course-body'>
                <div className='left-div'>
                    <div className='course-scope-container'>
                        <div className='course-scope-inner'>
                            <h3 className='course-scope-title'>What you'll learn</h3>
                            <div className='scope-item-list'>
                                <span className='scope-item'>
                                    <i className="fa-solid fa-check scope-item-icon"></i>
                                    Create their own Python Programs
                                </span>
                                <span className='scope-item'>
                                    <i className="fa-solid fa-check scope-item-icon"></i>
                                    Become an experienced Python Programmer
                                </span>
                                <span className='scope-item'>
                                    <i className="fa-solid fa-check scope-item-icon"></i>
                                    Parse the Web and Create their own Games
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right-div'>
                    <div className='side-bar-container'>
                        <div className='course-purchase-card'>
                            <img
                                className='course-cover'
                                src={ThongTinKhoaHocTheoTenKhoaHoc.hinhAnh} />
                            <div className='price-section'>
                                <div className='course-price'>
                                    <span className='price-after-promotion'>$16.99</span>
                                    <span className='price-before-promotion'>$84.99</span>
                                    <span className='promotion-discount-percent'>80% off</span>
                                </div>
                                <div className='course-promotion-deadline'>
                                    <b>2 days</b> left at this price!
                                </div>
                            </div>
                            <div className='purchase-btn-section'>
                                <button className='add-to-cart-btn'>
                                    Add to cart
                                </button>
                                <button className='buy-now-btn'>
                                    Buy now
                                </button>
                                <div className='purchase-short-policy'>
                                    30-Day Money-Back Guarantee
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
