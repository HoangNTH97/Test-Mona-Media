import classNames from 'classnames/bind';
import React from 'react';

import Footer from '../../components/Layout/Footer/Footer';
import Header from '../../components/Layout/Header/Header';
import SearchList from '../../components/SearchList/SearchList';
import Ticket from '../../components/Ticket/Ticket';

import styles from './List.module.scss';

const cx = classNames.bind(styles);

List.propTypes = {};

function List(props) {
  return (
    <div>
      <Header navBarList={'nav-list'} btnList={'btn-list'} className={cx('header-list')} />
      <div className={cx('content')}>
        <SearchList />
        <Ticket />
      </div>
      <Footer />
    </div>
  );
}

export default List;
