import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { blogsProps } from '@/types/components.types';
import BlogCart from '../ui/blogs/BlogCart';

const Blogs = ({ blogsData }: blogsProps): React.JSX.Element => {
  return (
    <section className="blogs mb-8 md:mb-28">
      <div className="container">
        <SectionHeader title="مطالب خواندنی" subTitle="مشاهده همه مطالب" btnTitle="مشاهده همه" />
        {/* <!-- Section Content --> */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5">
          {blogsData.map((blog) => (
            <BlogCart key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
