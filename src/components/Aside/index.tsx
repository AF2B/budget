import React from 'react';
import { MdArrowDownward, MdArrowUpward, MdDashboard, MdExitToApp } from 'react-icons/md';

import logoSvg from '../../assets/logo.svg';
import { Container, Header, LogoImg, MenuContainer, MenuItemLink, Title } from './styles';

const Aside: React.FC = () => {
  return (
    <>
      <Container>
        <Header>
          <LogoImg src={logoSvg} alt="Logo marca"/>
          <Title>Budget</Title>
        </Header>
        <MenuContainer>
          <MenuItemLink href="/dashboard"> <MdDashboard/>Dashboard</MenuItemLink>
          <MenuItemLink href="/list/entry-balance"><MdArrowUpward/>Entradas</MenuItemLink>
          <MenuItemLink href="/list/exit-balance"><MdArrowDownward/>Saídas</MenuItemLink>
          <MenuItemLink href="/"><MdExitToApp/>Sair</MenuItemLink>
        </MenuContainer>
      </Container>
    </>
  );
};

export default Aside;
