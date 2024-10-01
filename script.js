
function searchResources() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const items = document.querySelectorAll('.carousel-item');
    
    items.forEach(item => {
        let title = item.querySelector('h3').innerText.toLowerCase();
        if (title.includes(searchInput)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function filterResources(category) {
    const sections = document.querySelectorAll('.carousel-section');
    
    sections.forEach(section => {
        if (category === 'all') {
            section.style.display = 'block';
        } else if (!section.classList.contains(category)) {
            section.style.display = 'none';
        } else {
            section.style.display = 'block';
        }
    });
}
let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop) {
    // قم بإخفاء الهيدر عند التمرير للأسفل
    header.classList.add("hidden");
  } else {
    // قم بإظهار الهيدر عند التمرير للأعلى
    header.classList.remove("hidden");
  }
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // التأكد من عدم السماح للقيمة بالسالب
});

