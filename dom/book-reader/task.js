const fonts = document.querySelectorAll('.font-size')
fonts.forEach(font => {
	font.addEventListener('click', event => {
		event.preventDefault()
		const fontActive = document.querySelector('.font-size_active')
		fontActive.classList.remove('font-size_active')
		font.classList.add('font-size_active')

		const book = document.querySelector('.book__content')
		book.classList.remove('book_fs-big')
		book.classList.remove('book_fs-small')
		if (font.className.includes('font-size_small')) {
			book.classList.add('book_fs-small')
		} else if (font.className.includes('font-size_big')) {
			book.classList.add('book_fs-big')
		}
	})
})

const colors = document.querySelectorAll('.color')
colors.forEach(color => {
	if (color.closest('.book__control_color') !== null) {
		color.addEventListener('click', event => {
			event.preventDefault()
			const colorActive = document.querySelectorAll('.color_active')[0]
			colorActive.classList.remove('color_active')
			color.classList.add('color_active')

			const book = document.querySelector('.book__content')
			book.classList.remove('book_color-gray')
			book.classList.remove('book_color-whitesmoke')
			book.classList.remove('book_color-black')

			if (color.className.includes('text_color_black')) {
				book.classList.add('book_color-black')
			}
			if (color.className.includes('text_color_gray')) {
				book.classList.add('book_color-gray')
			}
			if (color.className.includes('text_color_whitesmoke')) {
				book.classList.add('book_color-whitesmoke')
			}
		})
	} else {
		color.addEventListener('click', event => {
			event.preventDefault()
			const colorActive = document.querySelectorAll('.color_active')[1]
			colorActive.classList.remove('color_active')
			color.classList.add('color_active')

			const book = document.querySelector('.book__content')

			book.classList.remove('book_bg-gray')
			book.classList.remove('book_bg-white')
			book.classList.remove('book_bg-black')
			if (color.className.includes('bg_color_black')) {
				book.classList.add('book_bg-black')
			}
			if (color.className.includes('bg_color_gray')) {
				book.classList.add('book_bg-gray')
			}
			if (color.className.includes('bg_color_white')) {
				book.classList.add('book_bg-white')
			}
		})
	}
})
