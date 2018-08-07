import React from 'react';
import styled, { css } from 'styled-components';

import { colors, fonts } from 'components/tokens';

interface IProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  error?: string;
  value?: string | number;
  type?: string;
  disabled?: boolean;
  onBlur(e: any): void;
  onChange(event: React.FormEvent<HTMLInputElement>): void;
}

interface IStyledProps {
  value?: string | number;
  error?: string;
  disabled?: boolean;
}

interface ILabelProps {
  disabled?: boolean;
  error?: string;
  htmlFor?: string;
}

const TextField: React.SFC<IProps> = ({
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
    {error && <span className="error">{error}</span>}
  </Group>
);

const Group = styled.div`
  position: relative;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const Label = styled.label`
  color: ${colors.text.grayLight};
  display: block;
  font-size: ${fonts.size.regular};
  font-weight: ${fonts.weight.regular};
  padding: 4px 8px;
  background-color: ${(props: ILabelProps) =>
    props.disabled ? colors.fill.grayLight : 'transparent'};
  margin-bottom: 8px;
`;

const StyledInput = styled.input`
  background: none;
  background-color: ${(props: IStyledProps) =>
    props.disabled ? colors.fill.grayLight : 'transparent'};
  color: ${colors.text.grayDark};
  font-size: ${fonts.size.regular};
  padding: 8px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border: 1px solid ${colors.fill.blue};
  cursor: ${(props: IStyledProps) =>
    props.disabled ? 'not-allowed' : 'pointer'};

  &::placeholder {
    color: ${colors.text.grayLight};
    opacity: 0.8;
  }

  & ~ .error {
    font-size: ${fonts.size.xsmall};
    font-weight: ${fonts.weight.semiBold};
    padding: 0 8px;
  }

  &:focus {
    outline: none;
    color: ${colors.text.blue};
  }

  ${(props: IStyledProps) => {
    if (props.error) {
      return css`
        color: ${colors.text.red};
        border-bottom: 1px solid ${colors.text.red};

        & ~ .error {
          color: ${colors.text.red};
        }
      `;
    }
    return '';
  }};
`;

export default TextField;
