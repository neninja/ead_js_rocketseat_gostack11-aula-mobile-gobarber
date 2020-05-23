import React from 'react';
import { Image } from 'react-native';

import { Container } from './styles';

// O react-native vai escolher se vai usar logo, logo@2x ou logo@3x
import logoPng from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoPng} />
    </Container>
  );
};

export default SignIn;
