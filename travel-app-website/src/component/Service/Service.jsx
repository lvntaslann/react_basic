import React from 'react';
import serviceData from './ServiceData';

const Service = () => {
    return (
        <>
            <div className='py-12 bg-gray-100'>
                <div className='container mx-auto px-4'>
                    <h2 className='text-3xl font-bold text-center mb-8'>Our Services </h2>
                    <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {serviceData.map((service, index) => (
                            <div key={index} className='bg-white rounded-lg shadow-md flex flex-col p-6 item-center justify-center hover:scale-105 cursor-pointer'>
                                <div className='flex flex-col items-center justify-center mb-4 '>{service.icon}
                                    <h4 className='text-xl font-bold mb-2'>{service.title}</h4>
                                    <p className='text-gray-600'>{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;
