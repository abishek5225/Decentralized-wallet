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
            {symbol:'ETH', }
        ]
    }
    return (
        <div>

        </div>
    );
}