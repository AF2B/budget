import styled from "styled-components";

const Container = styled.button`
  width: 100%;
  margin: 7px 0;
  padding: 7px;
  border-radius: 5px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.warning};
  transition: opacity 0.3s;
  &hover{
    opacity: 0.7;
  }
`;

export { Container };
