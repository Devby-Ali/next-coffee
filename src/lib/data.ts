export async function fetchHomePageData() {
  try {
    const productResponse = await fetch('http://localhost:4000/products');
    const productsData = await productResponse.json();

    const productCategoryResponse = await fetch('http://localhost:4000/productCategory');
    const productCategoryData = await productCategoryResponse.json();


    const blogsResponse = await fetch('http://localhost:4000/blogs');
    const blogsData = await blogsResponse.json();

    const commentsResponse = await fetch('http://localhost:4000/comments');
    const commentsData = await commentsResponse.json();

    return { productCategoryData, productsData, blogsData, commentsData };
  } catch (error) {
    console.error('json-server Error:', error);
    throw new Error('Failed to fetch the fetch Home Page Data.');
  }
}
