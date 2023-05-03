import React from 'react';

import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Form, FormTitle, Logo } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="Budget" />
        <h3>Budget</h3>
      </Logo>
      <Form onSubmit={() => {}}>
        <FormTitle>Entrar</FormTitle>
        <Input
          type='email'
          placeholder='E-mail'
          required
        />
        <Input
          type='password'
          placeholder='Senha'
          required
        />
        <Button
          type='submit'
        />
      </Form>
    </Container>
  );
}

export default SignIn;
