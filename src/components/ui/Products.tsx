import Image from 'next/image';
import React from 'react';
import Icon from '../Icon';
import SectionHeader from './SectionHeader';

function Products() {
  return (
    <section className="products pt-8 md:pt-24 lg:pt-44">
      <div className="container">
        {/* <!-- Section Head --> */}
        <SectionHeader
          title={'جدیدترین محصولات'}
          subTitle={'فرآوری شده از دانه قهوه'}
          btnTitle={'مشاهده همه محصولات'}
        />

        {/* <!-- Section Body --> */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5">
          <div className="p-2 md:p-5 bg-white dark:bg-zinc-700 shadow-normal rounded-2xl">
            <div className="relative mb-2 md:mb-5">
              <Image
                height={250}
                width={250}
                src="/images/products/p1.png"
                className="w-32 mx-auto md:w-auto"
                loading="lazy"
                alt="product-1"
              />
              <span className="absolute top-1.5 right-1.5 block h-5 md:h-[30px] text-xs/[24px] md:text-base/[34px] font-DanaDemiBold bg-orange-300 text-white dark:text-zinc-700 px-2.5 md:px-3.5 rounded-full">
                12%
              </span>
            </div>
            <h5 className="font-DanaMedium text-sm md:text-xl h-10 md:h-14 text-zinc-700 dark:text-white line-clamp-2">
              قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی
            </h5>
            <div className="flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5">
              <div className="text-teal-600 dark:text-emerald-500">
                <span className="font-DanaDemiBold text-base md:text-xl">154,000</span>
                <span className="text-xs md:text-sm tracking-tighter">تومان</span>
              </div>
              <div className="offer">
                <span className="text-xs md:text-xl">175,000</span>
                <span className="hidden xl:inline text-sm tracking-tighter">تومان</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2.5">
              <div className="flex items-center gap-x-2.5 md:gap-x-3">
                <span className="flex-center w-[26px] h-[26px] md:w-9 md:h-9 bg-gray-100 hover:bg-teal-600 dark:bg-zinc-800 dark:hover:bg-emerald-500 text-gray-400 hover:text-white rounded-full cursor-pointer transition-all">
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
                <Icon
                  name="star"
                  className="w-4 h-4 md:w-6 md:h-6 text-gray-300 dark:text-gray-400"
                />
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
                src="/images/products/p2.png"
                className="w-32 mx-auto md:w-auto"
                loading="lazy"
                alt="product-2"
              />
            </div>
            <h5 className="font-DanaMedium text-sm md:text-xl h-10 md:h-14 text-zinc-700 dark:text-white line-clamp-2">
              قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی
            </h5>
            <div className="flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5">
              <div className="text-teal-600 dark:text-emerald-500">
                <span className="font-DanaDemiBold text-base md:text-xl">180,000</span>
                <span className="text-xs md:text-sm tracking-tighter">تومان</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2.5">
              <div className="flex items-center gap-x-2.5 md:gap-x-3">
                <span className="flex-center w-[26px] h-[26px] md:w-9 md:h-9 bg-gray-100 hover:bg-teal-600 dark:bg-zinc-800 dark:hover:bg-emerald-500 text-gray-400 hover:text-white rounded-full cursor-pointer transition-all">
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
                <Icon name="star" className="w-4 h-4 md:w-6 md:h-6" />
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
                src="/images/products/p3.png"
                className="w-32 mx-auto md:w-auto"
                loading="lazy"
                alt="product-3"
              />
            </div>
            <h5 className="font-DanaMedium text-sm md:text-xl h-10 md:h-14 text-zinc-700 dark:text-white line-clamp-2">
              قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی
            </h5>
            <div className="flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5">
              <div className="text-teal-600 dark:text-emerald-500">
                <span className="text-red-400 text-base md:text-xl">موجود نیست</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2.5">
              <div className="flex items-center gap-x-2.5 md:gap-x-3">
                <span className="flex-center w-[26px] h-[26px] md:w-9 md:h-9 bg-gray-100 hover:bg-teal-600 dark:bg-zinc-800 dark:hover:bg-emerald-500 text-gray-400 hover:text-white rounded-full cursor-pointer transition-all">
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
            <h5 className="font-DanaMedium text-sm md:text-xl h-10 md:h-14 text-zinc-700 dark:text-white line-clamp-2">
              قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی
            </h5>
            <div className="flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5">
              <div className="text-teal-600 dark:text-emerald-500">
                <span className="font-DanaDemiBold text-base md:text-xl">155,000</span>
                <span className="text-xs md:text-sm tracking-tighter">تومان</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2.5">
              <div className="flex items-center gap-x-2.5 md:gap-x-3">
                <span className="flex-center w-[26px] h-[26px] md:w-9 md:h-9 bg-gray-100 hover:bg-teal-600 dark:bg-zinc-800 dark:hover:bg-emerald-500 text-gray-400 hover:text-white rounded-full cursor-pointer transition-all">
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
          <div className="p-2 md:p-5 bg-white dark:bg-zinc-700 shadow-normal rounded-2xl">
            <div className="relative mb-2 md:mb-5">
              <Image
                height={250}
                width={250}
                src="/images/products/p5.png"
                className="w-32 mx-auto md:w-auto"
                loading="lazy"
                alt="product-5"
              />
            </div>
            <h5 className="font-DanaMedium text-sm md:text-xl h-10 md:h-14 text-zinc-700 dark:text-white line-clamp-2">
              قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی
            </h5>
            <div className="flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5">
              <div className="text-teal-600 dark:text-emerald-500">
                <span className="font-DanaDemiBold text-base md:text-xl">174,000</span>
                <span className="text-xs md:text-sm tracking-tighter">تومان</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2.5">
              <div className="flex items-center gap-x-2.5 md:gap-x-3">
                <span className="flex-center w-[26px] h-[26px] md:w-9 md:h-9 bg-gray-100 hover:bg-teal-600 dark:bg-zinc-800 dark:hover:bg-emerald-500 text-gray-400 hover:text-white rounded-full cursor-pointer transition-all">
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
                <Icon
                  name="star"
                  className="w-4 h-4 md:w-6 md:h-6 text-gray-300 dark:text-gray-400"
                />
                <Icon
                  name="star"
                  className="w-4 h-4 md:w-6 md:h-6 text-gray-300 dark:text-gray-400"
                />
                <Icon
                  name="star"
                  className="w-4 h-4 md:w-6 md:h-6 text-gray-300 dark:text-gray-400"
                />
              </div>
            </div>
          </div>
          <div className="p-2 md:p-5 bg-white dark:bg-zinc-700 shadow-normal rounded-2xl">
            <div className="relative mb-2 md:mb-5">
              <Image
                height={250}
                width={250}
                src="/images/products/p6.png"
                className="w-32 mx-auto md:w-auto"
                loading="lazy"
                alt="product-6"
              />
            </div>
            <h5 className="font-DanaMedium text-sm md:text-xl h-10 md:h-14 text-zinc-700 dark:text-white line-clamp-2">
              قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی
            </h5>
            <div className="flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5">
              <div className="text-teal-600 dark:text-emerald-500">
                <span className="font-DanaDemiBold text-base md:text-xl">158,000</span>
                <span className="text-xs md:text-sm tracking-tighter">تومان</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2.5">
              <div className="flex items-center gap-x-2.5 md:gap-x-3">
                <span className="flex-center w-[26px] h-[26px] md:w-9 md:h-9 bg-gray-100 hover:bg-teal-600 dark:bg-zinc-800 dark:hover:bg-emerald-500 text-gray-400 hover:text-white rounded-full cursor-pointer transition-all">
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
                <Icon name="star" className="w-4 h-4 md:w-6 md:h-6" />
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
                src="/images/products/p7.png"
                className="w-32 mx-auto md:w-auto"
                loading="lazy"
                alt="product-7"
              />
              <span className="absolute top-1.5 right-1.5 block h-5 md:h-[30px] text-xs/[24px] md:text-base/[34px] font-DanaDemiBold bg-orange-300 text-white dark:text-zinc-700 px-2.5 md:px-3.5 rounded-full">
                12%
              </span>
            </div>
            <h5 className="font-DanaMedium text-sm md:text-xl h-10 md:h-14 text-zinc-700 dark:text-white line-clamp-2">
              قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی
            </h5>
            <div className="flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5">
              <div className="text-teal-600 dark:text-emerald-500">
                <span className="font-DanaDemiBold text-base md:text-xl">154,000</span>
                <span className="text-xs md:text-sm tracking-tighter">تومان</span>
              </div>
              <div className="offer">
                <span className="text-xs md:text-xl">175,000</span>
                <span className="hidden xl:inline text-sm tracking-tighter">تومان</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2.5">
              <div className="flex items-center gap-x-2.5 md:gap-x-3">
                <span className="flex-center w-[26px] h-[26px] md:w-9 md:h-9 bg-gray-100 hover:bg-teal-600 dark:bg-zinc-800 dark:hover:bg-emerald-500 text-gray-400 hover:text-white rounded-full cursor-pointer transition-all">
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
                src="/images/products/p8.png"
                className="w-32 mx-auto md:w-auto"
                loading="lazy"
                alt="product-8"
              />
            </div>
            <h5 className="font-DanaMedium text-sm md:text-xl h-10 md:h-14 text-zinc-700 dark:text-white line-clamp-2">
              قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی
            </h5>
            <div className="flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5">
              <div className="text-teal-600 dark:text-emerald-500">
                <span className="font-DanaDemiBold text-base md:text-xl">154,000</span>
                <span className="text-xs md:text-sm tracking-tighter">تومان</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2.5">
              <div className="flex items-center gap-x-2.5 md:gap-x-3">
                <span className="flex-center w-[26px] h-[26px] md:w-9 md:h-9 bg-gray-100 hover:bg-teal-600 dark:bg-zinc-800 dark:hover:bg-emerald-500 text-gray-400 hover:text-white rounded-full cursor-pointer transition-all">
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
