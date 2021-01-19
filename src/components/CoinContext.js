import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import { COIN_API_URL } from '../config';


export const CoinContext = createContext();

export const CoinProvider = props => {

    const [coins, setCoins] = useState([]);

    useEffect(() => {
        axios.get(COIN_API_URL)
            .then(res => {
                setCoins(res.data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <CoinContext.Provider value={[coins, setCoins]} >
            {props.children}
        </CoinContext.Provider >
    );
}

