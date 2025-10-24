// api.js

// Fetch dummy blog posts
export async function fetchBlogPosts(limit = 6) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
    if (!response.ok) throw new Error("Failed to fetch posts");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
}
