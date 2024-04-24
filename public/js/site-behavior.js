const navBar_hideBtn = document.querySelector(".navBar_hideBtn")

navBar_hideBtn.addEventListener("click", function () {
	this.parentNode.classList.toggle("hide")
	this.classList.toggle("show-btn")
	this.classList.toggle("hide-btn")
	document.querySelector(".home-container").classList.toggle("dark-bg")
})
