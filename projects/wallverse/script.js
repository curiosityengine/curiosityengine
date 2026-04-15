let currentIndex = 0;
const batchSize = 6;

let filteredData = [...wallpapers];

function loadMore() {
  const gallery = document.getElementById("gallery");

  const nextItems = filteredData.slice(currentIndex, currentIndex + batchSize);

  nextItems.forEach(item => {
    const div = document.createElement("div");
    div.className = "wall-card";

    const img = document.createElement("img");
    img.src = item.url;
    img.loading = "lazy"; // 🔥 lazy loading

    div.appendChild(img);
    gallery.appendChild(div);
  });

  currentIndex += batchSize;
}

// Initial load
loadMore();


// Infinite scroll trigger
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
    loadMore();
  }
});

const searchInput = document.getElementById("search");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  filteredData = wallpapers.filter(item =>
    item.category.includes(query) ||
    item.tags.some(tag => tag.includes(query))
  );

  resetGallery();
});

function filterCategory(category) {
  if (category === "all") {
    filteredData = [...wallpapers];
  } else {
    filteredData = wallpapers.filter(item => item.category === category);
  }

  resetGallery();
}

function resetGallery() {
  document.getElementById("gallery").innerHTML = "";
  currentIndex = 0;
  loadMore();
}
