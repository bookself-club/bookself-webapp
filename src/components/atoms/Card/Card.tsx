import React from 'react';
import styled from 'styled-components';

import { colors, misc } from 'components/tokens';

interface IProps {
  width?: string;
}
const Card: React.SFC<IProps> = ({ children, width = '100%' }) => (
  <CardWrapper width={width}>{children}</CardWrapper>
);

const CardWrapper = styled.div`
  background-color: ${colors.fill.grayMedium};
  width: ${(props: IProps) => `${props.width}`};
  padding: 40px;
  border-radius: ${misc.radius};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
`;

export default Card;
