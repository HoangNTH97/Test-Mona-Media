import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './App.module.scss';
import Category from './components/Category/Category';
import Header from './components/Layout/Header/Header';
import HeaderLine from './components/Layout/HeaderLine/HeaderLine';
import PopularCategory from './components/PopularCategory/PopularCategory';
import Topics from './components/Topics/Topics';

const cx = classNames.bind(styles);

function App() {
    const [active, setActive] = useState(1);

    const receiveData = (data) => {
        setActive(data);
    };

    return (
        <div className={cx('App')}>
            <div className={cx('page')}>
                <Header />
                <HeaderLine />
                <Category onReceiveData={receiveData} active={active} />
                <PopularCategory onReceiveData={receiveData} />
                <Topics active={active} />
            </div>
        </div>
    );
}

export default App;
