const accessKey = "xxDwRWI62whxZwljlfw968OnvPNFPQngGolfjcUmGMc";

if (typeof document !== 'undefined') {
  const formEl = document.querySelector("form")
}
if (typeof document !== 'undefined') {
  const inputEL = document.querySelector("search-input" )
};
if (typeof document !== 'undefined') {
  const searchResults = document.querySelector(".search-results")
};
if (typeof document !== 'undefined') {
  const showMore = document.getElementById("show-more-button")
};

let inputData = "";
let page = 1;

async function searchImages() {
  inputData = inputEL.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

  const response = await fetch(url);
  const data = await response.json();

  const results = data.results;

  if (page === 1) {
    searchResults.innerHTML = "";
  }

  results.map((result) => {
    const imageWrapper = document.createElement ('div');
    imageWrapper.classList.add("search-result" );
    const image = document.createElement('img');
    image.src = results.urls.small;
    image.alt = results.alt_description;
    const imageLink = document.createElement('a');
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;

imageWrapper.appendChild(image);
imageWrapper.appendChild(imageLink);
searchResults.appendChild(imageWrapper);
  });

  page++;
  if(page > 1) {
    showMore.style.display = "block";
  }
}
if (typeof formEl !== 'undefined') {
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImages();
})}; 


if (typeof showMore !== 'undefined') {
  showMore.addEventListener("click", () => {
    searchImages();
    });
};

