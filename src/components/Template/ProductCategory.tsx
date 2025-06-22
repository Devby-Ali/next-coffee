import React from 'react';
import { ProductCategorydata } from '@/types/components.types';
import ProductCategoryCard from '../ui/products/ProductCategoryCard';
import { fetchProductCategory } from '@/lib/data';

export default async function ProductCategory() {
  const productCategory = await fetchProductCategory()
  return (
    <section className="products-category mb-10 md:mb-20">
      <div className="container">
        <div className="flex-center font-semibold gap-y-6 gap-x-8 md:gap-16.5 2xl:gap-x-24 flex-wrap">
          {productCategory.productCategorydata.map((product: ProductCategorydata) => (
            <ProductCategoryCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
