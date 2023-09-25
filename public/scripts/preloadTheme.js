function userPreference() {
  if (localStorage?.getItem("theme")) {
    return localStorage.getItem("theme");
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

document.body.dataset.theme = userPreference();

window.localStorage.setItem("theme", userPreference());
