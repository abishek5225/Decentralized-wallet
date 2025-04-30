'use client';
import { useState } from "react";
import { Chrome, Smartphone, ArrowRight, Download } from 'lucide-react';

import Head from "next/head";

export default function Wallets() {
    const [activeTab, setActiveTab] = useState('browser');
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

                <div className="bg-white shadow rounded-lg overflow-hidden mt-8 bg-gray-50 h-90">
                    <div className="flex  border-b">
                    <button
              className={`flex-1 py-5 px-6 text-center font-medium w-30 transition-colors duration-200 ${
                activeTab === 'browser'
                  ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setActiveTab('browser')}
            >
              <div className="flex items-center justify-center">
                <Chrome className="w-5 h-5 mr-2" />
                Browser Extension
              </div>
            </button>
            <button
              className={`flex-1 py-5 px-6 text-center font-medium transition-colors duration-200 ${
                activeTab === 'mobile'
                  ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setActiveTab('mobile')}
            >
              <div className="flex items-center justify-center">
                <Smartphone className="w-5 h-5 mr-2" />
                Mobile App
              </div>
            </button>

                    </div>
                </div>

            </main>
        </div>
    );
}