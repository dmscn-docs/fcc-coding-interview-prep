import { streamers } from "./modules/utils/database.js";
import { fetchData } from "./modules/utils/fetchData.js";
import { switchTab } from "./modules/utils/switchTab.js";

const tabAll = document.getElementById("all");
const tabOnline = document.getElementById("online");
const tabOffline = document.getElementById("offline");

tabAll.addEventListener("click", (e) =>
  switchTab(e.target, [tabOnline, tabOffline])
);
tabOnline.addEventListener("click", (e) =>
  switchTab(e.target, [tabAll, tabOffline])
);
tabOffline.addEventListener("click", (e) =>
  switchTab(e.target, [tabAll, tabOnline])
);

async function startApp() {
  await fetchData(streamers);
  switchTab(tabAll, [tabOnline, tabOffline]);
  document.getElementById("menu").classList = "mx-6 grid";
}

await startApp();
