import '@ionic/core';
// import { setupConfig } from '@ionic/core';

// Check if the platform is in Dark Mode
// Use matchMedia to check the user preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

toggleDarkTheme(prefersDark.matches);

// Listen for changes to the prefers-color-scheme media query
prefersDark.addListener((mediaQuery) => toggleDarkTheme(mediaQuery.matches));
// toggleDarkTheme(true);

// Add or remove the "dark" class based on if the media query matches
function toggleDarkTheme(shouldAdd) {
  document.body.classList.toggle('dark', shouldAdd);
}

export default () => {
  // setupConfig({
  //   mode: 'ios'
  // });
};
