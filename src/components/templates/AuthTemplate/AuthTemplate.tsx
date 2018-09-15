import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Paper from 'components/atoms/Paper';

interface Props {
  title: string;
}

const HomeTemplate: React.SFC<Props> = ({ children, title }) => (
  <div>
    <Helmet title={title} />
    <Wrapper>
      <Paper width="480px">{children}</Paper>
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
