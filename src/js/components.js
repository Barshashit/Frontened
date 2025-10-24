


// Accordion functionality
const accordionItems = document.querySelectorAll("#accordion .accordion-item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");
  const body = item.querySelector(".accordion-body");
  const icon = item.querySelector(".accordion-icon");

  header.addEventListener("click", () => {
    const isOpen = body.style.maxHeight && body.style.maxHeight !== "0px";

    // Close all items
    accordionItems.forEach((i) => {
      i.querySelector(".accordion-body").style.maxHeight = null;
      i.querySelector(".accordion-icon").textContent = "+";
    });

    // Open the clicked item if it was not open
    if (!isOpen) {
      body.style.maxHeight = body.scrollHeight + "px";
      icon.textContent = "−";
    }
  });
});


// HFetch render data-->
// components.js
import { fetchBlogPosts } from "./api.js";

document.addEventListener("DOMContentLoaded", async () => {
  const blogGrid = document.getElementById("blog-grid");

  if (!blogGrid) return;

  const posts = await fetchBlogPosts(6); // fetch 6 posts

  if (posts.length === 0) {
    blogGrid.innerHTML = "<p class='text-center text-red-500'>Failed to load blog posts.</p>";
    return;
  }

  posts.forEach((post) => {
    const card = document.createElement("div");
    card.className = "bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition";

    card.innerHTML = `
      <img class="w-full h-48 object-cover" src="https://source.unsplash.com/600x400/?travel,${post.id}" alt="Post Image">
      <div class="p-6">
        <h3 class="text-xl font-semibold mb-3">${post.title}</h3>
        <p class="text-gray-600 mb-4">${post.body.slice(0, 100)}...</p>
        <button class="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-500 transition">Read More</button>
      </div>
    `;

    blogGrid.appendChild(card);
  });
});
