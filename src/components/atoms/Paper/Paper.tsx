import React from 'react';
import styled from 'styled-components';

import { colors, misc } from 'components/tokens';

interface Props {
  width?: string;
}

const Paper: React.SFC<Props> = ({ children, width = '100%' }) => (
  <PaperWrapper width={width}>{children}</PaperWrapper>
);

const PaperWrapper = styled.div`
  background-color: ${colors.fill.grayDark};
  width: ${(props: Props) => `${props.width}`};
  padding: 40px;
  border-radius: ${misc.radius};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
`;

export default Paper;
