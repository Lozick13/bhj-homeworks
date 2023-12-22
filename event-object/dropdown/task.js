const elementDropdown = document.querySelector('.dropdown')
const elementDropdownList = document.querySelector('.dropdown__list')
const elementsDropdownItem = document.querySelectorAll('.dropdown__item')
const elementDropdownValue = document.querySelector('.dropdown__value')

elementDropdown.addEventListener('click', () => {
	elementDropdownList.className.includes('dropdown__list_active')
		? elementDropdownList.classList.remove('dropdown__list_active')
		: elementDropdownList.classList.add('dropdown__list_active')
})
elementsDropdownItem.forEach(element => {
	element.addEventListener('click', event => {
		event.preventDefault()
		elementDropdownValue.textContent = element.textContent
	})
})
