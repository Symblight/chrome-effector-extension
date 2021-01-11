import React, { FC } from 'react';

import { PrimaryButton } from '@ui/atoms/button';

export const LoginForm: FC = () => {
  return (
    <form>
      <PrimaryButton label="Login" />
    </form>
  );
};
