import classNames from 'classnames/bind';

import Category from './components/Category/Category';
import Header from './components/Layout/Header/Header';
import HeaderLine from './components/Layout/HeaderLine/HeaderLine';
import PopularCategory from './components/PopularCategory/PopularCategory';
import styles from './App.module.scss';

const cx = classNames.bind(styles);

function App() {
    return (
        <div className={cx('App')}>
            <div className={cx('page')}>
                <Header />
                <HeaderLine />
                <Category />
                <PopularCategory />
            </div>
        </div>
    );
}

export default App;
