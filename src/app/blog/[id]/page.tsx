import React from 'react';
import BlogDetail from '@/components/blog/BlogDetail';
import { blogs } from '@/data/db.json';

interface BlogPageProps {
  params: {
    id: string;
  };
}

const BlogPage = ({ params }: BlogPageProps): React.JSX.Element => {
  const blog = blogs.find((b) => b.id === parseInt(params.id));

  if (!blog) {
    return <div>مقاله مورد نظر یافت نشد.</div>;
  }

  return <BlogDetail blog={blog} />;
};

export default BlogPage;
