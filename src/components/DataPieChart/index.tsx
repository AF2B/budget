import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

import { Container, Legend, LegendContainer, SideLeft, SideRight } from './styles';

interface IDataPieChartProps {
  data: {
    name: string;
    value: number;
    percent: number;
    color: string;
  }[];
}

const DataPieChart: React.FC<IDataPieChartProps> = ({ data }) => (
  <Container>
    <SideLeft>
      <h2>Relação</h2>
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
        <PieChart>
          <Pie data={data} dataKey="percent">
            {
              data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))
            }
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </SideRight>
  </Container>
);

export default DataPieChart;
