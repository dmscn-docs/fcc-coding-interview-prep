async function getData(string) {
  const response = await fetch(
    `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${string}&format=json&utf8=&origin=*`
  );
  return response.json();
}

function renderArticles(list) {
  const DOM = document.getElementById("content");

  DOM.innerHTML = "";

  list.map((item) => {
    const { title, pageid, snippet } = item;

    DOM.innerHTML += `
    <a
      href="https://en.wikipedia.org/wiki/?curid=${pageid}"
      class="p-4 max-w-xs max-h-24 grid gap-y-2.5 bg-neutral-800 border   border-neutral-600 rounded hover:bg-neutral-700"
    >
      <h2 class="text-1xl truncate lg:text-2xl">${title}</h2>
      <p class="truncate">
        ${snippet}
      </p>
    </a>
    `;
  });
}

const buttonSearch = document.getElementById("button-search");

buttonSearch.addEventListener("click", async function () {
  const inputSearch = document.getElementById("input-search");

  if (inputSearch.value !== "") {
    const { query } = await getData(inputSearch.value);
    renderArticles(query.search);
    inputSearch.value = "";
  } else {
    alert("It is not possible to do an empty search.");
  }
});

document
  .getElementById("form")
  .addEventListener("submit", (e) => e.preventDefault());
