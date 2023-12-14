window.onload = () => {
	const popup = document.querySelector('#modal_main')
	popup.classList.add('modal_active')

	const popupClose = document.querySelectorAll('.modal__close')
	popupClose.forEach(element => {
		element.addEventListener('click', () => {
			element.closest('#modal_success')
				? popupSuccess.classList.remove('modal_active')
				: popup.classList.remove('modal_active')
		})
	})

	const popupBtn = document.querySelector('.show-success')
	const popupSuccess = document.querySelector('#modal_success')
	popupBtn.addEventListener('click', () => {
		popupSuccess.classList.add('modal_active')
	})
}
