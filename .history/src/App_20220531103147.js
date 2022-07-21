import classNames from 'classnames/bind';

import Category from './components/Category/Category';
import Header from './components/Layout/Header/Header';
import HeaderLine from './components/Layout/HeaderLine/HeaderLine';
import PopularCategory from './components/PopularCategory/PopularCategory';
import styles from './App.module.scss';
import Topics from './components/Topics/Topics';
import { TabsContext } from '@mui/base';

const cx = classNames.bind(styles);

function App() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <div className={cx('App')}>
            <div className={cx('page')}>
                <Header />
                <TabsContext></TabsContext>
                <HeaderLine />
                <Category />
                <PopularCategory />
                <Topics />
            </div>
        </div>
    );
}

export default App;
