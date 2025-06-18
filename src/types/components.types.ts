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

interface ProductCategorydata {
  id: 1;
  title: string;
  img: string;
}
interface ProductCategoryProps {
  productCategory: ProductCategorydata[];
}

interface BlogProps {
  blog: {
    id: number;
    title: string;
    img: string;
    date: {
      day: string;
      month: string;
      year: string;
    };
    content: string;
    body: string;
    author: string;
    tags: string[];
    readTime: string;
  };
}

interface BlogsProps {
  blogsData: BlogProps[];
}

interface LoadMoreProps {
  currentPage: number;
  totalPages: number;
  onLoadMore: () => void;
  isLoading: boolean;
}

interface SectionHeaderProps {
  title: string;
  subTitle?: string;
  btnTitle?: string;
  btnHref?: string;
}

interface BlogsListProps {
  initialBlogs: BlogProps[];
  initialPage: number;
  totalPages: number;
}

interface ProductsListProps {
  initialProducts: ProductsDataProps[];
  initialPage: number;
  totalPages: number;
}

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export type {
  ProductsDataProps,
  ProductsProps,
  ProductCategorydata,
  ProductCategoryProps,
  BlogProps,
  BlogsProps,
  LoadMoreProps,
  SectionHeaderProps,
  BlogsListProps,
  ProductsListProps,
  IconProps,
};
