import React from 'react';
import Image from 'next/image';
import { productCategorydata } from '@/types/components.types';

const ProductCategoryCart = (props: productCategorydata): React.JSX.Element => {
  return (
    <div className="w-25 md:w-50 text-center">
      <a href="#">
        <Image
          src={props.img}
          height={200}
          width={200}
          loading="lazy"
          alt="c1"
        />
      </a>
      <span className="inline-block text-sm md:text-xl text-zinc-700 dark:text-white mt-1.5 md:mt-2.5">
        {props.title}
      </span>
    </div>
  );
}

export default ProductCategoryCart;
