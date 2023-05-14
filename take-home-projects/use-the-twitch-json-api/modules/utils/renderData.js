import { streamerButton } from "../components/streamerButton.js";

export function renderData(database) {
  const root = document.getElementById("content");

  root.innerHTML = "";

  database.forEach((item) => {
    root.innerHTML += streamerButton(item);
  });
}
