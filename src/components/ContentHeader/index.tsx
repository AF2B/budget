import React from 'react';

import SelectInput from '../SelectInput';
import { Container, SelectInputData, TitleContainer } from './styles';

interface IContentHeaderProps {
  title: string;
  lineColor: string;
  children: React.ReactNode;
}

const ContentHeader: React.FC<IContentHeaderProps> = ({title, lineColor, children}) => {
  return (
    <Container>
      <TitleContainer lineColor={lineColor}>
        <h1>{title}</h1>
      </TitleContainer>
      <SelectInputData>
        {children}
      </SelectInputData>
    </Container>
  );
};

export default ContentHeader;
