function getInitialTheme() {
  // Check local storage for user preference
  const preferredTheme = localStorage.getItem("theme");
  if (preferredTheme == "dark") {
    return "dark";
  } else if (preferredTheme == "light") {
    return "light";
  }

  // Check media query for OS-level preference
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  if (prefersDarkScheme.matches) {
    return "dark";
  }

  // Else default to light
  return "light";
}

function enableDarkMode() {
  document.body.dataset.theme = "dark";
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme !== null) metaTheme.setAttribute("content", "#1d0206");
  localStorage.setItem("theme", "dark");
}

function enableLightMode() {
  document.body.dataset.theme = "light";
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme !== null) metaTheme.setAttribute("content", "#ffdcdc");
  localStorage.setItem("theme", "light");
}

function setInitialTheme() {
  const initialTheme = getInitialTheme();
  if (initialTheme == "dark") {
    enableDarkMode();
  } else if (initialTheme == "light") {
    enableLightMode();
  }
}

function toggleTheme() {
  const currentTheme = document.body.dataset.theme;
  if (currentTheme == "dark") {
    enableLightMode();
  } else if (currentTheme == "light") {
    enableDarkMode();
  }
}

setInitialTheme();
