import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({ title, children }) => {
  return (
    <div>
      <div>
        <Header />
        <div>
          <div>
            <h1>{title}</h1>
          </div>
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
