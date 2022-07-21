import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import phoneIcon from '../../../assets/icons/phone.svg';
import emailIcon from '../../../assets/icons/email.svg';
import fbIcon from '../../../assets/icons/facebook.svg';
import instaIcon from '../../../assets/icons/instagram.svg';
import styles from './Footer.module.scss';
import Button from '../../Button/Button';

const cx = classNames.bind(styles);

Footer.propTypes = {};

function Footer({ className }) {
    const classes = cx('footer', {
        [className]: className,
    });
    return (
        <div className={classes}>
            <div className={cx('contact')}>
                <div className={cx('phone')}>
                    <img src={phoneIcon} alt="" />
                    <span>Call us: +84 908 02 02 58</span>
                </div>
                <div className={cx('email')}>
                    <img src={emailIcon} alt="" />
                    <span>Email: chucinog@gmail.com</span>
                </div>
            </div>
            <div className={cx('social')}>
                <span className={cx('text')}>Follow us</span>
                <div className={cx('social-icon')}>
                    <img src={fbIcon} alt="" />
                    <img src={instaIcon} alt="" />
                </div>
            </div>

            <div className={cx('bg-footer')}></div>
        </div>
    );
}

export default Footer;
