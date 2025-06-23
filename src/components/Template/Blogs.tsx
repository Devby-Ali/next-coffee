import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { BlogProps } from '@/types/components.types';
import BlogCard from '../ui/blogs/BlogCard';
import { fetchBlogs } from '@/lib/data';

export default async function Blogs() {
  const blogs = (await fetchBlogs()).blogsData.reverse().slice(0, 8)
  return (
    <section className="blogs mb-8 md:mb-28">
      <div className="container">
        <SectionHeader
          title="آخرین مقالات ما"
          subTitle="دانشنامه تخصصی قهوه"
          btnTitle="مشاهده همه مطالب"
          btnHref="/blogs"
        />
        {/* <!-- Section Content --> */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5">
          {blogs.map((blog: BlogProps) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};
