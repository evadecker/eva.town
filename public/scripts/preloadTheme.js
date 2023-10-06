function userPreference() {
  if (localStorage?.getItem("theme")) {
    return localStorage.getItem("theme");
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

const setTheme = () => {
  document.body.dataset.theme = userPreference();
  window.localStorage.setItem("theme", userPreference());
};

document.addEventListener("astro:page-load", setTheme, { once: true });
document.addEventListener("astro:after-swap", setTheme);
