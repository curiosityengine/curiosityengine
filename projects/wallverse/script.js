const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("search");

let currentCategory = "all";

function displayImages(data) {
  gallery.innerHTML = "";

  data.forEach(img => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${img.url}" alt="${img.title}" onclick="openImage('${img.url}')">
    `;

    gallery.appendChild(card);
  });
}

function filterCategory(category) {
  currentCategory = category;
  applyFilters();
}

function applyFilters() {
  let filtered = wallpapers;

  if (currentCategory !== "all") {
    filtered = filtered.filter(w => w.category === currentCategory);
  }

  const searchValue = searchInput.value.toLowerCase();

  if (searchValue) {
    filtered = filtered.filter(w =>
      w.title.toLowerCase().includes(searchValue)
    );
  }

  displayImages(filtered);
}

searchInput.addEventListener("input", applyFilters);

function openImage(url) {
  window.open(url, "_blank");
}

// Initial load
displayImages(wallpapers);
