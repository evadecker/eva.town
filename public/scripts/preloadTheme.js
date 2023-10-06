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

let hasSetTheme = false;

const handleFirstLoad = () => {
  if (!hasSetTheme) {
    setTheme();
    hasSetTheme = true;
  }
};

// Run on the very first page load
window.addEventListener("load", handleFirstLoad);

// Re-apply data attribute after View Transition to presere state
document.addEventListener("astro:after-swap", setTheme);
