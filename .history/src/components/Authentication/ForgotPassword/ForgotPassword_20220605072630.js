import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './ForotPassword.module.scss';
import Button from '../../Button/Button';
import { GoogleIcon } from '../../icons/icons';

const cx = classNames.bind(styles);

ForotPassword.propTypes = {};

function ForotPassword(props) {
    return (
        <div className={cx('forgot-password')}>
            <div className={cx('header')}>
                <h2> Welcome 👏</h2>
            </div>
            <div className={cx('login-form')}>
                <Button form leftIcon={<GoogleIcon />}>
                    Sign in with Google
                </Button>
                <h5>Or continue with</h5>
                <div className={cx('form')}>
                    <label htmlFor="Email">Email *</label>
                    <input
                        className={cx(!error ? '' : 'error')}
                        type="Email"
                        placeholder={!error ? 'Enter your email' : 'Invalid Email'}
                    />
                    <label htmlFor="password">Password *</label>
                    <input
                        className={cx(!error ? '' : 'error')}
                        type="password"
                        placeholder={!error ? 'Enter your password' : 'Incorrect Password'}
                    />
                    <label htmlFor="password">Confirm Password *</label>
                    <input
                        className={cx(!error ? '' : 'error')}
                        type="password"
                        placeholder={!error ? 'Enter your password' : 'Incorrect Password'}
                    />
                </div>
                <div className={cx('form-remember')}>
                    <div className={cx('form-checkBox')}>
                        <input type="checkBox" />
                        <h4>Remember me</h4>
                    </div>
                </div>
                <Button primary>Sign Up</Button>
                <div className={cx('form-forget')}>
                    <span>You have an account?</span>
                    <a href="!#">Sign in</a>
                </div>
            </div>
        </div>
    );
}

export default ForotPassword;
