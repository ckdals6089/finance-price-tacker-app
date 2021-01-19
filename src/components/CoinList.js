import React, { useState, useContext } from 'react';
import Coin from './Coin';
import './Coin.css';
import { CoinContext } from './CoinContext';

const CoinList = () => {

    const [coins, setCoins] = useContext(CoinContext);
    const [search, setSearch] = useState('');

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleChange = e => {
        setSearch(e.target.value);
    };

    return (
        <div className='coin-app'>
            <div className='coin-search'>
                <h1 className='coin-text'>Search a currency</h1>
                <form>
                    <input
                        className='coin-input'
                        type='text'
                        onChange={handleChange}
                        placeholder='Search'
                    />
                </form>
            </div>
            <div className='coin-container'>
                <div className='coin-row'>
                    <div className='coin'>
                        <h1 className="nav-coin">Coin</h1>
                        <div className='coin-data'>
                            <p className="nav-coin-price">price</p>
                            <p className="nav-coin-volume">Volume</p>
                            <p className="nav-coin-percent">24h</p>
                            <p className="nav-coin-marketcap ">Market Cap.</p>
                        </div>
                    </div>
                </div>
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

                );
            })}
        </div>
    );
}

export default CoinList;