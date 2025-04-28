'use client';

import Head from "next/head";

export default function Wallets() {
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

                <div className="bg-white shadow rounded-lg overflow-hidden">
                    <div className="flex  border-b">
                        <button className={`flex-1 py-4 `}></button>

                    </div>
                </div>

            </main>
        </div>
    );
}