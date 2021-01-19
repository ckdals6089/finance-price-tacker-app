import React from 'react';
import './App.css';
import CoinList from './components/CoinList';
import { CoinProvider } from './components/CoinContext';

function App() {
  return (
    <CoinProvider>
      <div className="App">
        <CoinList />
      </div>
    </CoinProvider>
  )
}

export default App;

