import classNames from 'classnames/bind';
import React from 'react';

import bgImage from '../../assets/images/backgroundImg.jpg';
import Card from '../../components/Card/Card';
import Footer from '../../components/Layout/Footer/Footer';
import Header from '../../components/Layout/Header/Header';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

Home.propTypes = {};

function Home(props) {
    return (
        <div>
            <Header />
            <div className={cx('content')}>
                <div className={cx('back-ground-img')}>
                    <img src={bgImage} alt="" />
                </div>
                <div className={cx('title')}>
                    <h1>Hello!</h1>
                    <h1>Where are</h1>
                    <h1>
                        you <span>flying</span> to ...
                    </h1>
                </div>
                <div className={cx('card')}>
                    <Card />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
