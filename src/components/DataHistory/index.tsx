import React from 'react'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

import formatCurrency from '../../utils/formatCurrency';
import { ChartHeader, Container, Legend, LegendContainer } from './styles'

interface IDataHistoryProps {
  data: {
    month: string;
    amountEntry: number;
    amountOutput: number;
  }[],
  lineColorAmountEntry: string;
  lineColorAmountOutput: string;
}

const DataHistory: React.FC<IDataHistoryProps> = ({
  data,
  lineColorAmountEntry,
  lineColorAmountOutput
}) => {
  return (
    <Container>
      <ChartHeader>
        <h2>Histórico de Saldo</h2>
        <LegendContainer>
          <Legend color={lineColorAmountEntry}>
            <div></div>
            <span>Entradas</span>
          </Legend>
          <Legend color={lineColorAmountOutput}>
            <div></div>
            <span>Saídas</span>
          </Legend>
        </LegendContainer>
      </ChartHeader>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
          <XAxis dataKey="month" stroke="#cecece" />
          <Tooltip formatter={value => formatCurrency(Number(value))}/>
          <Line
            type="monotone"
            dataKey="amountEntry"
            name='Entradas'
            stroke={lineColorAmountEntry}
            strokeWidth={5}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="amountOutput"
            name='Saídas'
            stroke={lineColorAmountOutput}
            strokeWidth={5}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
}

export default DataHistory;
