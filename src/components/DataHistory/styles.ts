import styled from "styled-components";

interface ILegendProps {
  color: string;
}

const Container = styled.div`
  width: 100%;
  height: 360px;
  margin: 10px 0;
  padding: 35px 20px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.white};
`;

const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  > h2 {
    margin-bottom: 20px;
    padding-left: 16px;
  }
`;

const LegendContainer = styled.ul`
  display: flex;
  list-style: none;
`;

const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;
  margin-bottom: 7px;
  margin-left: 16px;
  padding-left: 16px;
  > div {
    background-color: ${({ color }) => color};
    width: 40px;
    height: 40px;
    border-radius: 5px;
    font-size: 10px;
    line-height: 40px;
    text-align: center;
  }

  > span {
    margin-left: 8px;
  }
`;

export { Container, ChartHeader, LegendContainer, Legend };
