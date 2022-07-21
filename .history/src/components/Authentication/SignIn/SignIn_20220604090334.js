import React from 'react';
import classNames from 'classnames/bind';

import styles from './SignIn.module.scss';
import Button from '../../Button/Button';
import { GoogleIcon } from '../../icons/icons';

const cx = classNames.bind(styles);

SignIn.propTypes = {};

function SignIn(props) {
    return (
        <div className={cx('sign-in')}>
            <div className={cx('header-form')}>
                <h1> Welcome Back 👏</h1>
                <h4>Have we meet before?</h4>
            </div>
            <div className={cx('login-form')}>
                <Button leftIcon={<GoogleIcon />}>Sign in with Google</Button>
                <h4>Or continue with</h4>
                <div className={cx('form')}>
                    <label htmlFor="Email">Email</label>
                    <input type="Email" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="" id="" />
                </div>
            </div>
        </div>
    );
}

export default SignIn;
