import React from 'react';

const Layout = (props) => {
  return (
    <>
      <nav>Navbar</nav>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
