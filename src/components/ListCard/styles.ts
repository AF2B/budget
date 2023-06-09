import styled from "styled-components";

interface ITagProps {
  color: string;
}

export const Container = styled.li`
  background-color: ${(props) => props.theme.colors.tertiary};
  list-style: none;
  border-radius: 12px;
  margin: 10px 0;
  padding: 12px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all .4s;
  position: relative;
  cursor: pointer;
  &:hover {
    opacity: .9;
    transform: translateX(10px);
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;
  }
  > div span, div small {
    margin-left: 10px;
  }

  > div span {
    font-size: 21px;
    font-weight: 500;
  }
`;

export const Tag = styled.div<ITagProps>`
  position: absolute;
  left: 0;
  width: 10px;
  height: 60%;
  background-color: ${(props) => props.color};
`;
