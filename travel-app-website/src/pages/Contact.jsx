import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaPhone, FaAddressCard } from "react-icons/fa";

const Contact = () => {
    return (
        <>
            <div className='relative h-96 bg-cover bg-center'
                style={{ backgroundImage: "url('https://picsum.photos/1980/720?random/?travel')" }}>
                <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
                    <h1 className='text-4xl md:text-6xl font-bold text-white mb-4 text-center'>Contact Us</h1>
                </div>
            </div>
            <div className='p-8 max-w-4xl mx-auto flex flex-col md:flex-row gap-8'>
                <div className='bg-white p-6 rounded-lg shadow-lg flex-1'>
                    <h2 className='text-2xl font-bold mb-6'>Contact Details</h2>
                    <div className='space-y-4'>
                        <div className='flex items-center space-x-4'>
                            <IoMdMail className='text-2xl text-gray-700' />
                            <p className='text-lg'>info@travelagency.com</p>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <FaPhone className='text-2xl text-gray-700' />
                            <p className='text-lg'>+123 456 7890</p>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <FaAddressCard className='text-2xl text-gray-700' />
                            <p className='text-lg'>123 Travel St, City, Country</p>
                        </div>
                    </div>
                </div>

                <div className='bg-white p-6 rounded-lg shadow-lg flex-1'>
                    <h2 className='text-2xl font-bold mb-6'>Get in Touch</h2>
                    <form className='space-y-4'>
                        <div>
                            <label htmlFor="Name" className='block text-lg font-medium mb-1'>Name</label>
                            <input type="text" id="Name" placeholder='Enter Name' className='w-full p-2 border border-gray-300 rounded-md' />
                        </div>
                        <div>
                            <label htmlFor="Mail" className='block text-lg font-medium mb-1'>Mail</label>
                            <input type="email" id="Mail" placeholder='Enter Email' className='w-full p-2 border border-gray-300 rounded-md' />
                        </div>
                        <button type="submit" className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600'>Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
