export async function fetchHomePageData() {
  try {
    const productCategoryResponse = await fetch('http://localhost:4000/productCategory');
    const productCategorydata = await productCategoryResponse.json();

    const blogsResponse = await fetch('http://localhost:4000/blogs');
    const blogsData = await blogsResponse.json();

    return { productCategorydata, blogsData };
  } catch (error) {
    console.error('json-server Error:', error);
    throw new Error('Failed to fetch the fetch Home Page Data.');
  }
}

export async function fetchProducts() {
  try {
    const productResponse = await fetch('http://localhost:4000/products');
    const productsData = await productResponse.json();

    return { productsData };
  } catch (error) {
    console.error('json-server Error:', error);
    throw new Error('Failed to fetch the fetch Products Data.');
  }
}


export async function fetchProductById(id: string) {
  try {
    const response = await fetch('http://localhost:4000/products');
    const products = await response.json();
    const product = products.find((product: { id: string }) => product.id === id);
    return product;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw new Error('Failed to fetch product details');
  }
}


export async function fetchBlogById(id: string) {
  try {
    const response = await fetch('http://localhost:4000/blogs');
    const blogs = await response.json();
    const blog = blogs.find((blog: { id: string }) => blog.id === id);
    return blog;
  } catch (error) {
    console.error('Error fetching blog:', error);
    throw new Error('Failed to fetch blog details');
  }
}
