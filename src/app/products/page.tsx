import Header from '@/components/common/Header';
import SectionHeader from '@/components/ui/SectionHeader';
import ProductsList from '@/components/ui/products/ProductsList';

async function getInitialProducts() {
  try {
    const response = await fetch('http://localhost:4000/products');
    const products = await response.json();

    const initialProducts = products.slice(0, 10);
    const totalPages = Math.ceil(products.length / 10);

    return {
      products: initialProducts,
      totalPages,
      currentPage: 1,
    };
  } catch (error) {
    console.error('Error fetching initial products:', error);
    return {
      products: [],
      totalPages: 0,
      currentPage: 1,
    };
  }
}

export default async function ProductsPage() {
  const { products, totalPages, currentPage } = await getInitialProducts();

  return (
    <>
      <Header />
      <main className="products">
        <div className="container">
          <SectionHeader title="همه محصولات" subTitle="فرآوری شده از دانه قهوه" />
          <ProductsList
            initialProducts={products}
            initialPage={currentPage}
            totalPages={totalPages}
          />
        </div>
      </main>
    </>
  );
}
