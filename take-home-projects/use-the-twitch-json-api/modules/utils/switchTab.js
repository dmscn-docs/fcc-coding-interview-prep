import { renderData } from "./renderData.js";
import { database } from "./database.js";

export function switchTab(tab, otherTabs) {
  const tabs = {
    all: () => renderData([...database]),
    online: () => renderData([...database].filter((item) => item.state)),
    offline: () => renderData([...database].filter((item) => !item.state)),
  };

  const renderActiveTab = tabs[tab.id];

  if (tab.id === "online") {
    tab.classList = "px-2 h-6 bg-sky-600 text-sm";
  } else {
    tab.classList = "px-2 h-6 bg-neutral-700 text-sm";
  }

  otherTabs.forEach((tab) => {
    tab.classList = "px-2 h-6 bg-neutral-800 text-sm";
  });

  renderActiveTab();
}
