import Image from 'next/image';
import React from 'react';

const ProductCategory = (): React.JSX.Element => {
  return (
    <section className="products-category mb-10 md:mb-20">
      <div className="container">
        <div className="flex-center font-semibold gap-y-6 gap-x-8 md:gap-16.5 2xl:gap-x-24 flex-wrap">
          <div className="w-25 md:w-50 text-center">
            <a href="#">
              <Image src="/images/categories/category1.png" height={200} width={200} loading="lazy" alt="c1" />
            </a>
            <span className="inline-block text-sm md:text-xl text-zinc-700 dark:text-white mt-1.5 md:mt-2.5">
              قهوه دمی و اسپرسو
            </span>
          </div>
          <div className="w-25 md:w-50 text-center">
            <a href="#">
              <Image src="/images/categories/category2.png" height={200} width={200} loading="lazy" alt="c1" />
            </a>
            <span className="inline-block text-sm md:text-xl text-zinc-700 dark:text-white mt-1.5 md:mt-2.5">
              لوازم جانبی و تجهیزات
            </span>
          </div>
          <div className="w-25 md:w-50 text-center">
            <a href="#">
              <Image src="/images/categories/category3.png" height={200} width={200} loading="lazy" alt="c1" />
            </a>
            <span className="inline-block text-sm md:text-xl text-zinc-700 dark:text-white mt-1.5 md:mt-2.5">
              اسپرسو ساز
            </span>
          </div>
          <div className="w-25 md:w-50 text-center">
            <a href="#">
              <Image src="/images/categories/category4.png" height={200} width={200} loading="lazy" alt="c1" />
            </a>
            <span className="inline-block text-sm md:text-xl text-zinc-700 dark:text-white mt-1.5 md:mt-2.5">
              پک تستر قهوه
            </span>
          </div>
          <div className="w-25 md:w-50 text-center">
            <a href="#">
              <Image src="/images/categories/category5.png" height={200} width={200} loading="lazy" alt="c1" />
            </a>
            <span className="inline-block text-sm md:text-xl text-zinc-700 dark:text-white mt-1.5 md:mt-2.5">
              قهوه ترک
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;
