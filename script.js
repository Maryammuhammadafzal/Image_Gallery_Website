

// Select elements
const welcomePage = document.getElementById('welcome-page');
const mainContent = document.getElementById('main-content');
const getStartedButton = document.getElementById('get-started');

// Optionally allow manual navigation with "Get Started" button
getStartedButton.addEventListener('click', () => {
  welcomePage.classList.add('hidden');
  mainContent.classList.remove('hidden');
});
