export function toggleDarkMode() {
    const html = document.documentElement;
    const darkModeClass = 'dark';
    const isDarkMode = html.classList.contains(darkModeClass);
    html.classList.toggle(darkModeClass, !isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
  }
  
  export function setInitialDarkMode() {
    const html = document.documentElement;
    const darkModeClass = 'dark';
    const localStorageTheme = localStorage.getItem('theme');
    const isDarkMode = localStorageTheme === 'dark' || (!localStorageTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    html.classList.toggle(darkModeClass, isDarkMode);
  }