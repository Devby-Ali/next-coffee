import Header from '@/components/common/Header';
import SectionHeader from '@/components/ui/SectionHeader';
import BlogsList from '@/components/ui/blogs/BlogsList';

async function getInitialBlogs() {
  try {
    const response = await fetch('http://localhost:4000/blogs');
    const blogs = await response.json();

    const initialBlogs = blogs.slice(0, 10);
    const totalPages = Math.ceil(blogs.length / 10);

    return {
      blogs: initialBlogs,
      totalPages,
      currentPage: 1,
    };
  } catch (error) {
    console.error('Error fetching initial blogs:', error);
    return {
      blogs: [],
      totalPages: 0,
      currentPage: 1,
    };
  }
}

export default async function BlogsPge() {
  const { blogs, totalPages, currentPage } = await getInitialBlogs();

  return (
    <>
      <Header />
      <main className="products">
        <div className="container">
          <SectionHeader title="وبلاگ" subTitle="دانشنامه تخصصی قهوه" />
          <BlogsList
            initialBlogs={blogs}
            initialPage={currentPage}
            totalPages={totalPages}
          />
        </div>
      </main>
    </>
  );
}
