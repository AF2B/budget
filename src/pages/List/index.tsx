import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import ListCard from '../../components/ListCard';
import SelectInput from '../../components/SelectInput';
import { Container, Content } from './styles';

const List: React.FC = () => {
  const options = [
    {
      value: 'André',
      label: 'Borba'
    },
    {
      value: 'Filipe',
      label: 'Fonsêca'
    }
  ]

  return (
    <Container>
      <ContentHeader title={'Saídas'} lineColor={'#E44C4E'}>
        <SelectInput options={options} />
      </ContentHeader>
      <Content>
        <ListCard
          tagColor={'#E44C4E'}
          title={'Conta de Luz'}
          subTitle={'28/12/2023'}
          amount={'R$ 130,00'}
        />
      </Content>
    </Container>
  );
}

export default List;
