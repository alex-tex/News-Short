
export function AddPosts(newsData, postTag, append = false) {
    console.log("Adding posts..."); 
    const postsContainer = document.querySelector(".posts"); 
    if (!append) {
        postsContainer.innerHTML = ''; 
    }

    newsData.forEach(news => {
        const post = document.createElement("div");
        post.classList.add("post");
        post.setAttribute("data-tag", news.category);

        // Image
        const image = document.createElement("img");
        image.src = news.urlToImage;
        image.alt = news.title;
        post.appendChild(image);

        // Author
        const auteur = document.createElement("p");
        auteur.classList.add("post-auteur");
        auteur.textContent = news.author || 'N/A';
        post.appendChild(auteur);

        // Title
        const title = document.createElement("h1");
        title.classList.add("post-title");
        title.textContent = news.title;
        post.appendChild(title);

        //Date
        const date = document.createElement("p");
        date.classList.add("post-date");
        const dateObj = new Date(news.publishedAt);
        date.textContent = dateObj.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        post.appendChild(date);

        // Content
        const content = document.createElement("p");
        content.classList.add("content");
        content.textContent = news.description;
        post.appendChild(content);

        // Read more link
   
        const readMoreLink = document.createElement("a");
        readMoreLink.href = news.url;
        readMoreLink.textContent = "Read more";
        readMoreLink.target = "_blank";
        post.appendChild(readMoreLink);
       
       

        postsContainer.appendChild(post);
    });
}