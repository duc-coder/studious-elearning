import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import HomeBanner from '../../Components/HomeBanner/HomeBanner';
import { FetchDanhMucKhoaHocApiAction, FetchDanhSachKhoaHocApiAction, FetchDanhSachKhoaHocTheoDanhMucAction } from '../../Redux/Action/KhoaHocAction';
import { FetchDanhMucKhoaHoc, FetchDanhSachKhoaHoc, KhoaHocService } from '../../Redux/KhoaHocService/KhoaHoc.service';
import HomeCourseCarousel from './HomeCourseCarousel/HomeCourseCarousel';
import HomeFeaturedCategoryCard from './HomeFeaturedCategoryCard/HomeFeaturedCategoryCard';

export default function Homepage(props) {

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(FetchDanhSachKhoaHoc())
        dispatch(FetchDanhMucKhoaHoc())
    }, []);

    return (
        <div>
            <HomeBanner />
            <HomeFeaturedCategoryCard />
            <HomeCourseCarousel />
        </div>
    )
}
