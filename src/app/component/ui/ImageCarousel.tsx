import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hides navigation arrows for a cleaner look
  };

  const images = [
    '/images/banner1.jpg',
    '/images/banner2.jpg',
    '/images/banner3.jpg',
    '/images/banner4.jpg',
    '/images/banner5.jpg',
    '/images/banner6.jpg',
    '/images/banner7.jpg',
    '/images/banner8.jpg',
    '/images/banner9.jpg',
    '/images/banner10.jpg',
    '/images/banner11.jpg',
    '/images/banner12.jpg',
    '/images/banner13.jpg',
    '/images/banner14.jpg',
    '/images/banner15.jpg',
    '/images/banner16.jpg',
  ];

  return (
    <div className='relative lg:max-w-[1000px] mx-auto px-4'>
      <div className='overflow-hidden rounded-lg shadow-xl'>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className='relative  h-[250px] md:h-[340px] lg:h-[400px]'>
              <Image
                src={image}
                alt={`Slide ${index}`}
                layout='fill'
                objectFit='fill'
                className='rounded-md '
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageCarousel;
