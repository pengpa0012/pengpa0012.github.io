

/* Nav Toggle */

const navList = document.querySelector('.nav-list')
const navBurger = document.querySelector('.nav-burger')
const navBurgerLine = document.querySelectorAll('.nav-burger .line')
const overlay = document.querySelector('.overlay')

navBurger.addEventListener('click', ()=>{

	navList.classList.toggle('active')
	overlay.classList.toggle('active')

	navBurgerLine.forEach(line =>{
		line.classList.toggle('active')
	})
	

})


overlay.addEventListener('click', ()=>{
	navList.classList.toggle('active')
	overlay.classList.toggle('active')
	navBurgerLine.forEach(line =>{
		line.classList.toggle('active')
	})
})