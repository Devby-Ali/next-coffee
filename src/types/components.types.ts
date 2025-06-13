interface ProductsDataProps {
  id: number;
  title: string;
  price: number;
  score: number;
  off: number;
  count: number;
  img: string;
}
interface ProductsProps {
  productsData: ProductsDataProps[];
}

interface productCategorydata {
  id: 1;
  title: string;
  img: string;
}
interface ProductCategoryProps {
  productCategory: productCategorydata[];
}

export type { ProductsDataProps, ProductsProps, productCategorydata, ProductCategoryProps };
