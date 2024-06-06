import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../src/components/Header/Header';
import HeaderMobile from '../src/components/Header/HeaderMobile';
import Footer from '../src/components/Footer/Footer';

const Layout = () => {
  return (
    <div>
      <Header />
      <HeaderMobile />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
