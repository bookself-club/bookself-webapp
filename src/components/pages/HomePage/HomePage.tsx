import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import HomeTemplate from 'components/templates/HomeTemplate';

const HomePage: React.SFC<RouteComponentProps<{}>> = () => (
  <HomeTemplate>
    <h1>Home Page</h1>
    <a href="/login">Login page</a>
  </HomeTemplate>
);

export default HomePage;
