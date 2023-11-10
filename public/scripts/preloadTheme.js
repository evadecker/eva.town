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
  document.body.classList.remove("light", "dark");
  document.body.classList.add(userPreference);

  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme !== null)
    metaTheme.setAttribute(
      "content",
      userPreference === "dark" ? "#0D1512" : "#D6F1E3"
    );

  window.localStorage.setItem("theme", userPreference);
};

setTheme();

// Update body class after swap
document.addEventListener("astro:after-swap", setTheme);
