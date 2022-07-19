import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../../css/LoginPage.css';
import { Form, Input, message } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { FetchDangNhapUser, UserService } from '../../../Redux/KhoaHocService/UserService/User.service';
import { DangNhapUserAction } from '../../../Redux/Action/KhoaHocAction';
import { LocalStoreService } from '../../../Redux/KhoaHocService/LocalStoreService';

export default function FormLogin() {

    let history = useHistory();

    const [userLogin, setUserLogin] = useState({
        taiKhoan: '',
        matKhau: '',
    });

    const handleChange = (event) => {
        let { name, value } = event.target;
        let values = { ...userLogin, [name]: value };
        setUserLogin(values);
    };

    console.log(userLogin);

    let dispatch = useDispatch();

    const handleLogin = () => {
        let onSuccess = () => {
            message.success('Log in successfully!');
            history.push('/');
        };

        let onFail = (smg) => {
            message.error(smg);
        };

        dispatch(FetchDangNhapUser(userLogin, onSuccess, onFail));
    };

    return (
        <div className='login-container'>
            <h3 className='login-title'>
                Log In to Your Studious Account!
            </h3>
            <button className='social-media-login-btn'>
                <i className="facebook-item fa-brands fa-facebook"></i>
                Continue with Facebook
            </button>
            <button className='social-media-login-btn'>
                <i className="google-item fa-brands fa-google"></i>
                Continue with Google
            </button>
            <Form>
                <Input
                    className='input-blank'
                    name='taiKhoan'
                    placeholder='Account Name'
                    onChange={handleChange}
                />
                <Input.Password
                    className='input-blank'
                    name='matKhau'
                    placeholder='Password'
                    onChange={handleChange}
                />
                <button
                    className='login-confirm-btn'
                    htmlType="submit"
                    onClick={handleLogin}
                >
                    Log In
                </button>
            </Form>
            <p className='forgot-password-text'>
                or
                <Link className='forgot-password-link'>
                    Forgot Password
                </Link>
            </p>
            <p className='signup-text'>
                Don't have an account?
                <Link
                    to={'/register'}
                    className='signup-link'
                >
                    <u>Sign up</u>
                </Link>
            </p>
        </div>
    )
}
