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

interface blogProps {
  id: number;
  title: string;
  img: string;
  date: {
    day : string,
    month : string,
    year : string
  }
}

interface blogsProps {
  blogsData: blogProps[];
}

export type {
  ProductsDataProps,
  ProductsProps,
  productCategorydata,
  ProductCategoryProps,
  blogProps,
  blogsProps,
};
