import * as React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

import { colors, misc } from '../../../components/tokens';

interface Props {
  /**
   * Set this to change the label
   */
  label: string;

  /**
   * Set this to change the color
   */
  color: 'primary' | 'secondary' | 'error';

  /**
   * Disables the button, changing the visual style and make it unable to be pressed
   * @default false
   */
  disabled?: boolean;

  /**
   * The size of the button
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * The type of the button
   * @default button
   */
  type?: 'submit' | 'button';

  /**
   * Loading state when waiting for an action to complete
   * @default false
   */
  loading?: boolean;

  /** Function to handle button click */
  onClick?(e: React.MouseEvent<HTMLElement>): void;
}

interface StyledProps {
  color: 'primary' | 'secondary' | 'error';
  size: 'small' | 'medium' | 'large';
  loading: boolean;
  disabled: boolean;
}

const Button: React.SFC<Props> = ({
  label,
  disabled = false,
  type = 'button',
  loading = false,
  onClick,
  color,
  size = 'medium',
}) => (
  <ButtonStyled
    disabled={disabled}
    type={type}
    onClick={onClick}
    color={color}
    size={size}
    loading={loading}
  >
    <span className="label" data-testid="label">
      {label}
    </span>
  </ButtonStyled>
);

const backgroundColor = theme.variants('mode', 'color', {
  primary: {
    dark: colors.fill.blue,
    light: colors.fill.blue,
  },
  secondary: {
    dark: colors.fill.gray,
    light: colors.fill.gray,
  },
  error: {
    dark: colors.fill.red,
    light: colors.fill.red,
  },
});

const hoverColor = theme.variants('mode', 'color', {
  primary: {
    dark: colors.fill.blueLight,
    light: colors.fill.blueLight,
  },
  secondary: {
    dark: colors.fill.gray,
    light: colors.fill.gray,
  },
  error: {
    dark: colors.fill.red,
    light: colors.fill.red,
  },
});

const activeFocusColor = theme.variants('mode', 'color', {
  primary: {
    dark: colors.fill.blueDark,
    light: colors.fill.blueDark,
  },
  secondary: {
    dark: colors.fill.gray,
    light: colors.fill.gray,
  },
  error: {
    dark: colors.fill.red,
    light: colors.fill.red,
  },
});

const textColor = theme.variants('mode', 'color', {
  primary: {
    dark: colors.fill.white,
    light: colors.fill.white,
  },
  secondary: {
    dark: colors.fill.white,
    light: colors.fill.white,
  },
  error: {
    dark: colors.fill.white,
    light: colors.fill.white,
  },
});

const ButtonStyled = styled.button<StyledProps>`
  background-color: ${backgroundColor};
  border-radius: ${misc.radius};
  border: 1px solid ${backgroundColor};
  color: ${textColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  height: 40px;
  margin: 0;
  min-width: 140px;
  padding: 0 16px;
  position: relative;
  opacity: ${props => (props.disabled ? 0.6 : 1)};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: border-color ${misc.animationDuration.slow} ease,
    background-color ${misc.animationDuration.slow} ease,
    color ${misc.animationDuration.slow} ease;
  overflow: hidden;

  &:hover {
    background-color: ${hoverColor};
    border-color: ${hoverColor};
  }

  &:focus {
    background-color: ${backgroundColor};
    border-color: ${activeFocusColor};
  }

  &:active {
    background-color: ${activeFocusColor};
    border-color: ${activeFocusColor};
  }

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 0;
    padding-top: 0;
    border-radius: 100%;
    opacity: 0.3;
    background-color: ${activeFocusColor};
    transform: translate(-50%, -50%);
  }

  &:focus:before,
  &:active:before {
    width: 120%;
    padding-top: 120%;
    transition: width 0.4s ease-out, padding-top 0.4s ease-out;
  }
`;

export default Button;
