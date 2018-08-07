import React from 'react';
import Helmet from 'react-helmet';

const HomeTemplate: React.SFC = ({ children }) => (
  <div>
    <Helmet title="Home" />
    <div>{children}</div>
  </div>
);

export default HomeTemplate;
