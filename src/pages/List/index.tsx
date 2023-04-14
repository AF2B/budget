import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import ContentHeader from '../../components/ContentHeader';
import ListCard from '../../components/ListCard';
import SelectInput from '../../components/SelectInput';
import { Container, Content, Filters } from './styles';

interface IRouteParams {
  type: string;
  [key: string]: string | undefined;
}

const List: React.FC<IRouteParams> = () => {
  const { type } = useParams<IRouteParams>();

  const title = useMemo(() => {
    return type === 'entry-balance' ? 'Entradas' : 'Saídas';
  }, [type]);

  const lineColor = useMemo(() => {
    return type === 'entry-balance' ? '#F7931B' : '#E44C4E';
  }, [type]);

  const months = [
    {
      value: 7,
      label: 'Julho'
    },
    {
      value: 8,
      label: 'Agosto'
    },
    {
      value: 9,
      label: 'Setembro'
    }
  ]

  const years = [
    {
      value: 2021,
      label: 2021
    },
    {
      value: 2022,
      label: 2022
    },
    {
      value: 2023,
      label: 2023
    }
  ]

  return (
    <Container>
      <ContentHeader title={title} lineColor={lineColor}>
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>
      <Filters>
        <button type="button" className='tag-filter tag-filter-recurrent'>
          Recorrentes
        </button>
        <button type="button" className='tag-filter tag-filter-eventual'>
          Eventuais
        </button>
      </Filters>
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
