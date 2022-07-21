import React from 'react';
import classNames from 'classnames/bind';

import styles from './SignIn.module.scss';
import Button from '../../Button/Button';

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
                <Button>Sign in with Google</Button>
            </div>
        </div>
    );
}

export default SignIn;
