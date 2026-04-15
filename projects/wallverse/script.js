let currentIndex = 0;
const batchSize = 6;

let filteredData = [];

// WAIT FOR DOM
document.addEventListener("DOMContentLoaded", () => {

  filteredData = [...wallpapers];

  const gallery = document.getElementById("gallery");
  const searchInput = document.getElementById("search");

  function loadMore() {
    const nextItems = filteredData.slice(currentIndex, currentIndex + batchSize);

    nextItems.forEach(item => {
      const div = document.createElement("div");
      div.className = "wall-card";

      const img = document.createElement("img");
      img.src = item.url;
      img.loading = "lazy";

      div.appendChild(img);
      gallery.appendChild(div);
    });

    currentIndex += batchSize;
  }

  function resetGallery() {
    gallery.innerHTML = "";
    currentIndex = 0;
    loadMore();
  }

  // INITIAL LOAD
  loadMore();

  // SEARCH
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    filteredData = wallpapers.filter(item =>
      item.category.includes(query) ||
      item.tags.some(tag => tag.includes(query))
    );

    resetGallery();
  });

  // CATEGORY FILTER
  window.filterCategory = function(category) {
    if (category === "all") {
      filteredData = [...wallpapers];
    } else {
      filteredData = wallpapers.filter(item => item.category === category);
    }

    resetGallery();
  };

  // INFINITE SCROLL
  window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
      loadMore();
    }
  });

});
