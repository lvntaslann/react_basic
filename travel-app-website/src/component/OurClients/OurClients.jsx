import React from 'react';
import ourClientsData from './OurClientsData';


const OurClients = () => {
    return (
        <>
            <div className='py-12 bg-gray-100'>
                <div className='container mx-auto px-4'>
                    <h2 className='text-3xl font-bold text-center mb-8'>What Our Clients Say </h2>
                    <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {ourClientsData.map((ourclients, index) => (
                            <div key={index} className='bg-white rounded-lg shadow-md flex flex-col  item-center justify-center text-center  cursor-pointer'>
                                <div className='flex flex-col items-center justify-center mb-4 p-4 '>
                                    <img src={ourclients.profileImg} alt={ourclients.title} className='w-20 h-20 rounded-full mx-auto mb-4' />
                                    <h4 className='text-xl font-bold mb-2'>{ourclients.title}</h4>
                                    <p className='text-gray-600 italic'>{ourclients.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurClients;
