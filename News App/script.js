const API_KEY = "YOUR_API_KEY"; // get from newsapi.org

async function getNews() {
  const query = document.getElementById("search").value;

  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`
  );
  const data = await res.json();

  const newsDiv = document.getElementById("news");
  newsDiv.innerHTML = "";

  data.articles.forEach(article => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${article.title}</h3>
      <p>${article.description || ""}</p>
      <a href="${article.url}" target="_blank">Read more</a>
      <hr>
    `;
    newsDiv.appendChild(div);
  });
}