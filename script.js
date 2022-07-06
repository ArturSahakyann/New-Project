// Menu For Home

let home = document.querySelector(".home")
let homeItem = document.querySelector(".homeItem")

home.onmouseover = () => {
    homeItem.classList.toggle("blockList")
}

home.onmouseout = () => {
    homeItem.classList.remove("blockList")
}

// Finish

// Menu for Pages

let pages = document.querySelector(".pages")
let pageItem = document.querySelector(".pageItem")

pages.onmouseover = () => {
    pageItem.classList.toggle("pageList")
}

pages.onmouseout = () => {
    pageItem.classList.remove("pageList")
}

// Finish

// Menu for Services

let services = document.querySelector(".services")
let serviceItem = document.querySelector(".serviceItem")

services.onmouseover = () => {
    serviceItem.classList.toggle("serviceList")
}

services.onmouseout = () => {
    serviceItem.classList.remove("serviceList")
}

// Finish


// Menu for projects

let projects = document.querySelector(".projects")
let projectItem = document.querySelector(".projectItem")

projects.onmouseover = () => {
    projectItem.classList.toggle("projectList")
}

projects.onmouseout = () => {
    projectItem.classList.remove("projectList")
}

// Finish



// Menu for Blog

let blog = document.querySelector(".blog")
let blogItem = document.querySelector(".blogItem")

blog.onmouseover = () => {
    blogItem.classList.toggle("blogList")
}

blog.onmouseout = () => {
    blogItem.classList.remove("blogList")
}

// Finish

// Icon search onclick

let blockForSearch = document.querySelector(".blockForSearch")
let search = document.querySelector(".searchIcon")
let closeWindow = document.querySelector(".closeWindow")

search.onclick = () => {
    blockForSearch.style.display = "block"
}

closeWindow.onclick = () => {
    blockForSearch.style.display = "none"
}

let arrow = document.querySelector(".arrow")

arrow.onclick = () => {
    blockForSearch.style.display = "none"
}

// Finish


// For Header Onscroll Fixed

const header = document.querySelector("header")

function headerAnimation() {
    if(scrollY >= 80) {
        header.classList.add("fixed")
    } else {
        header.classList.remove("fixed")
    }
}

// Finish



// For slider

let slider = document.querySelector(".slider")

let images = [
    `<img src="./Images/first.jpg">`,
    `<img src="./Images/second.jpg">`,
    `<img src="./Images/third.jpg">`,
]

let index = 0;

slider.innerHTML = images[index]

const left = document.querySelector(".left")
const right = document.querySelector(".right")


left.onclick = function () {
	if(index == 0) {
		index = images.length;
	}

	index--

	slider.innerHTML = images[index]
}

right.onclick = function () { 
	index++
	
	if(index == images.length) {
		index = 0;
	}

	slider.innerHTML = images[index]
}

setInterval(function() { 
	index++

	if(index == images.length) {
		index = 0;
	}

slider.innerHTML = images[index]

},3000);

// Finish
