import React, { Fragment } from 'react'
import { Route, Router } from 'react-router-dom';
import FooterTemplate from '../../Components/FooterTemplate/FooterTemplate';
import HeaderTemplate from '../../Components/HeaderTemplate/HeaderTemplate';

export default function HomeLayout(props) {

    const { Component, ...restProps } = props;

    return <Route {...restProps} render={(propsRoute) => {
        return <Fragment>
            <HeaderTemplate />
            <Component {...propsRoute} />
            <FooterTemplate />
        </Fragment>
    }} />
}
