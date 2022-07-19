import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { message } from 'antd';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from '../css/RegisterForm.css';
import { Link } from 'react-router-dom';
import { UserService } from '../../../Redux/KhoaHocService/UserService/User.service';
import { DangNhapUserAction } from '../../../Redux/Action/KhoaHocAction';
import { LocalStoreService } from '../../../Redux/KhoaHocService/LocalStoreService';
import * as yup from 'yup';

const RegisterUserSchema = yup.object().shape({
    taiKhoan: yup.string().required('This field is required!'),
    matKhau: yup.string().required('This field is required!'),
    hoTen: yup.string().required('This field is required!'),
    email: yup.string().required('This field is required!').email('Email is invalid!'),
    soDT: yup.string().required('This field is required!').matches(/^[0-9]+$/),
    maNhom: yup.string().required('This field is required!'),
});

export default function RegisterForm() {

    return (
        <div className='register-container'>
            <h3 className='register-title'>
                Register new Studious Account!
            </h3>
            <Formik
                initialValues={{
                    taiKhoan: '',
                    matKhau: '',
                    hoTen: '',
                    soDT: '',
                    maNhom: 'GP08',
                    email: '',
                }}
                validationSchema={RegisterUserSchema}
                onSubmit={(values) => {
                    UserService.DangKyUser(values)
                        .then((res) => {
                            console.log(res);
                            message.success('Register successfully!');
                            setTimeout(() => {
                                window.location = '/login';
                            }, 500);
                        })
                        .catch((err) => {
                            console.log(err);
                            message.error('Register unsuccessfully, please try again!');
                        });
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field
                            type="taiKhoan"
                            className='input-blank'
                            name='taiKhoan'
                            placeholder='Account Name'
                        />
                        <ErrorMessage name="taiKhoan" component="div">
                            {msg => <span className='text-red-500'>{msg}</span>}
                        </ErrorMessage>

                        <Field
                            type="matKhau"
                            className='input-blank'
                            name='matKhau'
                            placeholder='Password'
                        />
                        <ErrorMessage name="matKhau" component="div">
                            {msg => <span className='text-red-500'>{msg}</span>}
                        </ErrorMessage>

                        <Field
                            type="hoTen"
                            className='input-blank'
                            name='hoTen'
                            placeholder='Full Name'
                        />
                        <ErrorMessage name="hoTen" component="div">
                            {msg => <span className='text-red-500'>{msg}</span>}
                        </ErrorMessage>

                        <Field
                            type="soDT"
                            className='input-blank'
                            name='soDT'
                            placeholder='Phone Number'
                        />
                        <ErrorMessage name="soDT" component="div">
                            {msg => <span className='text-red-500'>{msg}</span>}
                        </ErrorMessage>

                        <Field
                            type="email"
                            className='input-blank'
                            name='email'
                            placeholder='Email'
                        />
                        <ErrorMessage name="email" component="div">
                            {msg => <span className='text-red-500'>{msg}</span>}
                        </ErrorMessage>

                        <Field
                            component='select'
                            className='input-blank'
                            type="maNhom"
                            name='maNhom'
                            placeholder='Group Number'
                        >
                            <option>GP01</option>
                            <option>GP02</option>
                            <option>GP03</option>
                            <option>GP04</option>
                            <option>GP05</option>
                            <option>GP06</option>
                            <option>GP07</option>
                            <option>GP08</option>
                            <option>GP09</option>
                        </Field>
                        <ErrorMessage name="maNhom" component="select">
                            {msg => <span className='text-red-500'>{msg}</span>}
                        </ErrorMessage>

                        <button
                            className='register-confirm-btn'
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
            <p className='login-text'>
                Already have an account?
                <Link
                    className='login-link'
                    to={'/login'}
                >
                    <u>Log In</u>
                </Link>
            </p>
        </div>
    )
}
