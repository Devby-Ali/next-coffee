import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { ProductsProps } from '@/types/components.types';
import ProductCard from '../ui/products/ProductCard';
import { fetchProducts } from '@/lib/data';

export default async function LatestProducts() {
  const products: ProductsProps = await fetchProducts ()
  return (
    <section className="products my-8 md:my-24 mb-32">
      <div className="container">
        {/* <!-- Section Head --> */}
        <SectionHeader
          title={'جدیدترین محصولات'}
          subTitle={'فرآوری شده از دانه قهوه'}
          btnTitle={'مشاهده همه محصولات'}
          btnHref={'/products'}
        />

        {/* <!-- Section Body --> */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3.5 md:gap-5">
          {products.productsData.reverse().slice(0, 10).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

;
