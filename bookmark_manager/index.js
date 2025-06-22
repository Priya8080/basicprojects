function getBookmarks() {
  const bookmarks = localStorage.getItem("bookmarks");
  return bookmarks ? JSON.parse(bookmarks) : [];
}

function saveBookmarks(bookmarks) {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

function addBookmark() {
  const name = document.getElementById("siteName").value.trim();
  const url = document.getElementById("siteURL").value.trim();

  if (!name || !url) {
    alert("Please enter both name and URL");
    return;
  }

  const newBookmark = { name, url };

  const bookmarks = getBookmarks();
  bookmarks.push(newBookmark);
  saveBookmarks(bookmarks);
  displayBookmarks();

  document.getElementById("siteName").value = "";
  document.getElementById("siteURL").value = "";
}

function deleteBookmark(index) {
  const bookmarks = getBookmarks();
  bookmarks.splice(index, 1);
  saveBookmarks(bookmarks);
  displayBookmarks();
}

function displayBookmarks() {
  const bookmarks = getBookmarks();
  const container = document.getElementById("bookmarkList");
  container.innerHTML = "";

  bookmarks.forEach((bookmark, index) => {
    container.innerHTML += `
      <div class="bookmark">
        <strong>${bookmark.name}</strong><br>
        <a href="${bookmark.url}" target="_blank">${bookmark.url}</a><br>
        <button onclick="deleteBookmark(${index})">Delete</button>
      </div>
    `;
  });
}
window.onload = displayBookmarks;
