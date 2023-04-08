import React from 'react';

import useEmojisProvider from '../../utils/emojisProvider';
import Toggle from '../Toggle';

import {
  Container,
  Profile,
  Welcome,
  UserName
} from './styles';

const MainHeader: React.FC = () => {
  const emojis = useEmojisProvider();

  return (
    <>
      <Container>
        <Toggle></Toggle>
        <Profile>
          <Welcome>Olá, {emojis}</Welcome>
          <UserName>André Borba</UserName>
        </Profile>
      </Container>
    </>
  );
};

export default MainHeader;
