import React, { useMemo, useState } from 'react';

import ContentHeader from '../../components/ContentHeader';
import InfoWalletBox from '../../components/InfoWalletBox';
import SelectInput from '../../components/SelectInput';
import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';
import listOfMonths from '../../utils/months';
import { Container, Content } from './styles';

const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
  const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));

  const month = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month
      }
    });

  },[]);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    [...expenses, ...gains].forEach(item => {
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

  return (
    <Container>
      <ContentHeader title={'Dashboard'} lineColor={'#fff'}>
        <SelectInput options={month} onChange={event => setMonthSelected(event.target.value)} defaultValue={monthSelected}/>
        <SelectInput options={years} onChange={event => setYearSelected(event.target.value)} defaultValue={yearSelected}/>
      </ContentHeader>

      <Content>
        <InfoWalletBox
        title={'Saldo'}
        amount={3.200}
        footerLabel={'atualizado com base nas entradas'}
        icon={'dolar'}
        color={'#4E41F0'}
        />
        <InfoWalletBox
        title={'Entradas'}
        amount={4.500}
        footerLabel={'atualizado com base nas entradas'}
        icon={'arrowUp'}
        color={'#F7931B'}
        />
        <InfoWalletBox
        title={'Saídas'}
        amount={1.500}
        footerLabel={'atualizado com base nas entradas'}
        icon={'arrowDown'}
        color={'#E44C4E'}
        />
      </Content>
    </Container>
  );
}

export default Dashboard;
