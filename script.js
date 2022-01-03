const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

const audio = new Audio();
audio.src = "official-soundtrack-the-night-king.mp3";
audio.volume = 0.1;
audio.loop = true;
