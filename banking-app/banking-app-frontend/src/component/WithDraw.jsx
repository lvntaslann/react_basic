import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
const WithDraw = () => {
    const [balance, setBalance] = useState('');
    const { id } = useParams();

    const handleClick = (e) => {
        e.preventDefault();
        const numericBalance = parseFloat(balance);
        if (isNaN(numericBalance) || numericBalance <= 0) {
            console.error("Invalid balance value");
            return;
        }

        const requestBody = { amount: numericBalance };
        fetch(`http://localhost:8080/api/accounts/${id}/withdraw`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody)
        })
        .then(response => response.json())
        .then(result => {
            console.log("Withdraw successful", result);
            setBalance('');
        })
        .catch(err => {
            console.error("Error:", err);
        });
    };


    
  return (
   <>
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <h1 className="mb-4 text-6xl font-semibold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Withdraw</h1>
            <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                            Withdraw amount
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            value={balance}
                            onChange={(e) => setBalance(e.target.value)}
                            placeholder="Withdraw Amount"
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handleClick}
                        >
                            Withdraw
                        </button>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2024 Levent Aslan. All rights reserved.
                </p>
            </div>
        </div>
   </>
  )
}

export default WithDraw
