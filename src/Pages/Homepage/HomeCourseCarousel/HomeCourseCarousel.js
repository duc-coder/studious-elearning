import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from '../css/HomeCourseCarousel.css';
import { useSelector, useDispatch } from 'react-redux';
import { KhoaHocService } from '../../../Redux/KhoaHocService/KhoaHoc.service';
import { FetchDanhSachKhoaHocTheoDanhMucAction } from '../../../Redux/Action/KhoaHocAction';
import { Link } from 'react-router-dom';

export default function HomeCourseCarousel(props) {

    let dispatch = useDispatch();

    let { DanhMucKhoaHoc } = useSelector(state => state.KhoaHocReducer);

    useEffect(() => {
        if (DanhMucKhoaHoc[0].maDanhMuc) {
            KhoaHocService.FetchDanhSachKhoaHocTheoDanhMuc(DanhMucKhoaHoc[0].maDanhMuc)
                .then((res) => {
                    console.log(res);
                    dispatch(FetchDanhSachKhoaHocTheoDanhMucAction(res.data));
                }).catch((err) => {
                    console.log(err);
                });
        };
    }, [DanhMucKhoaHoc]);

    const customSlider = React.createRef();

    const goToNext = () => {
        customSlider.current.slickNext();
    };

    const goToPrevious = () => {
        customSlider.current.slickPrev();
    };

    let { DanhSachKhoaHocTheoDanhMuc } = useSelector(state => state.KhoaHocReducer);
    console.log(DanhSachKhoaHocTheoDanhMuc.length);
    const settings = {
        dots: false,
        infinite: DanhSachKhoaHocTheoDanhMuc.length > 5 ? true : false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        centerMode: false,
        autoplay: false,
        arrows: false,
        lazyLoad: true,
    };

    const renderTenDanhMuc = () => {
        if (DanhSachKhoaHocTheoDanhMuc[0]) {
            return <span
            >
                {DanhSachKhoaHocTheoDanhMuc[0].danhMucKhoaHoc.tenDanhMucKhoaHoc}
            </span >
        };
    };

    const renderListDanhMucKhoaHoc = () => {
        return DanhMucKhoaHoc.map((danhMuc, index) => {
            return <button
                className='category-item'
                onClick={() => { handleChonDanhMuc(danhMuc.maDanhMuc) }}
            >
                {danhMuc.tenDanhMuc}
            </button>
        })
    };

    const handleChonDanhMuc = (maDanhMuc) => {
        KhoaHocService.FetchDanhSachKhoaHocTheoDanhMuc(maDanhMuc)
            .then((res) => {
                console.log(res);
                dispatch(FetchDanhSachKhoaHocTheoDanhMucAction(res.data));
            }).catch((err) => {
                console.log(err);
            });
    };

    const renderKhoaHocCarousel = () => {
        return DanhSachKhoaHocTheoDanhMuc.map((khoaHoc, index) => {
            return <Link
                role='button'
                to={`/course/${khoaHoc.tenKhoaHoc}`}>
                <div
                    className='slider-item'
                >
                    <img className='course-cover' src={khoaHoc.hinhAnh} />
                    <div className='course-cover-filter-hover' />
                    <h3 className='course-title'>{khoaHoc.tenKhoaHoc}</h3>
                    <p className='course-author'>{khoaHoc.nguoiTao.hoTen}</p>
                    <div className='course-figures'>
                        <p className='view-number'>
                            <i class="fa-solid fa-eye" /> <b>{khoaHoc.luotXem}</b>
                        </p>
                        <p className='member-number'>
                            <i class="fa-solid fa-user-group" /> <b>{khoaHoc.soLuongHocVien}</b>
                        </p>
                    </div>
                </div>
            </Link>
        });
    };

    return (
        <div className='home-course-carousel'>
            <div className='carousel-header-container'>
                <h3 className='carousel-header'>
                    A broad selection of courses
                </h3>
                <p className='carousel-description'>
                    Choose from 185,000 online video courses with new additions published every month
                </p>
                <div className='category-text-list'>
                    {renderListDanhMucKhoaHoc()}
                </div>
            </div>
            <div className='carousel-body-container'>
                <div className='body-header-container'>
                    <h3 className='body-header'>
                        Expand your career opportunities with {renderTenDanhMuc()}
                    </h3>
                    <p className='body-description'>
                        Take one of Studious’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to
                    </p>
                    <button className='see-more-category-btn'>Explore {renderTenDanhMuc()}</button>
                </div>
                <div className='body-content-container'>
                    {
                        DanhSachKhoaHocTheoDanhMuc.length > 0 && <Slider
                            ref={customSlider}
                            {...settings}
                            className='body-content-slider'
                        >
                            {renderKhoaHocCarousel()}
                        </Slider>
                    }
                </div>
                <div className='slider-direct-btn'>
                    <button
                        className='left-btn'
                        onClick={() => { goToPrevious() }}
                    >
                        <FontAwesomeIcon icon={faCircleChevronLeft} />
                    </button>
                    <button
                        className='right-btn'
                        onClick={() => { goToNext() }}
                    >
                        <FontAwesomeIcon icon={faCircleChevronRight} />
                    </button>
                </div>
            </div>
        </div>
    )
}
