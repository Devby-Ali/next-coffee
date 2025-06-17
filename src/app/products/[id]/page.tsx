import React from 'react';
import Image from 'next/image';
import Header from '@/components/common/Header';
// import { fetchProductById } from '@/lib/data';
import Icon from '@/components/Icon';
import { fetchProductById } from '@/lib/data';

export default async function ProductDetails(props: { params: Promise<{ id: string }> }) {
  //   console.log(params.id);
  const params = await props.params;
  const id = params.id;
  const product = await fetchProductById(id);
  return (
    <>
      <Header />
      <main className="products pt-8 md:pt-0 2xl:pt-24 pb-8 md:pb-20 2xl:pb-26">
        <div className="container">
          <div className="relative flex flex-col lg:flex-row items-center justify-between bg-gradient-to-b from-transparent to-stone-400/40 dark:to-zinc-700/50 backdrop-blur-xs rounded-2xl xl:px-24">
            {product.off > 0 && (
              <span className="absolute top-3 right-3 bg-orange-300 text-white dark:text-zinc-700 px-4 py-2 rounded-3xl rounded-tr-lg font-semibold">
                {product.off}% تخفیف
              </span>
            )}

            <div className="flex lg:flex-col-reverse justify-between mb-16 mt-8 w-full">
              <div className="self-end sm:self-center lg:self-auto pr-4 sm:pr-12 x:pr-20 mt-8">
                <h1 className="text-xl sm:text-nowrap md:text-2xl font-bold text-zinc-700 dark:text-white mb-4">
                  {product.title}
                </h1>
                {/* Price Section */}
                <div className="flex flex-col sm:flex-row md:items-center gap-x-4 mb-3">
                  {product.off > 0 ? (
                    <>
                      <div className="text-teal-600 dark:text-emerald-500">
                        <span className="text-2xl md:text-3xl font-bold">
                          {Math.floor(product.price * (1 - product.off / 100)).toLocaleString()}
                        </span>
                        <span className="text-sm md:text-base mr-1">تومان</span>
                      </div>
                      <div className="text-gray-400 line-through">
                        <span className="text-lg md:text-xl">{product.price.toLocaleString()}</span>
                        <span className="text-sm md:text-base mr-1">تومان</span>
                      </div>
                    </>
                  ) : (
                    <div className="text-teal-600 dark:text-emerald-500">
                      <span className="text-2xl md:text-3xl font-bold">
                        {product.price.toLocaleString()}
                      </span>
                      <span className="text-sm md:text-base mr-1">تومان</span>
                    </div>
                  )}
                </div>
                {/* Rating Section */}
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, index) => (
                      <Icon
                        key={index}
                        name="star"
                        className={`w-5 h-5 ${
                          index < Math.floor(product.score)
                            ? 'text-yellow-400'
                            : 'text-gray-300 dark:text-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="hidden xs:block text-gray-600 dark:text-gray-300">
                    ({product.score} از 5)
                  </span>
                </div>
              </div>
              <div className="relative w-80 sm:size-60 md:size-80">
                <Image width={300} height={300} src={product.img} alt={product.title} />
              </div>
            </div>

            <div className="px-4 sm:px-12 lg:pr-0 mb-4 sm:mb-12 lg:mb-0">
              {/* Description Section */}
              <div className="mb-6 lg:mb-10">
                <h2 className="text-xl font-semibold text-zinc-700 dark:text-white mb-3 lg:mb-4">
                  توضیحات محصول
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Details Section */}
              <div className="md:pb-2">
                <h2 className="text-xl font-semibold text-zinc-700 dark:text-white mb-3">
                  مشخصات فنی
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(product.details).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-2">
                      <span className="text-gray-600 dark:text-gray-300">{key}:</span>
                      <span className="text-zinc-700 dark:text-white font-medium">
                        {String(value)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add to Cart Section */}
              <div className="flex items-center gap-4 lg:gap-x-4 mt-8 sm:mt-12">
                <button className="flex-1 bg-teal-600 hover:bg-teal-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white py-3 px-6 rounded-xl transition-colors">
                  <Icon name="shopping-cart" className="w-5 h-5 inline-block ml-2" />
                  افزودن به سبد خرید
                </button>
                <button className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-teal-600 dark:bg-zinc-800 dark:hover:bg-emerald-500/40 rounded-xl transition-colors">
                  <Icon name="heart" className="w-6 h-6 text-orange-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
