'use client';

import React, { useState } from 'react';
import BlogCard from './BlogCard';
import LoadMore from '../LoadMore';
import { blogProps } from '@/types/components.types';

interface BlogsListProps {
  initialBlogs: blogProps[];
  initialPage: number;
  totalPages: number;
}

const BlogsList: React.FC<BlogsListProps> = ({
  initialBlogs,
  initialPage,
  totalPages,
}) => {
  const [blogs, setBlogs] = useState<blogProps[]>(initialBlogs);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = async () => {
    if (currentPage >= totalPages) return;

    try {
      setIsLoading(true);
      const response = await fetch(`/api/blogs?page=${currentPage + 1}&limit=10`);
      const data = await response.json();

      setBlogs((prev) => [...prev, ...data.blogs]);
      setCurrentPage(data.currentPage);
    } catch (error) {
      console.error('Error fetching more blogs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3.5 md:gap-5">
        {blogs.map((product: blogProps) => (
          <BlogCard key={product.id} {...product} />
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

export default BlogsList;
