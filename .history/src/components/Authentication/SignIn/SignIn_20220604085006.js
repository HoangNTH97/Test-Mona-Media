import React from 'react';
import classNames from 'classnames/bind';

import styles from './SignIn.module.scss';

const cx = classNames.bind(styles);

SignIn.propTypes = {};

function SignIn(props) {
    return (
        <div className={cx('sign-in')}>
            <h1> Welcome Back 👏</h1>
        </div>
    );
}

export default SignIn;
