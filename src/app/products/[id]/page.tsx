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
      <main className="container py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image Section */}
          <div className="bg-white dark:bg-zinc-700 rounded-2xl p-4 md:p-8">
            <div className="relative aspect-square">
              <Image
                src={product.img}
                alt={product.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {product.off > 0 && (
                <span className="absolute top-4 right-4 bg-orange-300 text-white dark:text-zinc-700 px-4 py-2 rounded-full font-semibold">
                  {product.off}% تخفیف
                </span>
              )}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="bg-white dark:bg-zinc-700 rounded-2xl p-4 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold text-zinc-700 dark:text-white mb-4">
              {product.title}
            </h1>

            {/* Price Section */}
            <div className="flex items-center gap-4 mb-6">
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
            <div className="flex items-center gap-2 mb-6">
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
              <span className="text-gray-600 dark:text-gray-300">({product.score} از 5)</span>
            </div>

            {/* Description Section */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-zinc-700 dark:text-white mb-3">
                توضیحات محصول
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Details Section */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-zinc-700 dark:text-white mb-3">
                مشخصات فنی
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.details).map(([key, value]) => (
                  <div key={key} className="flex items-center gap-2">
                    <span className="text-gray-600 dark:text-gray-300">{key}:</span>
                    <span className="text-zinc-700 dark:text-white font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Add to Cart Section */}
            <div className="flex items-center gap-4">
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
      </main>
    </>
  );
}
