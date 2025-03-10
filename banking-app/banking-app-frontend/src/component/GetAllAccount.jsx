import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GetAllAccount = () => {
    const [allAccounts, setAllAccounts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/api/accounts")
            .then(res => res.json())
            .then(result => setAllAccounts(result));
    }, []);

    const handleDepositClick = (id) => {
        navigate(`/deposit/${id}`);
    };

    const handleWithDrawClick = (id) => {
        navigate(`/withdraw/${id}`);
    };

    return (
        <>
        <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {allAccounts.map(account => (
                    <div key={account.id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <div className="flex flex-col items-start">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {account.accountHolderName}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Balance: ${account.balance.toFixed(2)}
                            </p>
                        </div>
                        <div className="flex justify-evenly mt-8">
                            <button
                                type="button"
                                className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                                onClick={() => handleDepositClick(account.id)}
                            >
                                Deposit
                            </button>
                            <button
                                type="button"
                                className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                onClick={()=> handleWithDrawClick(account.id)}
                            >
                                Withdraw
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default GetAllAccount;
