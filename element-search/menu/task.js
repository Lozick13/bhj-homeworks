window.onload = () => {
	const navElements = document.querySelectorAll('.menu__link')
	navElements.forEach(element => {
		console.log(element)
		element.addEventListener('click', event => {
			
			console.log(0)
			if (element.nextSibling()) {
				event.preventDefault()
				console.log(element.closest('.menu'))
				
			}
		})
	})
}
