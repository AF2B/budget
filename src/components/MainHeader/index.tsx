import React, { useState } from 'react';

import { useTheme } from '../../hooks/theme';
import useEmojisProvider from '../../utils/emojisProvider';
import Toggle from '../Toggle';
import { Container, Profile, UserName, Welcome } from './styles';

const MainHeader: React.FC = () => {
  const emojis = useEmojisProvider();
  const { toggleTheme, theme } = useTheme();
  const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);

  return (
    <Container>
      <Toggle
        labelLeft='Light'
        labelRight='Dark'
        checked={darkTheme}
        onChange={() => {
          setDarkTheme(!darkTheme);
          toggleTheme();
        }}
      />
      <Profile>
        <Welcome>Olá, {emojis}</Welcome>
        <UserName>André Borba</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
