import React from 'react';

import Aside from '../Aside';
import Content from '../Content';
import MainHeader from '../MainHeader';
import { GridLayout } from './styles';

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <>
      <GridLayout>
        <MainHeader />
        <Aside />
        <Content>
          {children}
        </Content>
      </GridLayout>
    </>
  );
};

export default Layout;
