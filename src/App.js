import classNames from 'classnames/bind';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { publicRoutes } from './routes';
import styles from './App.module.scss';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';

const cx = classNames.bind(styles);

function App() {
    return (
        <Router>
            <div className={cx('app')}>
                <div className={cx('app-content')}>
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            return <Route key={index} path={route.path} element={<Page />} />;
                        })}
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
