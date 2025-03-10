import React from 'react'

const Gallery = () => {
    return (
        <>
            <div className='relative h-96 bg-cover bg-center'
                style={{ backgroundImage: "url('https://picsum.photos/1980/720?random/?travel')" }}>
                <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
                    <h1 className='text-4xl md:text-6xl font-bold text-white mb-4 text-center'>Galery</h1>
                </div>
            </div>
        </>
    )
}

export default Gallery
