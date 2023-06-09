import React from 'react';

import { Container } from './styles';

interface IMessageWalletBox {
  title: string;
  description: string;
  footerText: string;
  icon: string;
}

const MessageWalletBox: React.FC<IMessageWalletBox> = ({
  title,
  description,
  footerText,
  icon
}) => {
  return (
    <Container>
      <header>
        <h1>
          {title}
          <img src={icon} alt={title}/>
        </h1>
        <p>
          {description}
        </p>
      </header>
      <footer>
        <span>
          {footerText}
        </span>
      </footer>
    </Container>
  );
};

export default MessageWalletBox;
