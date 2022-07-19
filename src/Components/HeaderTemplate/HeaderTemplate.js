import Search from 'antd/lib/transfer/search';
import { Select } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartFlatbed, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../css/HeaderTemplate.css';
import UserNav from './UserNav/UserNav';
import { Link } from 'react-router-dom';
const { Option } = Select;

export default function HeaderTemplate() {

  let dispatch = useDispatch();

  let { DanhMucKhoaHoc } = useSelector(state => state.KhoaHocReducer);

  const renderCategoryDanhMucKhoaHoc = () => {
    return DanhMucKhoaHoc.map((danhMuc, index) => {
      return <Option
        value={danhMuc.maDanhMuc}
      >
        {danhMuc.tenDanhMuc}
      </Option>
    })
  };

  const handleChangeCategory = (value) => {
    console.log(`selected ${value}`);
  };

  const handleChangeSearch = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div>
      <UserNav />
      <div className='header'>
        <div className='header-container'>
          <div className='left-div'>
            <Link className='logo' to={'/'}>
              <img className='logo-image' src='../img/studious-logo.png' />
              <span className='logo-name'>Studious</span>
            </Link>
            <div className='category'>
              <Select
                className='category-select-btn'
                placeholder='Categories'
                onChange={handleChangeCategory}
              >
                {renderCategoryDanhMucKhoaHoc()}
              </Select>
            </div>
            <div className='search-bar'>
              <Search
                placeholder='search for anything'
                onChange={handleChangeSearch}
              />
            </div>
          </div>
          <div className='right-div'>
            <div className='nav-bar'>
              <span className='nav-item'>Online Degrees</span>
              <span className='nav-item'>Find your new career</span>
              <span className='nav-item'>For Enterprise</span>
              <span className='nav-item'>For Universites</span>
            </div>
            <div className='cart'>
              <FontAwesomeIcon className='cart-icon' icon={faCartShopping} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
