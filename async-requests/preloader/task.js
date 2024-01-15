function createElements(obj) {
	const course = document.createElement('div')
	const charCode = obj.CharCode
	const value = obj.Value

	course.className = 'item'
	course.innerHTML = `<div class="item__code">${charCode}</div>
			<div class="item__value">${value}</div>
			<div class="item__currency">руб.</div>`
	courses.appendChild(course)
}

const courses = document.querySelector('#items')
let coursesArray = []
if (localStorage.getItem('coursesArray')) {
	coursesArray = JSON.parse(localStorage.getItem('coursesArray'))
	coursesArray.forEach(el => {
		createElements(el)
	})
}

let xhr = new XMLHttpRequest()
xhr.open(
	'GET',
	'https://students.netoservices.ru/nestjs-backend/slow-get-courses'
)
xhr.addEventListener('readystatechange', () => {
	if (xhr.readyState === xhr.DONE && xhr.status === 200) {
		const loader = document.querySelector('#loader')
		const valutes = JSON.parse(xhr.responseText).response.Valute
		coursesArray = []
		courses.innerHTML = ''

		Object.keys(valutes).forEach(key => {
			createElements(valutes[key])

			coursesArray.push({
				CharCode: valutes[key].CharCode,
				Value: valutes[key].Value,
			})
			localStorage.setItem('coursesArray', JSON.stringify(coursesArray))
		})
		loader.classList.remove('loader_active')
	}
})
xhr.send()
