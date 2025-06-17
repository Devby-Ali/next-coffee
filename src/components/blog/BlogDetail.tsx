import React from 'react';
import Image from 'next/image';
import Icon from '../Icon';

interface BlogDetailProps {
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
    author: string;
    tags: string[];
    readTime: string;
  };
}

const BlogDetail = ({ blog }: BlogDetailProps): React.JSX.Element => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>
        <div className="flex items-center gap-4 text-gray-600">
          <div className="flex items-center gap-2">
            <Icon name="user" className="w-5 h-5" />
            <span>{blog.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="calendar" className="w-5 h-5" />
            <span>{`${blog.date.day} ${blog.date.month} ${blog.date.year}`}</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="clock" className="w-5 h-5" />
            <span>{blog.readTime}</span>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
        <Image
          src={blog.img}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 leading-relaxed">{blog.content}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {blog.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Share Buttons */}
      <div className="flex items-center gap-4 border-t pt-8">
        <span className="text-gray-600">اشتراک‌گذاری:</span>
        <div className="flex gap-4">
          <button className="text-gray-600 hover:text-blue-600 transition-colors">
            <Icon name="twitter" className="w-6 h-6" />
          </button>
          <button className="text-gray-600 hover:text-blue-800 transition-colors">
            <Icon name="facebook" className="w-6 h-6" />
          </button>
          <button className="text-gray-600 hover:text-green-600 transition-colors">
            <Icon name="whatsapp" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogDetail;
