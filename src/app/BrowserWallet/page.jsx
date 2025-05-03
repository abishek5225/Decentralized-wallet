'use client'

export default function BrowserWallet() {
    return (
        <div className="min-h-screen bg-gray-900 text-white font-sans">
            <div className=" flex flex-col items-center">
            <textarea type="text" className="bg-gray-600  rounded h-90 w-100 resize-none"  placeholder="Enter your passpharse here. . ."/>
            <button className="bg-blue-600 hover:bg-blue-700 mt-5 w-70 h-15 rounded">Unlock Wallet</button>
            </div>
                
        </div>
    );
}