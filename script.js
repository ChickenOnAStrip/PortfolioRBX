const toggleButton = document.getElementById('toggleDarkMode');
const body = document.body;
const lightMode = localStorage.getItem('lightMode') === 'true';
body.classList.toggle('light-mode', lightMode);
toggleButton.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  localStorage.setItem('lightMode', body.classList.contains('light-mode'));
});