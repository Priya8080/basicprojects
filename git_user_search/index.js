function searchUser() {
  const username = document.getElementById("username").value.trim();
  const profileDiv = document.getElementById("profile");

  if (!username) {
    alert("Please enter a username");
    return;
  }

  const url = `https://api.github.com/users/${username}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("User not found");
      }
      return response.json();
    })
    .then(data => {
      profileDiv.style.display = "block";
      profileDiv.innerHTML = `
        <img src="${data.avatar_url}" alt="${data.login}">
        <h3>${data.name || data.login}</h3>
        <p><strong>Followers:</strong> ${data.followers}</p>
        <p><strong>Following:</strong> ${data.following}</p>
        <p><strong>Public Repos:</strong> ${data.public_repos}</p>
        <a href="${data.html_url}" target="_blank">View Profile</a>
      `;
    })
    .catch(error => {
      profileDiv.style.display = "block";
      profileDiv.innerHTML = `<p style="color:red;">${error.message}</p>`;
    });
}
