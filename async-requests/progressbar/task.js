const form = document.querySelector('#form')
const progress = document.querySelector('#progress')

form.addEventListener('submit', e => {
	e.preventDefault()
	const xhr = new XMLHttpRequest()
	xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload')
	const formData = new FormData(form)

	xhr.upload.addEventListener('progress', e => {
		if (e.lengthComputable) {
			progress.setAttribute('max', e.total)
			progress.value = e.loaded
		}
	})

	xhr.send(formData)
})
