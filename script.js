

// Select elements
const welcomePage = document.getElementById('welcome-page');
const mainContent = document.getElementById('main-content');
const getStartedButton = document.getElementById('get-started');

document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for contacting us! We’ll get back to you soon.');
});

let signinBtn = document.getElementById('signinBtn');
signinBtn.addEventListener('click', function(){
  window.location.href = "./loginform/login.html"
})

let exploreBtn = document.getElementById('exploreBtn');
exploreBtn.addEventListener('click', function(){
  window.location.href = "#gallery-content"
})