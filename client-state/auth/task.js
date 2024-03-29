function loadWelcome(id) {
	const signIn = document.querySelector('#signin')
	const welcome = document.querySelector('#welcome')
	const userIdSpan = document.querySelector('#user_id')

	signIn.classList.remove('signin_active')
	welcome.classList.add('welcome_active')
	userIdSpan.textContent = id
}

function checkUser(xhr) {
	if (xhr.readyState === xhr.DONE) {
		if (xhr.status === 201) {
			const xhrText = JSON.parse(xhr.response)

			if (xhrText.success === true) {
				const userId = xhrText.user_id

				localStorage.setItem('user_id', userId)
				loadWelcome(userId)
			} else {
				alert('Неверный логин/пароль')
			}
		} else {
			alert('Произошла ошибка: ' + xhr.status)
		}
	}
}

const localStorageUserId = localStorage.getItem('user_id')
if (localStorageUserId) {
	loadWelcome(localStorageUserId)
} else {
	const form = document.querySelector('#signin__form')
	form.addEventListener('submit', e => {
		e.preventDefault()

		const formData = new FormData(form)
		const xhr = new XMLHttpRequest()

		xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth')
		xhr.addEventListener('load', () => {
			checkUser(xhr)
		})
		xhr.send(formData)
	})
}
