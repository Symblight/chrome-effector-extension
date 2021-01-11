import React, { FC } from 'react';
import styled from 'styled-components';

import { Button, ButtonProps as BaseProps } from 'reakit/Button';

export interface ButtonProps extends BaseProps {
  label?: React.ReactNode | string | undefined;
}

const Control: FC<ButtonProps> = ({ label, ...props }) => (
  <Button {...props}>{label}</Button>
);

export const PrimaryButton = styled(Control)`
  font-weight: 600;
  user-select: none;
  white-space: nowrap;
  border: 0;
  cursor: pointer;
  outline: 0;

  background-color: var(--primary-color);
  transition: background 0.2s ease-out;

  height: 4.17rem;
  width: 100%;
  border-radius: 5px;

  color: var(--white-color);

  &:hover {
    background-color: var(--dark-primary-color);
  }
` as FC<ButtonProps>;
