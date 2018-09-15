import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import HomeTemplate from 'components/templates/HomeTemplate';

const DashboardPage: React.SFC<RouteComponentProps<{}>> = () => (
  <HomeTemplate>
    <h1>Dashboard Page</h1>
  </HomeTemplate>
);

export default DashboardPage;
