const navBurger = document.querySelector('.nav-burger')
const navContent = document.querySelector('.nav-content')


navBurger.addEventListener('click', navToggle)

function navToggle(){
	navContent.classList.toggle('toggle')
}