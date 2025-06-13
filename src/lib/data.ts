export async function fetchHomePageData() {
  try {
    const productResponse = await fetch('http://localhost:4000/products');
    const productsData = await productResponse.json();

    const productCategoryResponse = await fetch('http://localhost:4000/productCategory');
    const productCategoryData = await productCategoryResponse.json();

    const blogsResponse = await fetch('http://localhost:4000/blogs');
    const blogsData = await blogsResponse.json();

    return { productCategoryData, productsData, blogsData };
  } catch (error) {
    console.error('json-server Error:', error);
    throw new Error('Failed to fetch the fetch Home Page Data.');
  }
}

export async function fetchProductById(id: string) {
  try {
    const response = await fetch('http://localhost:4000/products');
    const products = await response.json();
    const product = products.find((product: { id: string; }) => product.id === id)
    return product
  } catch (error) {
    console.error('Error fetching product:', error);
    throw new Error('Failed to fetch product details');
  }
}
