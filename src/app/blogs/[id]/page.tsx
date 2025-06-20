import React from 'react';
import BlogDetail from '@/components/blog/BlogDetail';
import { fetchBlogById } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog'
}

async function BlogPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const blog = await fetchBlogById(id);

  if (!blog) {
    return <div>مقاله مورد نظر یافت نشد.</div>;
  }

  return <BlogDetail blog={blog} />;
};

export default BlogPage;
