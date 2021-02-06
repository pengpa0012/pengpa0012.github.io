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

// Floating labels

const inputLabel = document.querySelectorAll('[data-label]')
const inputField = document.querySelectorAll('[data-input]')

class Label{
	constructor(input, field){
		this.input = input
		this.field = field
		floatLabel(this)
	}
}

function floatLabel(label){
	label.input.forEach(el => {
		el.addEventListener('focus', e => {
			const labelText = e.target.offsetParent.children[0]
			labelText.classList.add('active')
			el.classList.add('active')
		})
		el.addEventListener('blur', e => {	
			if(e.target.value != "") return		
			e.target.offsetParent.children[0].classList.remove('active')	
			el.classList.remove('active')
		})
	})
}

const float = new Label(inputField, inputLabel)

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
	const bannerImg = document.querySelector('.banner-img')
	subHeading.classList.add('fade')
	bannerImg.classList.add('fade')
})


// load more function

const allLoad = document.querySelectorAll('.load-more')
const loadBtn = document.querySelector('.load-btn button')

allLoad.forEach(el => {
	el.style.display = 'none'
})

let maxResult = 2

loadBtn.addEventListener('click', () => {

	if(maxResult == 4) loadBtn.style.display = 'none' 

	for(i = 0; i < maxResult; i++){
		allLoad[i].style.display = 'flex'
	}

	maxResult += 2
	console.log(maxResult)
})