import classNames from 'classnames';

import Category from './components/Category/Category';
import Header from './components/Layout/Header/Header';
import HeaderLine from './components/Layout/HeaderLine/HeaderLine';
import PopularCategory from './components/PopularCategory/PopularCategory';
import styles from './App.module.scss';

const cx = classNames.bind(styles);

function App() {
    return (
        <div className={cx('App')}>
            <Header />
            <HeaderLine />
            <Category />
            <PopularCategory />
        </div>
    );
}

export default App;
