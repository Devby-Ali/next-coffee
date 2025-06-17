'use client';

import React, { useRef } from 'react';
import Icon from '../Icon';
import Image from 'next/image';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductsProps } from '@/types/components.types';
import ProductCart from '../ui/products/ProductCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const BestSellingProducts = ({ productsData }: ProductsProps): React.JSX.Element => {
  const swiperRef = useRef<SwiperType | null>(null);
  const bestSelling = productsData.filter((product) => product.score >= 4);

  return (
    <section className="best-selling mb-8 md:mb-20">
      <div className="container">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-5 md:mb-12">
          <div>
            <h3 className="section-title">محصولات پر فروش</h3>
            <span className="section-subtitle">پیشنهاد قهوه خور ها ...</span>
          </div>
          <div className="flex gap-x-3 md:gap-x-4.5">
            <div
              className="swiper-button-prev-custom"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <Icon name="chevron-left-mini" className="w-5 h-5 md:w-6.5 md:h-6.5 rotate-180" />
            </div>

            <div
              className="swiper-button-next-custom"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <Icon name="chevron-left-mini" className="w-5 h-5 md:w-6.5 md:h-6.5" />
            </div>
          </div>
        </div>
        {/* <!-- Slider main container --> */}
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1536: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          spaceBetween={15}
          slidesPerView={2}
          navigation={false}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {/* <!-- Slides --> */}
          {bestSelling.map((product) => (
            <SwiperSlide>
              <ProductCart key={product.id} {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BestSellingProducts;
