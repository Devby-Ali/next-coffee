'use client';

import React, { useState } from 'react';
import BlogCard from './BlogCard';
import LoadMore from '../LoadMore';
import { BlogProps, BlogsListProps } from '@/types/components.types';

const BlogsList: React.FC<BlogsListProps> = ({ initialBlogs, initialPage, totalPages }) => {
  const [blogs, setBlogs] = useState<BlogProps[]>(initialBlogs);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = async () => {
    if (currentPage >= totalPages) return;

    try {
      setIsLoading(true);
      const response = await fetch(`/api/blogs?page=${currentPage + 1}&limit=8`);
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
      <section className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5">
        {blogs.map((blog: BlogProps) => (
          <BlogCard key={blog.id} {...blog} />
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
