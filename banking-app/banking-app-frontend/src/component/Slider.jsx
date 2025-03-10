import React from 'react';
import { Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';

const Slider = () => {

    const images = [
        'https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg',  
        'https://images.pexels.com/photos/4968394/pexels-photo-4968394.jpeg', 
        'https://images.pexels.com/photos/4386372/pexels-photo-4386372.jpeg'  
    ];

    return (
        <section className='w-screen h-screen overflow-hidden m-0 p-0 box-border left-0 right-0 absolute'>
            <Swiper
                modules={[Autoplay, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop={true}
                className='w-full h-full'
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index} className='flex items-center justify-center'>
                        <a href='/#'>
                            <img
                                src={img}
                                alt={`slide-${index + 1}`}
                                className='w-full h-full object-cover'
                            />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Slider;
