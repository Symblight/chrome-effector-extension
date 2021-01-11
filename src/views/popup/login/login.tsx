import React, { FC } from 'react';
import styled from 'styled-components';
import { useStore } from 'effector-react';

import { MainTemplate } from '@ui/template/main-content';
import { LoginForm } from '@features/popup/organisms/login-form';

import { $session } from '@features/common/session/model';

export const Login: FC = () => {
  const session = useStore($session);
  return (
    <MainTemplate>
      <Wrapper>
        <LoginForm />
        <div>Login facebook, login google</div>
      </Wrapper>
    </MainTemplate>
  );
};

const Wrapper = styled.div``;
