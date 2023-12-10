const timerСountdown = function () {
	const elementTimer = document.getElementById('timer')

	if (elementTimer.textContent != 0) {
		elementTimer.textContent--
	} else {
		alert('Вы победили в конкурсе')
		clearInterval(timerСountdownInterval)
	}
}

const timerСountdownHard1 = function (h, m, s, timer) {
	if (s.textContent != 0) {
		s.textContent--
	} else if (m.textContent != 0) {
		m.textContent--
		s.textContent = 59
	} else if (h.textContent != 0) {
		h.textContent--
		m.textContent = 59
		s.textContent = 59
	} else {
		alert('Вы победили в конкурсе')
		clearInterval(timer)
		return 1
	}
	s.textContent = s.textContent.padStart(2, '0')
	m.textContent = m.textContent.padStart(2, '0')
	h.textContent = h.textContent.padStart(2, '0')
}

const timerСountdownHard2 = function (h, m, s, timer) {
	if (timerСountdownHard1(h, m, s, timer) === 1) {
		location =
			'https://s0.rbk.ru/v6_top_pics/media/img/1/83/756079611261831.jpg'
	}
}

const timerСountdownInterval = setInterval(timerСountdown, 1000)

const h1 = document.getElementById('hours1')
const m1 = document.getElementById('minutes1')
const s1 = document.getElementById('seconds1')
const timerСountdownHard1Interval = setInterval(
	() => timerСountdownHard1(h1, m1, s1, timerСountdownHard1Interval),
	1000
)

const h2 = document.getElementById('hours2')
const m2 = document.getElementById('minutes2')
const s2 = document.getElementById('seconds2')
const timerСountdownHard2Interval = setInterval(
	() => timerСountdownHard2(h2, m2, s2, timerСountdownHard2Interval),
	1000
)
