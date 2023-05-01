import styled from 'styled-components';

interface ILegendProps {
  color: string;
}

const Container = styled.div`
  display: flex;
  width: 48%;
  min-height: 260px;
  margin: 10px 0;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};
  border-radius: 9px;
`;

const SideLeft = styled.aside`
  flex: 1;
  padding: 30px 20px;
  > h2 {
    padding-left: 16px;
    margin-bottom: 10px;
  }
`;

const LegendContainer = styled.ul`
  list-style: none;

  height: 175px;
  padding-right: 15px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.tertiary};
  }
  @media (max-width: 1345px) {
    display: flex;
    flex-direction: column;
  }
`;

const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;
  margin-bottom: 7px;
  padding-left: 7px;
  > div {
    background-color: ${(props) => props.color};
    width: 40px;
    height: 40px;
    border-radius: 5px;

    font-size: 14px;
    line-height: 40px;
    text-align: center;
  }
  > span {
    margin-left: 5px;
  }
  @media (max-width: 145px) {
    font-size: 14px;
    margin: 3px 0;
    > div {
      height: 35px;
      width: 35px;
      line-height: 35px;
    }
    > span {
      margin-left: 7px;
    }
  }
`;

const SideRight = styled.main`
  display: flex;
  justify-content: center;
  padding-top: 35px;
  flex: 1;
  min-height: 150px;
`;

export { Container, SideLeft, SideRight, LegendContainer, Legend };
