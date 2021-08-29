import React from 'react';

const Layout = ({ title, children }) => {
  return (
    <div>
      <div>
        <nav>Menu</nav>
        <div>
          <div>
            <h1>{title}</h1>
          </div>
          {children}
        </div>
        <div> Footer</div>
      </div>
    </div>
  );
};

export default Layout;
