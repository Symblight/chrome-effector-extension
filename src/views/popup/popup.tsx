import React, { FC } from 'react';
import { Login } from './login';

import { GlobalStyles } from '../../global-style';

export const Popup: FC = () => {
  return (
    <>
      <GlobalStyles />
      <Login />
    </>
  );
};
