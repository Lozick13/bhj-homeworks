const tooltipElements = document.querySelectorAll('.has-tooltip')

tooltipElements.forEach(el => {
	const tooltip = document.createElement('div')
	tooltip.className = 'tooltip'
	tooltip.textContent = el.title

	const positionList = ['left', 'top', 'right', 'bottom']
	const randomPosition = positionList[Math.floor(Math.random() * 4)]
	tooltip.setAttribute('data-position', randomPosition)
	el.insertAdjacentElement('afterend', tooltip)

	el.addEventListener('click', e => {
		e.preventDefault()

		const activeTooltip = document.querySelector('.tooltip_active')
		const position = {
			top: el.getBoundingClientRect().top,
			left: el.getBoundingClientRect().left,
			with: el.getBoundingClientRect().width,
			height: el.getBoundingClientRect().height
		}

		tooltip.classList.toggle('tooltip_active')
		if (activeTooltip !== null) {
			activeTooltip.classList.remove('tooltip_active')
		}

		const data = tooltip.getAttribute('data-position')
		switch (data) {
			case 'bottom':
				tooltip.style.top = position.top + position.height + 'px'
				tooltip.style.left = position.left + 'px'
				break
			case 'top':
				tooltip.style.top = position.top - tooltip.offsetHeight + 'px'
				tooltip.style.left = position.left + 'px'
				break
			case 'left':
				tooltip.style.top = position.top + 'px'
				tooltip.style.left = position.left - tooltip.offsetWidth + 'px'
				break
			case 'right':
				tooltip.style.top = position.top + 'px'
				tooltip.style.left = position.left + position.with +'px'
				break
		}
	})
})
