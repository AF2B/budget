import styled from "styled-components";

export const Container = styled.div`
  grid-area: AS;
  padding-left: 20px;
  border-right: 1px solid ${props => props.theme.colors.gray};
  background-color: ${props => props.theme.colors.secondary};
`;

export const LogoImg = styled.img`
  height: 40px;
  width: 40px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 70px;
`;

export const MenuContainer = styled.nav`
  display: flex;
  margin-top: 50px;
  flex-direction: column;
`;

export const MenuItemLink = styled.a`
  display: flex;
  align-items: center;
  margin: 7px 0;
  color: ${props => props.theme.colors.info};
  text-decoration: none;
  &:hover {
    opacity: .7;
  }
  transition: opacity .4s;
  > svg {
    font-size: 19px;
    margin-right: 6px;
  }
`;

export const Title = styled.h3`
  color: ${props => props.theme.colors.white};
  margin-left: 10px;
`;
