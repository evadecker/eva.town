function getUserPreference() {
  if (window.localStorage.getItem("theme")) {
    return window.localStorage.getItem("theme");
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

const setTheme = () => {
  const userPreference = getUserPreference();
  console.log("setting theme", userPreference);
  document.body.classList.remove("light", "dark");
  document.body.classList.add(userPreference);
  window.localStorage.setItem("theme", userPreference);
};

setTheme();

// Update body class after swap
document.addEventListener("astro:after-swap", setTheme);
