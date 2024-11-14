export function updateFavicon() {
  if (typeof window === "undefined") return; // Make sure this is only running in the browser

  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  console.log("isDarkMode", isDarkMode);
  const favicon = document.querySelector(
    "link[rel='icon']"
  ) as HTMLLinkElement | null;

  favicon.href = isDarkMode ? "/img/favdark.svg" : "/img/favicon.ico";
  console.log("favicon", favicon.href);
}

export function initFaviconSwitcher() {
  console.log("Called initFaviconSwitcher");
  if (typeof window === "undefined") return; // Ensure this only runs in the browser

  updateFavicon();
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", updateFavicon);
}
