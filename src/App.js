import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coin from './coin';
import { COIN_API_URL } from './config';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get(COIN_API_URL)
      .then(res => {
        setCoins(res.data);
      }).catch(error => console.log(error))
  }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="App">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input type="text" placeholder="search"
            onClick={handleChange} className="coin-input" />
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        )
      })}
    </div>
  );
}

export default App;



<img class="" alt="bitcoin (BTC) 7d chart"
  data-src="https://www.coingecko.com/coins/1/sparkline"
  data-srcset="https://www.coingecko.com/coins/1/sparkline 1x"
  src="https://www.coingecko.com/coins/1/sparkline"
  srcset="https://www.coingecko.com/coins/1/sparkline 1x"></img>