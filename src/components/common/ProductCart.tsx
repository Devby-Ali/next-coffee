import React from 'react';
import Icon from '../Icon';
import Image from 'next/image';
import { ProductsDataProps } from '@/types/components.types';

const ProductCart = (props: ProductsDataProps): React.JSX.Element => {
  console.log(props);
  return (
    <div className="p-2 md:p-5 bg-white dark:bg-zinc-700 shadow-normal rounded-2xl">
      <div className="relative mb-2 md:mb-5">
        <Image
          height={250}
          width={250}
          src={props.img}
          className="w-32 mx-auto md:w-auto"
          loading="lazy"
          alt="product-1"
        />
        {props.off ? (
          <span className="absolute top-1.5 right-1.5 block h-5 md:h-7.5 text-xs/[24px] md:text-base/[34px] font-dana font-semibold bg-orange-300 text-white dark:text-zinc-700 px-2.5 md:px-3.5 rounded-full">
            {props.off}%
          </span>
        ) : null}
      </div>
      <h5 className="font-dana text-sm md:text-xl h-10 md:h-14 text-zinc-700 dark:text-white line-clamp-2">
        {props.title}
      </h5>
      <div className="flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5">
        {props.count ? (
          <>
            {props.off ? (
              <>
                <div className="text-teal-600 dark:text-emerald-500">
                  <span className="font-dana font-semibold text-base md:text-xl">
                    {props.price - (props.price * props.off) / 100}
                  </span>
                  <span className="text-xs md:text-sm tracking-tighter">تومان</span>
                </div>
                <div className="offer">
                  <span className="text-xs md:text-xl">{props.price}</span>
                  <span className="hidden xl:inline text-sm tracking-tighter">تومان</span>
                </div>
              </>
            ) : (
              <div className="text-teal-600 dark:text-emerald-500">
                <span className="font-dana font-semibold text-base md:text-xl">{props.price}</span>
                <span className="text-xs md:text-sm tracking-tighter">تومان</span>
              </div>
            )}
          </>
        ) : (
          <div className="text-teal-600 dark:text-emerald-500">
            <span className="text-red-400 text-base md:text-xl">موجود نیست</span>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between mt-2.5">
        <div className="flex items-center gap-x-2.5 md:gap-x-3">
          <span className="flex-center w-6.5 h-6.5 md:w-9 md:h-9 bg-gray-100 hover:bg-teal-600 dark:bg-zinc-800 dark:hover:bg-emerald-500 text-gray-400 hover:text-white rounded-full cursor-pointer transition-all">
            <Icon name="shopping-cart" className="w-4 h-4 md:w-5.5 md:h-5.5" />
          </span>
          <span className="block text-gray-400 hover:text-teal-600 dark:hover:text-emerald-500 rounded-full cursor-pointer transition-all">
            <Icon name="arrows-right-left" className="w-4 h-4 md:w-6 md:h-6" />
          </span>
        </div>
        <div className="flex text-yellow-400">
          <Icon name="star" className="w-4 h-4 md:w-6 md:h-6 text-gray-300 dark:text-gray-400" />
          <Icon name="star" className="w-4 h-4 md:w-6 md:h-6 text-gray-300 dark:text-gray-400" />
          <Icon name="star" className="w-4 h-4 md:w-6 md:h-6 text-gray-300 dark:text-gray-400" />
          <Icon name="star" className="w-4 h-4 md:w-6 md:h-6" />
          <Icon name="star" className="w-4 h-4 md:w-6 md:h-6" />
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
