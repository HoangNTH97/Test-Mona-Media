import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './ForotPassword.module.scss';
import Button from '../../Button/Button';
import { GoogleIcon, LockIcon } from '../../icons/icons';

const cx = classNames.bind(styles);

ForotPassword.propTypes = {};

function ForotPassword(props) {
    return (
        <div className={cx('forgot-password')}>
            <div className={'forgot-header'}>
                <div className="icon">
                    <LockIcon />
                </div>
            </div>
        </div>
    );
}

export default ForotPassword;
