import classNames from 'classnames/bind';
import React from 'react';
import Button from '../../Button/Button';
import { LockIcon } from '../../icons/icons';
import styles from './NewPassword.module.scss';

const cx = classNames.bind(styles);

NewPassword.propTypes = {};

function NewPassword(props) {
    return (
        <div className={cx('forgot-password')}>
            <div className={cx('forgot-header')}>
                <div className={cx('icon')}>
                    <LockIcon />
                </div>
                <div className={cx('content')}>
                    <h2>Can’t log in?</h2>
                    <h5>Restore access to your account</h5>
                </div>
            </div>

            <div className={cx('forgot-form')}>
                <h5>We’ll send a recovery link to</h5>
                <input type="email" />
                <Button primary>Reset Password</Button>
                <a href="!#">Resend Email</a>
            </div>
        </div>
    );
}

export default NewPassword;
