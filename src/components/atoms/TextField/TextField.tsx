import React from 'react';
import styled, { css } from 'styled-components';

import { colors, fonts, misc } from 'components/tokens';

interface Props {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  error?: any;
  value?: string | number;
  type?: string;
  disabled?: boolean;
  onBlur(e: any): void;
  onChange(event: React.FormEvent<HTMLInputElement>): void;
}

interface StyledProps {
  value?: string | number;
  error?: string;
  disabled?: boolean;
}

const TextField: React.SFC<Props> = ({
  id,
  label,
  placeholder,
  error,
  value,
  type = 'text',
  onChange,
  onBlur,
  disabled = false,
  ...props
}) => (
  <Group>
    <Label htmlFor={id}>{label}</Label>
    <StyledInput
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder || label}
      error={error}
      disabled={disabled}
      {...props}
    />
    <ErrorWrapper>
      {error && <ErroLabel error={error}>{error}</ErroLabel>}
    </ErrorWrapper>
  </Group>
);

const Group = styled.div`
  position: relative;
  margin-top: 16px;
`;

const Label = styled.label`
  color: ${colors.text.grayLight};
  display: block;
  font-size: ${fonts.size.small};
  font-weight: ${fonts.weight.regular};
  padding: 0 8px;
  margin-bottom: 8px;
`;

const StyledInput = styled.input<StyledProps>`
  background: none;
  background-color: ${props =>
    props.disabled ? colors.fill.grayLight : colors.fill.grayMedium};
  color: ${colors.text.white};
  font-size: ${fonts.size.small};
  padding: 0 8px;
  display: block;
  width: 100%;
  border-radius: ${misc.radius};
  border: 1px solid ${colors.fill.grayDarker};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  font-weight: ${fonts.weight.regular};
  height: 44px;

  &::placeholder {
    color: ${colors.text.grayLight};
    opacity: 0;
  }

  &:focus {
    outline: none;
    color: ${colors.text.blue};
    border-color: ${colors.fill.blue};
  }

  ${props => {
    if (props.error) {
      return css`
        color: ${colors.text.red};
        border-color: ${colors.text.red};
      `;
    }
    return '';
  }};
`;

const ErrorWrapper = styled.div`
  margin-top: 8px;
  min-height: 20px;
`;

const ErroLabel = styled.div<StyledProps>`
  font-size: ${fonts.size.xsmall};
  font-weight: ${fonts.weight.semiBold};
  padding: 0 8px;

  ${props => {
    if (props.error) {
      return css`
        color: ${colors.text.red};
      `;
    }
    return '';
  }};
`;

export default TextField;
