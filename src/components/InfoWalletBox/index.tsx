import React, { useMemo } from 'react';
import CountUp from 'react-countup';

import arrowDownImg from '../../assets/arrowDown.svg';
import arrowUpImg from '../../assets/arrowUp.svg';
import dolarImg from '../../assets/dolar.svg';
import { Container } from './styles';

interface IInfoWalletBoxProps {
  title: string;
  amount: number;
  footerLabel: string;
  icon: 'dolar' | 'arrowUp' | 'arrowDown';
  color: string;
}

const InfoWalletBox: React.FC<IInfoWalletBoxProps> = ({
    title,
    amount,
    footerLabel,
    icon,
    color,
  }
) => {
  const iconSelected = useMemo(() => {
    switch (icon) {
      case 'dolar':
        return dolarImg;
      case 'arrowUp':
        return arrowUpImg;
      case 'arrowDown':
        return arrowDownImg;
      default:
        return undefined;
    }
  }, [icon, dolarImg, arrowUpImg, arrowDownImg]);

  return (
    <Container color={color}>
      <span>{title}</span>
      <h1>
        <CountUp
          end={amount}
          prefix='R$ '
          separator='.'
          decimal='.'
          decimals={3}
          duration={3}
          preserveValue={true}
        />
      </h1>
      <small>{footerLabel}</small>
      <img src={iconSelected} alt={title} />
    </Container>
  );
};

export default InfoWalletBox;
