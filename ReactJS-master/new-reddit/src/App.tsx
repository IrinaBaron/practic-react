import React, {useEffect, useState} from 'react';
import './main.global.css';
// import { MyHooks, useIsMounted } from './FunctionalExample';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList';
import { useToken } from './hooks/useToken';
import { generateId } from './utils/react/generateRandomIndex';


const LIST = [
  { text: 'some' },
  { text: 'other some' },
  { text: 'some' },
].map(generateId);

function AppComponent() {
  
  const [token] = useToken();

  return (
    <Layout>
      <Header token={token} />
      <Content>
        <CardsList />

      </Content>

    </Layout>
  )
}

export const App = (() => <AppComponent />);