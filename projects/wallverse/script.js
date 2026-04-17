// script.js — WallVerse app logic
let currentPage = 1;
let currentQuery = "nature";
let isLoading = false;

document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  const searchInput = document.getElementById("search");
  const loader = document.getElementById("loader");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const downloadBtn = document.getElementById("downloadBtn");
  const closeModal = document.getElementById("closeModal");

  // ===== MODAL =====
function openModal(item) {
  modal.classList.remove("hidden");
  modalImg.src = item.url;

  downloadBtn.onclick = async () => {
    try {
      downloadBtn.innerText = "⏳ Downloading...";
      const response = await fetch(item.thumb); // thumb is smaller, downloads faster
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = `wallverse-${item.id}.jpg`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(blobUrl);
      downloadBtn.innerText = "⬇️ Download";
    } catch (err) {
      console.error("Download failed:", err);
      downloadBtn.innerText = "⬇️ Download";
    }
  };
}

  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
    modalImg.src = "";
  });

  // Close modal on backdrop click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
      modalImg.src = "";
    }
  });

  // ===== LOAD WALLPAPERS =====
  async function loadMore() {
    if (isLoading) return;
    isLoading = true;
    loader.style.display = "block";

    const results = await searchWallpapers(currentQuery, currentPage);

    results.forEach(item => {
      const div = document.createElement("div");
      div.className = "wall-card";
      div.style.backgroundColor = item.color;

      const img = document.createElement("img");
      img.src = item.thumb;
      img.loading = "lazy";
      img.alt = item.tags?.[0] || item.category;
      div.addEventListener("click", () => openModal(item));

      // ❤️ Favorite button
      const favBtn = document.createElement("button");
      favBtn.innerText = "❤️";
      favBtn.className = "fav-btn";
      favBtn.title = "Save to favorites";
      favBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        let saved = JSON.parse(localStorage.getItem("favorites")) || [];
        const alreadySaved = saved.find(w => w.id === item.id);
        if (!alreadySaved) {
          saved.push(item);
          localStorage.setItem("favorites", JSON.stringify(saved));
          favBtn.innerText = "💜";
        } else {
          favBtn.innerText = "💜";
        }
      });

      div.appendChild(img);
      div.appendChild(favBtn);
      gallery.appendChild(div);
    });

    currentPage++;
    isLoading = false;
    loader.style.display = "none";
  }

  // ===== RESET GALLERY =====
  function resetGallery(query) {
    gallery.innerHTML = "";
    currentPage = 1;
    currentQuery = query;
    loadMore();
  }

  // ===== INITIAL LOAD =====
  loadMore();

  // ===== SEARCH (debounced) =====
  let debounceTimer;
  searchInput.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const query = searchInput.value.trim() || "nature";
      resetGallery(query);
    }, 500);
  });

  // ===== CATEGORY FILTER =====
  window.filterCategory = function(category) {
    searchInput.value = "";
    resetGallery(category === "all" ? "nature" : category);
  };

  // ===== INFINITE SCROLL =====
  window.addEventListener("scroll", () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 300 &&
      !isLoading
    ) {
      loadMore();
    }
  });
});
