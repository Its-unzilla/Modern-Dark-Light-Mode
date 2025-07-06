document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const themeText = themeToggle.querySelector(".toggle-text");

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    themeToggle.setAttribute("aria-pressed", theme === "dark");
    themeText.textContent = theme === "dark" ? "Dark Mode" : "Light Mode";
  }

  function getStoredTheme() {
    return localStorage.getItem("theme");
  }

  function storeTheme(theme) {
    localStorage.setItem("theme", theme);
  }

  function getPreferredTheme() {
    const stored = getStoredTheme();
    if (stored) {
      return stored;
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(newTheme);
    storeTheme(newTheme);
  }

  // Init on load
  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  themeToggle.addEventListener("click", toggleTheme);
});
