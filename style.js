const access = "cwjdLwufHbqVDM7E8IDfH9gADpm_XYCLZ2I5ghqlCDg";

const searchForm = document.getElementById("Search-form");
const searchBox = document.getElementById("search");
const searchResult = document.getElementById("result");
const showmore = document.getElementById("show_more");

let keyword = "";
let page = 1;

async function searchImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${access}&per_page=10`;

  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    searchResult.innerHTML = "";
  }

  const results = data.results;

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  });
  //   console.log(data);
  showmore.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});

showmore.addEventListener("click", () => {
  page++;
  searchImages();
});
