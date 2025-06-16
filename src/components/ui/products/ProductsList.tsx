'use client';

import React, { useState } from 'react';
import ProductCart from '../../common/ProductCart';
import LoadMore from '../LoadMore';
import { ProductsDataProps } from '@/types/components.types';

interface ProductsListProps {
  initialProducts: ProductsDataProps[];
  initialPage: number;
  totalPages: number;
}

const ProductsList: React.FC<ProductsListProps> = ({
  initialProducts,
  initialPage,
  totalPages,
}) => {
  const [products, setProducts] = useState<ProductsDataProps[]>(initialProducts);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = async () => {
    if (currentPage >= totalPages) return;

    try {
      setIsLoading(true);
      const response = await fetch(`/api/products?page=${currentPage + 1}&limit=10`);
      const data = await response.json();

      setProducts((prev) => [...prev, ...data.products]);
      setCurrentPage(data.currentPage);
    } catch (error) {
      console.error('Error fetching more products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3.5 md:gap-5">
        {products.map((product: ProductsDataProps) => (
          <ProductCart key={product.id} {...product} />
        ))}
      </section>
      <LoadMore
        currentPage={currentPage}
        totalPages={totalPages}
        onLoadMore={handleLoadMore}
        isLoading={isLoading}
      />
    </>
  );
};

export default ProductsList;
