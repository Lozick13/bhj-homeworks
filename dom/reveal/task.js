document.addEventListener('scroll', () => {
	const blocks = document.querySelectorAll('.reveal')
	blocks.forEach(block => {
		if (
			block.getBoundingClientRect().top < window.innerHeight &&
			block.getBoundingClientRect().bottom > 0
		) {
			block.classList.add('reveal_active')
		} else {
			block.classList.remove('reveal_active')
		}
	})
})
