import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <>
            <nav className="bg-white w-full">
                <div className="flex flex-wrap items-center justify-between mx-auto p-4 w-full max-w-screen-xl">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-600">Banking-app</span>
                    </a>
                    <div className="flex md:order-2 space-x-6 md:space-x-8 rtl:space-x-reverse">
                        {/* You can add buttons or other elements here */}
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 md:ml-auto" id="navbar-cta">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <Link to="/" className="block py-2 px-3 md:p-0 text-gray-900 hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/get-all-accounts" className="block py-2 px-3 md:p-0 text-gray-900 hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500">
                                    Get All Accounts
                                </Link>
                            </li>
                            <li>
                                <Link to="/add-account" className="block py-2 px-3 md:p-0 text-gray-900 hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500">
                                    Add Account
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavigationBar;
