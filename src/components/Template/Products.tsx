import Image from 'next/image';
import React from 'react';
import Icon from '../Icon';
import SectionHeader from '../ui/SectionHeader';
import { ProductsProps } from '@/types/components.types';
import ProductCart from '../common/ProductCart';

function Products({ productsData }: ProductsProps) {
  return (
    <section className="products pt-8 md:pt-24">
      <div className="container">
        {/* <!-- Section Head --> */}
        <SectionHeader
          title={'جدیدترین محصولات'}
          subTitle={'فرآوری شده از دانه قهوه'}
          btnTitle={'مشاهده همه محصولات'}
        />

        {/* <!-- Section Body --> */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3.5 md:gap-5">
          {productsData.map((product) => (
            <ProductCart key={product.id} {...product} />
          ))}
          <div className="p-2 md:p-5 bg-white dark:bg-zinc-700 shadow-normal rounded-2xl">
            <div className="relative mb-2 md:mb-5">
              <Image
                height={250}
                width={250}
                src="/images/products/p3.png"
                className="w-32 mx-auto md:w-auto"
                loading="lazy"
                alt="product-3"
              />
            </div>
            <h5 className="font-dana text-sm md:text-xl h-10 md:h-14 text-zinc-700 dark:text-white line-clamp-2">
              قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی
            </h5>
            <div className="flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5">
              <div className="text-teal-600 dark:text-emerald-500">
                <span className="text-red-400 text-base md:text-xl">موجود نیست</span>
              </div>
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
                <Icon
                  name="star"
                  className="w-4 h-4 md:w-6 md:h-6 text-gray-300 dark:text-gray-400"
                />
                <Icon
                  name="star"
                  className="w-4 h-4 md:w-6 md:h-6 text-gray-300 dark:text-gray-400"
                />
                <Icon name="star" className="w-4 h-4 md:w-6 md:h-6" />
                <Icon name="star" className="w-4 h-4 md:w-6 md:h-6" />
                <Icon name="star" className="w-4 h-4 md:w-6 md:h-6" />
              </div>
            </div>
          </div>
          <div className="p-2 md:p-5 bg-white dark:bg-zinc-700 shadow-normal rounded-2xl">
            <div className="relative mb-2 md:mb-5">
              <Image
                height={250}
                width={250}
                src="/images/products/p4.png"
                className="w-32 mx-auto md:w-auto"
                loading="lazy"
                alt="product-4"
              />
            </div>
            <h5 className="font-dana text-sm md:text-xl h-10 md:h-14 text-zinc-700 dark:text-white line-clamp-2">
              قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی
            </h5>
            <div className="flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5">
              <div className="text-teal-600 dark:text-emerald-500">
                <span className="font-dana font-semibold text-base md:text-xl">155,000</span>
                <span className="text-xs md:text-sm tracking-tighter">تومان</span>
              </div>
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
                <Icon name="star" className="w-4 h-4 md:w-6 md:h-6" />
                <Icon name="star" className="w-4 h-4 md:w-6 md:h-6" />
                <Icon name="star" className="w-4 h-4 md:w-6 md:h-6" />
                <Icon name="star" className="w-4 h-4 md:w-6 md:h-6" />
                <Icon name="star" className="w-4 h-4 md:w-6 md:h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
