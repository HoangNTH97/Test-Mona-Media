import classNames from 'classnames/bind';
import styles from './App.module.scss';
import Category from './components/Category/Category';
import Header from './components/Layout/Header/Header';
import HeaderLine from './components/Layout/HeaderLine/HeaderLine';
import PopularCategory from './components/PopularCategory/PopularCategory';
import Topics from './components/Topics/Topics';

const cx = classNames.bind(styles);

function App() {
    const receiveData = (data) => {
        console.log(data);
    };

    return (
        <div className={cx('App')}>
            <div className={cx('page')}>
                <Header />
                <HeaderLine />
                <Category onReceiveData={receiveData} />
                <PopularCategory />
                <Topics />
            </div>
        </div>
    );
}

export default App;
