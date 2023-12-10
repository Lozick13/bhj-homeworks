const elementCookie = document.getElementById('cookie')
const elementClicker__counter = document.getElementById('clicker__counter')
const elementClicker__speed = document.getElementById('clicker__speed')
let i = 0
let lastTime = 0
let newTime
elementCookie.onclick = () => {
	elementClicker__counter.textContent++
	if (i === 0) {
		elementCookie.width += 50
		i++
	} else {
		elementCookie.width -= 50
		i--
	}

	newTime = new Date()
	elementClicker__speed.textContent = (
		(1 / (newTime - lastTime)) *
		1000
	).toFixed(2)
	lastTime = newTime
}
