import classNames from 'classnames/bind';
import React from 'react';
import Button from '../../Button/Button';
import { LockIcon } from '../../icons/icons';
import styles from './NewPassword.module.scss';

const cx = classNames.bind(styles);

NewPassword.propTypes = {};

function NewPassword(props) {
    return (
        <div className={cx('new-password')}>
            <div className={cx('new-header')}>
                <div className={cx('icon')}>
                    <LockIcon />
                </div>
                <div className={cx('content')}>
                    <h2>Create New Password</h2>
                    <h5>Enter a new password for login your account</h5>
                </div>
            </div>

            <div className={cx('forgot-form')}>
                <label htmlFor="Email">New Password *</label>
                <input type="password" />
                <label htmlFor="Email">Confirm Password *</label>
                <input type="email" />
                <Button primary>Reset Password</Button>
                <a href="!#">Resend Email</a>
            </div>
        </div>
    );
}

export default NewPassword;
