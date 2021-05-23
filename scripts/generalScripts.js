
/* ----- navbar ---- */
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
/* ----- footer year ---- */
document.getElementById("year").innerHTML = new Date().getFullYear();
