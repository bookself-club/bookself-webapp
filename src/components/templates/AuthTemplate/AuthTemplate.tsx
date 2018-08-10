import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Card from 'components/atoms/Card';

interface IProps {
  title: string;
}

const HomeTemplate: React.SFC<IProps> = ({ children, title }) => (
  <div>
    <Helmet title={title} />
    <Wrapper>
      <Card width="480px">{children}</Card>
    </Wrapper>
  </div>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default HomeTemplate;
