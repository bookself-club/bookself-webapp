import React from 'react';

import HomeTemplate from 'components/templates/HomeTemplate';

const HomePage: React.SFC = () => (
  <HomeTemplate>
    <h1>Home Page</h1>
    <a href="/login">Login page</a>
  </HomeTemplate>
);

export default HomePage;
