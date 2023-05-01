import React, { useMemo, useState } from 'react';

import sadImg from '../../assets/cryingface.svg';
import happyImg from '../../assets/happy.svg';
import ContentHeader from '../../components/ContentHeader';
import DataCardChart from '../../components/DataCardChart';
import DataHistory from '../../components/DataHistory';
import DataPieChart from '../../components/DataPieChart';
import InfoWalletBox from '../../components/InfoWalletBox';
import MessageWalletBox from '../../components/MessageWalletBox';
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

  const totalExpenses = useMemo(() => {
    let total: number = 0;

    expenses.forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if(month === Number(monthSelected) && year === Number(yearSelected)) {
        try {
          total += Number(item.amount);
        } catch {
          throw new Error('Invalid amount! Amount must be number.');
        }
      }
    });
    return total;
  },[monthSelected, yearSelected]);

  const totalGains = useMemo(() => {
    let total: number = 0;

    gains.forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if(month === Number(monthSelected) && year === Number(yearSelected)) {
        try {
          total += Number(item.amount);
        } catch {
          throw new Error('Invalid amount! Amount must be number.');
        }
      }
    });
    return total;
  },[monthSelected, yearSelected]);

  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses;
  },[totalGains, totalExpenses]);

  const messageInfo = useMemo(() => {
    switch(true) {
      case totalBalance < 0:
        return {
          title: 'Que triste!',
          description: 'Neste mês, você gastou mais do que deveria.',
          footerText: 'Verifique seus gastos e tente cortar algumas coisas desnecessárias.',
          icon: sadImg
        };
      case totalBalance === 0:
        return {
          title: 'Ufaa!',
          description: 'Neste mês, você gastou exatamente o que ganhou.',
          footerText: 'Tenha cuidado. No próximo mês tente poupar o seu dinheiro.',
          icon: happyImg
        };
      default:
        return {
          title: 'Muito bem!',
          description: 'Sua carteira está positiva!',
          footerText: 'Continue assim. Considere investir o seu saldo.',
          icon: happyImg
        };
    }
  }, [totalBalance]);

  const relationExpensesGains = useMemo(() => {
    const total = totalGains + totalExpenses;
    const percentGains = Number(((totalGains / total) * 100).toFixed(0));
    const percentExpenses = Number(((totalExpenses / total) * 100).toFixed(0));
    const data = [{
      name: 'Entradas',
      value: totalGains,
      percent: percentGains ? percentGains : 0,
      color: '#F7931B'
    },
    {
      name: 'Saídas',
      value: totalExpenses,
      percent: percentExpenses ? percentExpenses : 0,
      color: '#E44C4E'
    }];
    return data;
  },[totalGains, totalExpenses]);

  const historyData = useMemo(() => {
    return listOfMonths.map((_, month) => {
      let amountEntry = 0;
      gains.forEach(gain => {
        const date = new Date(gain.date);
        const gainMonth = date.getMonth();
        const gainYear = date.getFullYear();

        if(gainMonth === month && gainYear === Number(yearSelected)) {
          try {
            amountEntry += Number(gain.amount);
          } catch {
            throw new Error('amountEntry is invalid. amountEntry must be valid number.');
          }
        }
      });
      let amountOutput = 0;
      expenses.forEach(expense => {
        const date = new Date(expense.date);
        const expenseMonth = date.getMonth();
        const expenseYear = date.getFullYear();

        if(expenseMonth === month && expenseYear === Number(yearSelected)) {
          try {
            amountOutput += Number(expense.amount);
          } catch {
            throw new Error('amountOutput is invalid. amountOutput must be valid number.');
          }
        }
      });
      return {
        monthNumber: month,
        month: listOfMonths[month].substring(0, 3),
        amountEntry,
        amountOutput
      }
    }).filter(item => {
      const currentMonth = new Date().getMonth();
      const currentYear = new Date().getFullYear();
      return (yearSelected === String(currentYear) && item.monthNumber <= currentMonth) || (yearSelected < String(currentYear));
    });
  },[yearSelected]);

  const relationExpensesEventualRecurrent = useMemo(() => {
    let amountRecurrent: number = 0;
    let amountEventual: number = 0;

    expenses.filter((expense) => {
      const date = new Date(expense.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      return month === Number(monthSelected) && year === Number(yearSelected);
    }).forEach((expense) => {
      if(expense.frequency === 'recorrente') {
        return amountRecurrent += Number(expense.amount);
      }
      if(expense.frequency === 'eventual') {
        return amountEventual += Number(expense.amount);
      }
    });
    const total = amountRecurrent + amountEventual;
    return [{
      name: 'Recorrentes',
      amount: amountRecurrent,
      percent: Number(((amountRecurrent / (amountRecurrent + amountEventual)) * 100).toFixed(0)),
      color: '#F7931B'
    },
    {
      name: 'Eventuais',
      amount: amountEventual,
      percent: Number(((amountEventual / (amountRecurrent + amountEventual)) * 100).toFixed(0)),
      color: '#E44C4E'
    }]
  },[monthSelected, yearSelected]);

  const relationGainsEventualRecurrent = useMemo(() => {
    let amountRecurrent: number = 0;
    let amountEventual: number = 0;

    gains.filter((gain) => {
      const date = new Date(gain.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      return month === Number(monthSelected) && year === Number(yearSelected);
    }).forEach((gain) => {
      if(gain.frequency === 'recorrente') {
        return amountRecurrent += Number(gain.amount);
      }
      if(gain.frequency === 'eventual') {
        return amountEventual += Number(gain.amount);
      }
    });
    const total = amountRecurrent + amountEventual;
    return [{
      name: 'Recorrentes',
      amount: amountRecurrent,
      percent: Number(((amountRecurrent / (amountRecurrent + amountEventual)) * 100).toFixed(0)),
      color: '#F7931B'
    },
    {
      name: 'Eventuais',
      amount: amountEventual,
      percent: Number(((amountEventual / (amountRecurrent + amountEventual)) * 100).toFixed(0)),
      color: '#E44C4E'
    }]
  },[monthSelected, yearSelected]);

  return (
    <Container>
      <ContentHeader title={'Dashboard'} lineColor={'#fff'}>
        <SelectInput options={month} onChange={event => setMonthSelected(event.target.value)} defaultValue={monthSelected}/>
        <SelectInput options={years} onChange={event => setYearSelected(event.target.value)} defaultValue={yearSelected}/>
      </ContentHeader>

      <Content>
        <InfoWalletBox
        title={'Saldo'}
        amount={totalBalance}
        footerLabel={'atualizado com base nas entradas'}
        icon={'dolar'}
        color={'#4E41F0'}
        />
        <InfoWalletBox
        title={'Entradas'}
        amount={totalGains}
        footerLabel={'atualizado com base nas entradas'}
        icon={'arrowUp'}
        color={'#F7931B'}
        />
        <InfoWalletBox
        title={'Saídas'}
        amount={totalExpenses}
        footerLabel={'atualizado com base nas entradas'}
        icon={'arrowDown'}
        color={'#E44C4E'}
        />

        <MessageWalletBox
        title={messageInfo.title}
        description={messageInfo.description}
        footerText={messageInfo.footerText}
        icon={messageInfo.icon}
        />

        <DataPieChart data={relationExpensesGains}/>
        <DataHistory
          data={historyData}
          lineColorAmountEntry={'#F7931B'}
          lineColorAmountOutput={'#E44C4E'}
        />
        <DataCardChart
          title={'Saídas'}
          data={relationExpensesEventualRecurrent}
        />
        <DataCardChart
          title={'Entradas'}
          data={relationGainsEventualRecurrent}
        />
      </Content>
    </Container>
  );
}

export default Dashboard;
