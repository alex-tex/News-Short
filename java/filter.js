import { loadNews } from "./algorithm.js";

const navToggle = document.getElementById('nav-toggle');
document.querySelectorAll('.navbar li a').forEach(link => {
  link.addEventListener('click', () => {
    if (navToggle) navToggle.checked = false;
  });
});

document.querySelectorAll('.navbar li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const selectedCategory = this.textContent.trim();

  
        window.scrollTo({ top: 0, behavior: 'smooth' });
        loadNews(selectedCategory);
    });
});


document.querySelectorAll('.navbar li a').forEach(link => {
    link.addEventListener('click', function(e) {
        document.querySelectorAll('.navbar li a.active').forEach(activeLink =>
            activeLink.classList.remove('active')
        );
        e.currentTarget.classList.add('active');
    });
});