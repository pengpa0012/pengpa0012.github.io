/* Nav Toggle */

const navList = document.querySelector('.nav-list')
const navLinks = document.querySelectorAll('.nav-list a')
const navBurger = document.querySelector('.nav-burger')
const overlay = document.querySelector('.overlay')

navBurger.addEventListener('click', ()=>{
	navList.classList.toggle('active')
})

navLinks.forEach(li => {
	li.addEventListener('click', ()=>{
		navList.classList.toggle('active')
	})
})


overlay.addEventListener('click', ()=>{
	displayWrapper.classList.toggle('active')
	overlay.classList.toggle('active')	
})

// Project Expand Function

const expandBtn = document.querySelectorAll('.expand')
const displayImg = document.querySelector('.project-display img')
const displayWrapper = document.querySelector('.project-display')

expandBtn.forEach(btn => {
	btn.addEventListener('click', e => {
		displayWrapper.classList.toggle('active')
		displayImg.src = e.target.previousElementSibling.attributes[0].nodeValue
		overlay.classList.toggle('active')	
	})
})

// Svg Animation

const dot = document.querySelectorAll('.dot')

const colorArray = [
	'#173F5F',
	'#20639B',
	'#3CAEA3',
	'#F6D55C',
	'#ED553B'
]

dot.forEach(el => {
	el.addEventListener('click', ()=>{
		const randomNum = Math.floor(Math.random() * 5)

		el.style.animation = 'none'
		el.style.fill = colorArray[randomNum]
	})
})



// Text Animation

const heading = document.querySelector('.heading')
const headingSplit = heading.textContent.split("")

heading.textContent = ''

headingSplit.forEach(head => {
	heading.innerHTML += `<span class="head-text">${ head }</span>`
})


let charIndex = 0
let timer = setInterval(onTick, 50)

function onTick(){
	const span = heading.querySelectorAll('span')[charIndex]

	span.classList.add('fade')
	charIndex++
	if(charIndex === heading.children.length){
		completed()
		return
	}
}

function completed(){
	clearInterval(timer)
	timer = null
}

// Banner Animation

window.addEventListener('load', ()=>{
	const subHeading = document.querySelector('.sub-heading')

	subHeading.classList.add('fade')

})

// Sections Animation on Scroll

window.addEventListener('scroll', ()=>{
	const allLeft = document.querySelectorAll('.left')
	let screenPos = window.innerHeight / 1.5

	allLeft.forEach(left => {
		let leftPos = left.getBoundingClientRect().top
		if(leftPos < screenPos) left.classList.add('active')
		if(leftPos > screenPos) left.classList.remove('active')	

	})

	const allRight = document.querySelectorAll('.right')

	allRight.forEach(right => {
		let rightPos = right.getBoundingClientRect().top
		if(rightPos < screenPos) right.classList.add('active')
		if(rightPos > screenPos) right.classList.remove('active')	
	})
})
