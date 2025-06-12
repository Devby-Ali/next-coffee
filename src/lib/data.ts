export async function fetchHomePageData() {
  try {
    const servicesResponse = await fetch('http://localhost:4000/services');
    const servicesData = await servicesResponse.json();

    const productResponse = await fetch('http://localhost:4000/products');
    const productsData = await productResponse.json();

    const commentsResponse = await fetch('http://localhost:4000/comments');
    const commentsData = await commentsResponse.json();

    return { servicesData, productsData, commentsData };
  } catch (error) {
    console.error('json-server Error:', error);
    throw new Error('Failed to fetch the fetch Home Page Data.');
  }
}
