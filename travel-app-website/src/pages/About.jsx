import React from 'react'

const About = () => {
    return (
        <>
            <div className='relative h-96 bg-cover bg-center'
                style={{ backgroundImage: "url('https://picsum.photos/1980/720?random/?travel')" }}>
                <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
                    <h1 className='text-4xl md:text-6xl font-bold text-white mb-4 text-center'>About Our Company</h1>
                </div>
            </div>
            <div className='p-8 max-w-4xl mx-auto'>
                <div className='bg-white p-6 rounded-lg shadow-lg'>
                    <h2 className='text-3xl font-bold mb-4'>Welcome to Travel Agency</h2>
                    <p className='text-lg text-gray-700 mb-4'>
                        At Travel Agency, we are dedicated to providing the best service in the travel industry. With years of experience and a passion for exploring new destinations, our team is committed to making your travel experience unforgettable.
                    </p>
                    <p className='text-lg text-gray-700 mb-4'>
                        We offer a range of services including personalized travel planning, exclusive packages, and on-the-go support to ensure that every aspect of your journey is seamless. Whether you're looking for a relaxing vacation, an adventurous getaway, or a business trip, we've got you covered.
                    </p>
                    <p className='text-lg text-gray-700'>
                        Our mission is to make travel accessible and enjoyable for everyone. With our dedicated team and extensive network of partners, we strive to exceed your expectations and deliver exceptional travel experiences. Thank you for choosing [Your Company Name], and we look forward to serving you.
                    </p>
                </div>
            </div>
        </>
    )
}

export default About
