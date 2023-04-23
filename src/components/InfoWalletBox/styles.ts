import styled from "styled-components";

interface IContainerProps {
  color: string;
}

const Container = styled.div<IContainerProps>`
  width: 32%;
  height: 150px;
  margin: 10px 0;
  padding: 10px 20px;
  background-color: ${(props) => props.color};
  color: ${(props) => props.theme.colors.white};
  border-radius: 9px;
  position: relative;
  overflow: hidden;

  > img {
    height: 110%;
    position: absolute;
    top: -10px;
    right: -30px;
    opacity: .2;
  }

  > span {
    font-size: 20px;
    font-weight: 500;
  }

  > small {
    font-size: 12px;
    position: absolute;
    bottom: 10px;
  }
`;

export { Container };
