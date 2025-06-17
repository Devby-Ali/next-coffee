import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');

  try {
    const response = await fetch('http://localhost:4000/blogs');
    const blogs = await response.json();

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedBlogs = blogs.slice(startIndex, endIndex);

    return NextResponse.json({
      blogs: paginatedBlogs,
      currentPage: page,
      totalPages: Math.ceil(blogs.length / limit),
      totalBlogs: blogs.length,
      hasMore: endIndex < blogs.length,
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}
