'use client'

import { useState } from "react";
import { ArrowUpRight, ArrowDownLeft, BarChart2, Wallet, Settings, Bell, Search, Plus, Share2 } from 'lucide-react';
export default function BrowserWallet() {

    const [activeTab, setActiveTab] = useState('Browserwallet');
    const [activeoperation, setActiveoperation] = useState('Send');
    const [amount, setAmount]= useState('');
    const [address, setAddress]= useState('');
    const [selectedToken, setSelectedToken] = useState('ETH');

    //dummy data
    const walletData = {
        balance: 2000,
        usdValue:50000,
        tokens:[
            {symbol:'ETH', name:'Etherium', balance:6.5, usdValue: 2000},
            {symbol:'BTC', name:'Bitcoin', balance:0.5, usdValue: 20000},
            {symbol:'USDT', name:'Tether', balance:1000, usdValue: 1000},
            {symbol:'BNB', name:'Binance Coin', balance:2, usdValue: 500},
            {symbol:'XRP', name:'Ripple', balance:100, usdValue: 200},
            {symbol:'LTC', name:'Litecoin', balance:10, usdValue: 1000},
            {symbol:'DOGE', name:'Dogecoin', balance:10000, usdValue: 500},
            {symbol:'USDT', name:'Teather USDT', balance:1000, usdValue: 1000},
        ],
        recentTransactions: [
            { type: 'sent', amount: 0.05, token: 'ETH', to: '0x1a2...3b4c', time: '2h ago' },
            { type: 'received', amount: 100, token: 'USDC', from: '0x5d6...7e8f', time: '1d ago' },
            { type: 'swap', amount: 0.1, fromToken: 'ETH', toToken: 'BTC', toAmount: 0.0023, time: '3d ago' }
        ]
    }

    //balance display component
    const BalanceDisplay = () =>(
        <div></div>
    );
    return (
        <div>

        </div>
    );
}