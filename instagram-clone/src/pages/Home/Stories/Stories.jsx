import React from 'react';
import { Link } from 'react-router-dom';
import storiesData from './StoriesData';
import TextEllipse from '../../TextEllipse';

const Stories = () => {
    return (
        <div className='lg:max-w-[41vw] md:w-[70vw] sm:max-w-full max-w-full w-full h-auto flex items-center gap-x-3.5 overflow-x-scroll'>
            {/* Profil Resmi */}
            <div className='flex items-center justify-center flex-col flex-shrink-0'>
                <div className='w-16 h-16 rounded-full object-cover p-[2px] bg-gray-600 border-2 border-white'>
                    <img
                        src="https://picsum.photos/200/300?random"
                        alt={`Profile`}
                        className='rounded-full w-full h-full object-cover bg-black p-[2.5px]'
                    />
                </div>
                <TextEllipse username="1lvntaslann" />
            </div>

            {/* Diğer Hikayeler */}
            {storiesData.map((story) => (
                <Link key={story.id} to="/" className='flex items-center justify-center flex-col flex-shrink-0'>
                    <div className='w-16 h-16 rounded-full object-cover p-[2px] bg-gradient-to-r from-[#f02aa6] to-[#ff6f48]'>
                        <img
                            src={story.imageUrl}
                            alt={`Story of ${story.username}`}
                            className='rounded-full w-full h-full object-cover bg-black p-[2.5px]'
                        />
                    </div>
                    <TextEllipse username={story.username} />
                </Link>
            ))}
        </div>
    );
};

export default Stories;
