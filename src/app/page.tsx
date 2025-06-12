import Header from '@/components/common/Header';
import BannerCategory from '@/components/Template/BannerCategory';
import BestSellingProducts from '@/components/Template/BestSellingProducts';
import Blogs from '@/components/Template/Blogs';
import CoffeeClub from '@/components/Template/CoffeeClub';
import ContactUs from '@/components/Template/ContactUs';
import ProductCategory from '@/components/Template/ProductCategory';
import Products from '@/components/Template/Products';
import Services from '@/components/Template/Services';
import { fetchHomePageData } from '@/lib/data';

export default async function Home() {
  const data = await fetchHomePageData().then((res) => res);
  return (
    <>
      <Header />
      <main>
        <Products productsData={data.productsData} />
        <BannerCategory />
        <ProductCategory productCategory={data.productCategoryData} />
        <BestSellingProducts />
        <CoffeeClub />
        <Blogs />
        <ContactUs />
        <Services />
      </main>
    </>
  );
}

// export async function getStaticProps() {
//   const servicesResponse = await fetch("http://localhost:4000/services");
//   const servicesData = await servicesResponse.json();

//   const menuResponse = await fetch("http://localhost:4000/menu");
//   const menuData = await menuResponse.json();

//   const commentsResponse = await fetch("http://localhost:4000/comments");
//   const commentsData = await commentsResponse.json();

//   return {
//     props: {
//       data: {
//         services: servicesData,
//         menu: menuData,
//         comments: commentsData,
//       },
//     },
//     revalidate: 60 * 60 * 12, // Second
//   };
// }

// export default Home;
