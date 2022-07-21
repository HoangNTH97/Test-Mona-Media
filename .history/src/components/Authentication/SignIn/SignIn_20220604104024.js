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
                <h2> Welcome Back 👏</h2>
                <h5>Have we meet before?</h5>
            </div>
            <div className={cx('login-form')}>
                <Button form leftIcon={<GoogleIcon />}>
                    Sign in with Google
                </Button>
                <h5>Or continue with</h5>
                <div className={cx('form')}>
                    <label htmlFor="Email">Email *</label>
                    <input type="Email" placeholder="Enter your email" />
                    <label htmlFor="password">Password *</label>
                    <input type="password" name="" id="" />
                </div>
                <div className={cx('form-remember')}>
                    <div className={cx('form-checkBox')}>
                        <input type="checkBox" />
                        <h4>Remember me</h4>
                    </div>
                    <a href="!#">Forgot your password?</a>
                </div>
                <Button primary>Sign In</Button>
                <div className={cx('form-forget')}>
                    <span>Dont have an account?</span>
                    <a href="!#">Sign up</a>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
