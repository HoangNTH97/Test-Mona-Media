import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './ForotPassword.module.scss';
import Button from '../../Button/Button';
import { GoogleIcon } from '../../icons/icons';

const cx = classNames.bind(styles);

ForotPassword.propTypes = {};

function ForotPassword(props) {
    return <div className={cx('forgot-password')}></div>;
}

export default ForotPassword;
