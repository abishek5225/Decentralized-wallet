'use client';
import { useState } from "react";

import { CiMobile1 } from "react-icons/ci";
import { AiOutlineDesktop } from "react-icons/ai";


import Head from "next/head";

export default function Download() {
    
    return (

        <div className="min-h-screen bg-gray-800">
            <Head>
                <title>Wallets</title>
                <meta name="description" content="Wallets page" />
            </Head>
            <main className="max-w-4xl mx-auto py-12 px-4 sm:px6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-3xl lg:text-7xl sm:text-5xl font-bold text-gray-100">Download GuardianChain</h1>
                    <p className="text-gray-100 text-xl">Simple and Secure access to your digital assets.</p>
                </div>
                {/* download section */}
                
                <div className="bg-gray-800 shadow rounded-lg overflow-hidden mt-8 bg-gray-50 h-30 flex gap-5">
                    <button 
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white flex items-center gap-2  py-2 px-4 rounded"
                    onClick={() => window.open('https://guardianchain.com/download', '_blank')}
                    >
                        <CiMobile1  className="w-20 h-30"/>
                        <span >Download Mobile App</span>
                        </button>
                        
                    
                    <button
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white flex items-center gap-2  py-2 px-4 rounded"
                    onClick={()=> window.open('https://guardianchain.com/download', '_blank')}
                    >
                        <AiOutlineDesktop className="w-20 h-30" />
                        <span>Download BrowserExtension</span>
                        </button>
                </div>

            </main>
        </div>
    );
}