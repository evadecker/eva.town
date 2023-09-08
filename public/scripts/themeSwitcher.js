let toggleButton;
let animatedCircle;

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

function setAnimatedCircleCoords() {
  animatedCircle.style.top = toggleButton.getBoundingClientRect().top + "px";
  animatedCircle.style.left = toggleButton.getBoundingClientRect().left + "px";
}

function handleAnimationStart() {
  // Apply data attribute to body
  document.body.dataset.animating = "";
  // Set coordinates for animated background circle
  setAnimatedCircleCoords();
  // Disable button
  toggleButton.setAttribute("disabled", "");
}

function handleAnimationEnd() {
  // Remove data attribute from body
  document.body.removeAttribute("data-animating");
  // Enable button
  toggleButton.removeAttribute("disabled");
}

function toggleTheme() {
  const currentTheme = document.body.dataset.theme;
  handleAnimationStart();
  currentTheme == "dark" ? enableLightMode() : enableDarkMode();
  setTimeout(() => handleAnimationEnd(), 1000);
}

function setThemeButton() {
  toggleButton = document.querySelector("[data-theme-toggle]");
  toggleButton.addEventListener("click", toggleTheme);
  animatedCircle = document.querySelector(".animated-circle");
}

function init() {
  setInitialTheme();

  document.addEventListener("DOMContentLoaded", setThemeButton);
  document.addEventListener("DOMContentLoaded", setAnimatedCircleCoords);
}

init();
