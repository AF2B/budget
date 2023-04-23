import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import ContentHeader from '../../components/ContentHeader';
import ListCard from '../../components/ListCard';
import SelectInput from '../../components/SelectInput';
import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';
import listOfMonths from '../../utils/months';
import { Container, Content, Filters } from './styles';

interface IRouteParams {
  type: string;
  [key: string]: string | undefined;
}

interface IData {
  id: string;
  description: string;
  amountFormatted: string;
  frequency: string;
  dateFormatted: string;
  tagColor: string;
}

const List: React.FC<IRouteParams> = () => {
  const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
  const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));

  const [data, setData] = useState<IData[]>([]);

  const { type } = useParams<IRouteParams>();

  const title = useMemo(() => {
    return type === 'entry-balance' ? 'Entradas' : 'Saídas';
  }, [type]);

  const lineColor = useMemo(() => {
    return type === 'entry-balance' ? '#2699f0' : '#e50707';
  }, [type]);

  const listData = useMemo(() => {
    return type === 'entry-balance' ? gains : expenses;
  }, [type]);

  const month = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month
      }
    });

  },[listData]);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    listData.forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if(!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map(year => {
      return {
        value: year,
        label: year
      }
    });
  },[]);

 useEffect(() => {
  const formattedData = listData
    .filter(item => new Date(item.date).getFullYear() === Number(yearSelected))
    .filter(item => new Date(item.date).getMonth() + 1 === Number(monthSelected))
    .map(item => {
      return {
        id: String(Math.random() * data.length),
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dateFormatted: formatDate(item.date),
        tagColor: item.frequency === 'recorrente' ? '#2699f0' : '#e50707'
      }
  });
  setData(formattedData);
}, [monthSelected, yearSelected]);

  return (
    <Container>
      <ContentHeader title={title} lineColor={lineColor}>
        <SelectInput options={month} onChange={event => setMonthSelected(event.target.value)} defaultValue={monthSelected}/>
        <SelectInput options={years} onChange={event => setYearSelected(event.target.value)} defaultValue={yearSelected}/>
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
        {
          data.map(item => (
            <ListCard
              key={item.id}
              tagColor={item.tagColor}
              title={item.description}
              subTitle={item.dateFormatted}
              amount={item.amountFormatted}
            />
          ))
        }
      </Content>
    </Container>
  );
}

export default List;
