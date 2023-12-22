const tabs = document.querySelectorAll('.tab')
for (let i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener('click', () => {
		const tabActive = document.querySelector('.tab_active')
		tabActive.classList.remove('tab_active')
		tabs[i].classList.add('tab_active')

		const contents = document.querySelectorAll('.tab__content')
		const contentActive = document.querySelector('.tab__content_active')
		contentActive.classList.remove('tab__content_active')
		contents[i].classList.add('tab__content_active')
	})
}
