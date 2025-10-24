import { AddPosts } from "./posts.js";
const apiKey = "YOUR_API_KEY"; //api key from https://newsapi.org/

let currentCategory = "All";
let currentPage = 1;
let loading = false;


async function loadNews(category = "general", page = 1, append = false) {
   
    // Use lowercase version for category, unless "All"
    console.log("Loading..."); // Debugging line
    if (category !== currentCategory) {
        currentCategory = category;
        currentPage = 1;
        append = false;
    }
    loading = true;
    const categoryParam = category.toLowerCase();

    let url = ""

    if (categoryParam === "general" ) {
        url = `https://newsapi.org/v2/everything?q=${categoryParam}`
        url += `&language=en`;
       // url += `&from=${new Date().toISOString().split("T")[0]}`; // Current date in YYYY-MM-DD format
        url += `&pageSize=${20}&page=${page}`;
        url += `&apiKey=${apiKey}`;
       // https://newsapi.org/v2/everything?q=health&language=en&from=2025-03-25&sortBy=publishedAt&apiKey=34a6410e58bd49e58369f6aca78f7278
    }else {
        url = `https://newsapi.org/v2/top-headlines?country=us`;
        url += `&category=${categoryParam}`; 
        url += `&pageSize=${20}&page=${page}`;
        url += `&apiKey=${apiKey}`;
    }

    console.log("Fetching news from URL:", url); 

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network error: " + response.statusText);
        }
        const data = await response.json();
        const totalResults = data.totalResults; // total articles available by the API
        if (page * 20 > totalResults) {
            console.log("No more articles to load.");
        }
        console.log(data);
        AddPosts(data.articles, category, append);
    } catch (error) {
        console.error("Error loading news:", error);
    } finally {
        loading = false;
    }
}

// load the first page for "All"
window.addEventListener("DOMContentLoaded", () => {
    loadNews("general");
});

// listen for scroll events and load more posts when near the bottom
window.addEventListener("scroll", () => {
    const threshold = 10; // in pixels before reaching bottom
    const scrollPosition = window.innerHeight + window.scrollY;
    const bottomPosition = document.documentElement.scrollHeight - threshold;
    if (scrollPosition >= bottomPosition && !loading) {
        currentPage++;
        loadNews(currentCategory, currentPage, true);
    }
});

export { loadNews };


