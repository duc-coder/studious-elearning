import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styles from '../css/LoginPage.css';
import FormLogin from './FormLogin/FormLogin';

export default function LoginPage() {
    let history = useHistory();

    let { ThongTinUserDangNhap } = useSelector(state => state.KhoaHocReducer);

    useEffect(() => {
        if (ThongTinUserDangNhap) {
            history.push('/');
        }

    }, []);

    return (
        <div className='login'>
            <FormLogin />
        </div>
    )
}
