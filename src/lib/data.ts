export async function fetchHomePageData() {
  try {
    const servicesResponse = await fetch('http://localhost:4000/services');
    const servicesData = await servicesResponse.json();

    const menuResponse = await fetch('http://localhost:4000/menu');
    const menuData = await menuResponse.json();

    const commentsResponse = await fetch('http://localhost:4000/comments');
    const commentsData = await commentsResponse.json();

    return { servicesData, menuData, commentsData };
  } catch (error) {
    console.error('json-server Error:', error);
    throw new Error('Failed to fetch the fetch Home Page Data.');
  }
}
