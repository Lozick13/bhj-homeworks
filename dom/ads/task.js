let time = 1000
let interval = setInterval(rotateCases, time)

function rotateCases() {
	const cases = document.querySelectorAll('.rotator__case')
	for (let i = 0; i < cases.length; i++) {
		if (cases[i].classList.contains('rotator__case_active')) {
			cases[i].classList.remove('rotator__case_active')
			i === cases.length - 1 ? (i = 0) : i++
			cases[i].classList.add('rotator__case_active')

			time = cases[i].dataset.speed
			cases[i].style.color = cases[i].dataset.color
			clearInterval(interval)
			interval = setInterval(rotateCases, time)
		}
	}
}
