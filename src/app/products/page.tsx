import Header from '@/components/common/Header';
import ProductCart from '@/components/common/ProductCart';
import SectionHeader from '@/components/ui/SectionHeader';
import { fetchHomePageData } from '@/lib/data';
import { ProductsDataProps } from '@/types/components.types';
import React from 'react';

async function page() {
  const data = await fetchHomePageData().then((res) => res);
  const products = data.productsData;
  return (
    <>
      <Header />
      <main className="products">
        <div className="container">
          <SectionHeader title="همه محصولات" subTitle="فرآوری شده از دانه قهوه" />
          <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3.5 md:gap-5">
            {products.map((product: ProductsDataProps) => (
              <ProductCart key={product.id} {...product} />
            ))}
          </section>
        </div>
      </main>
    </>
  );
}

export default page;
