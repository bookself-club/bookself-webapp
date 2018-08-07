import React from 'react';
import Helmet from 'react-helmet';

interface IProps {
  title: string;
}

const HomeTemplate: React.SFC<IProps> = ({ children, title }) => (
  <div>
    <Helmet title={title} />
    <div>{children}</div>
  </div>
);

export default HomeTemplate;
