import React from 'react';
import { Image } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

// O react-native vai escolher se vai usar logo, logo@2x ou logo@3x
import logoPng from '../../assets/logo.png';

import { Container, Title } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoPng} />

      <Title>Faça seu logon</Title>

      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Senha" />

      <Button
        onPress={() => {
          console.log('debug');
        }}
      >
        Entrar
      </Button>
    </Container>
  );
};

export default SignIn;
