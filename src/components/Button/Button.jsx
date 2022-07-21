import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

Button.propTypes = {};

function Button({ children, to, href, className, onClick, ...passProps }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link; // nếu xài to ở đây sẽ là Link nội bộ nên sẽ chuyển đến các trang nội bộ
    } else if (href) {
        props.href = href;
        Comp = 'a'; // dùng href sẽ chuyển được đến các trang bên ngoài
    }

    const classes = cx('wrapper', {
        [className]: className,
        // khi props primary này được truyền thì nó sẽ add thêm 1 cái class primary vào
    });

    return (
        <Comp className={classes} {...props}>
            {children}
        </Comp>
    );
}

export default Button;
