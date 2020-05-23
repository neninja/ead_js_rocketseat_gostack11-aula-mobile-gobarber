import React from 'react';
import { Image } from 'react-native';

import { Container, Title } from './styles';

// O react-native vai escolher se vai usar logo, logo@2x ou logo@3x
import logoPng from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoPng} />
      <Title>Faça seu logon</Title>
    </Container>
  );
};

export default SignIn;
