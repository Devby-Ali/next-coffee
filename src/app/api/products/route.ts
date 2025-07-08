import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const fs = require('fs');
  const path = require('path');

  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');

  try {
    const dbPath = path.join(process.cwd(), 'data', 'db.json');
    const data = fs.readFileSync(dbPath);
    const parsedData = JSON.parse(data);

    const products = await parsedData.products;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedProducts = products.slice(startIndex, endIndex);

    return NextResponse.json({
      products: paginatedProducts,
      currentPage: page,
      totalPages: Math.ceil(products.length / limit),
      totalProducts: products.length,
      hasMore: endIndex < products.length,
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
