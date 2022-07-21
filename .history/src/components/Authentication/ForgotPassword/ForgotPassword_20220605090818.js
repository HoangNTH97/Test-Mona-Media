import classNames from 'classnames/bind';
import React from 'react';
import { LockIcon } from '../../icons/icons';
import styles from './ForgotPassword.module.scss';

const cx = classNames.bind(styles);

ForotPassword.propTypes = {};

function ForotPassword(props) {
    return (
        <div className={cx('forgot-password')}>
            <div className={'forgot-header'}>
                <div className="icon">
                    <LockIcon />
                </div>
                <div className={cx('content')}>
                    <h2>Can’t log in?</h2>
                    <h5>Restore access to your account</h5>
                </div>
            </div>
        </div>
    );
}

export default ForotPassword;
