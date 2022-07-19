import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'antd';
import React, { Fragment, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LocalStoreService } from '../../../Redux/KhoaHocService/LocalStoreService';
import styles from '../css/UserNav.css';

export default function UserNav() {

    let { ThongTinUserDangNhap } = useSelector(state => state.KhoaHocReducer);

    const handleLogOut = useCallback(() => {
        LocalStoreService.removeUserLocal();
        window.location = '/';
    });

    const renderRightDiv = () => {
        let loginBtnClassName = 'login-btn';

        if (ThongTinUserDangNhap) {
            loginBtnClassName = 'logged-in-btn';
            return <Fragment>
                <div className='login-btn-container'>
                    <button className={loginBtnClassName}>
                        {ThongTinUserDangNhap.taiKhoan}
                    </button>
                </div>
                <div className='register-btn-container'>
                    <button
                        className='register-btn'
                        onClick={handleLogOut}
                    >
                        Log Out
                    </button>
                </div>
            </Fragment>
        } else {
            return <Fragment>
                <div className='login-btn-container'>
                    <Link to={'/login'}>
                        <button className={loginBtnClassName}>
                            Log in
                        </button>
                    </Link>
                </div>
                <div className='register-btn-container'>
                    <Link to={'/register'}>
                        <button className='register-btn'>
                            Register
                        </button>
                    </Link>
                </div>
            </Fragment>
        }
    };

    return (
        <div className='user-nav'>
            <div className='left-div'>
                <div className='contact'>
                    <span className='contact-item'>Have any question?</span>
                    <span className='contact-item'>+0(28)123 4567</span>
                    <span className='contact-item'>mail@example.com</span>
                </div>
                <div className='social-media'>
                    <i className="social-media-item fa-brands fa-facebook-f"></i>
                    <i className="social-media-item fa-brands fa-instagram"></i>
                    <i className="social-media-item fa-brands fa-twitter"></i>
                    <i className="social-media-item fa-brands fa-linkedin-in"></i>
                </div>
            </div>
            <div className='right-div'>
                {renderRightDiv()}
            </div>
        </div>
    )
}
