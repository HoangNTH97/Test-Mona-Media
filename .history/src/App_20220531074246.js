import classNames from 'classnames';

import Category from './components/Category/Category';
import Header from './components/Layout/Header/Header';
import HeaderLine from './components/Layout/HeaderLine/HeaderLine';
import PopularCategory from './components/PopularCategory/PopularCategory';
import styles from './App.module.scss';

function App() {
    return (
        <div className="App">
            <Header />
            <HeaderLine />
            <Category />
            <PopularCategory />
        </div>
    );
}

export default App;
