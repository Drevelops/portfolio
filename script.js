const toggleButton = document.getElementById('theme-toggle');

// Check for saved theme preference in localStorage
const savedTheme = localStorage.getItem('theme') || 'light'; // Default to 'light'
document.documentElement.setAttribute('data-theme', savedTheme);

// Update button text based on the theme
toggleButton.textContent = savedTheme === 'dark' ? 'Light Mode' : 'Dark Mode';

// Toggle Theme and Save Preference
toggleButton.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  // Apply new theme
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme); // Save preference

  // Update button text
  toggleButton.textContent = newTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
});
