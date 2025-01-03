function setTheme(theme) {
  // Apply theme immediately
  document.documentElement.setAttribute('data-theme', theme);
  document.body.style.backgroundColor = theme === 'dark' ? '#1a1a1a' : '#fdfdfd';
  document.body.style.color = theme === 'dark' ? '#f5f5f5' : '#111';
  
  // Store theme
  localStorage.setItem('theme', theme);
  updateThemeIcon(theme);
  
  // Debug output
  console.log('Theme set to:', theme);
  const html = document.documentElement;
  console.log('CSS Variables:', {
    background: getComputedStyle(html).getPropertyValue('--background-color'),
    text: getComputedStyle(html).getPropertyValue('--text-color'),
    link: getComputedStyle(html).getPropertyValue('--link-color')
  });
}

function toggleTheme() {
  const currentTheme = localStorage.getItem('theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (icon) {
    icon.textContent = theme === 'dark' ? '🌙' : '☀️';
  }
}

// Initialize theme immediately when script loads
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

// Also set on DOMContentLoaded to ensure all elements are updated
document.addEventListener('DOMContentLoaded', () => {
  setTheme(savedTheme);
});