const cookiePairs = document.cookie.split(';').map(pair => pair.trim())
const popupCookie = cookiePairs.find(pair => pair.startsWith('popupClose='))
if (!popupCookie) {
	const popup = document.querySelector('#subscribe-modal')
	popup.classList.add('modal_active')

	const popupClose = document.querySelector('.modal__close')
	popupClose.addEventListener('click', () => {
		popup.classList.remove('modal_active')
		document.cookie = 'popupClose=true'
	})
}
