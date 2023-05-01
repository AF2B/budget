import React from 'react';
import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip } from 'recharts';

import formatCurrency from '../../utils/formatCurrency';
import { Container, Legend, LegendContainer, SideLeft, SideRight } from './styles';

interface DataCardChart {
  title: string;
  data: {
    name: string;
    amount: number;
    percent: number;
    color: string;
  }[]
}

const DataCardChart: React.FC<DataCardChart> = ({title, data}) => {
  return (
    <Container>
      <SideLeft>
        <h2>{title}</h2>
        <LegendContainer>
        {
          data.map((item) => (
            <Legend key={item.name} color={item.color}>
              <div>{item.percent}%</div>
              <span>{item.name}</span>
            </Legend>
          ))
        }
      </LegendContainer>
      </SideLeft>
      <SideRight>
        <ResponsiveContainer>
          <BarChart data={data}>
            <Bar dataKey="amount" name='Valor'>
              {data.map((indicator) => (
                <Cell
                  key={indicator.name}
                  cursor="pointer"
                  fill={indicator.color}
                />
              ))}
            </Bar>
            <Tooltip
              formatter={value => formatCurrency(Number(value))}
              cursor={{fill: 'none'}}
            />
          </BarChart>
        </ResponsiveContainer>
      </SideRight>
    </Container>
  );
};

export default DataCardChart;
