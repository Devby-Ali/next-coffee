import Image from 'next/image';
import React from 'react';
import { ProductCategoryProps } from '@/types/components.types';
import ProductCategoryCart from '../common/ProductCategoryCart';

const ProductCategory = ({ productCategory }: ProductCategoryProps): React.JSX.Element => {
  return (
    <section className="products-category mb-10 md:mb-20">
      <div className="container">
        <div className="flex-center font-semibold gap-y-6 gap-x-8 md:gap-16.5 2xl:gap-x-24 flex-wrap">
          {productCategory.map((product) => (
            <ProductCategoryCart key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;
