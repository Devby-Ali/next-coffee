import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { ProductsProps } from '@/types/components.types';
import ProductCart from '../common/ProductCart';

const Products = ({ productsData }: ProductsProps): React.JSX.Element => {
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
        </div>
      </div>
    </section>
  );
}

export default Products;
