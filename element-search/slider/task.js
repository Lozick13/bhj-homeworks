const sliderItems = document.querySelectorAll('.slider__item')
const btnPrev = document.querySelector('.slider__arrow_prev')
const btnNext = document.querySelector('.slider__arrow_next')

let imageSelected = 0
btnPrev.addEventListener('click', () => {
	sliderItems[imageSelected].classList.remove('slider__item_active')
	sliderDots[imageSelected].classList.remove('slider__dot_active')
	imageSelected === 0
		? (imageSelected = sliderItems.length - 1)
		: imageSelected--
	sliderItems[imageSelected].classList.add('slider__item_active')
	sliderDots[imageSelected].classList.add('slider__dot_active')
})
btnNext.addEventListener('click', () => {
	sliderItems[imageSelected].classList.remove('slider__item_active')
	sliderDots[imageSelected].classList.remove('slider__dot_active')
	imageSelected === sliderItems.length - 1
		? (imageSelected = 0)
		: imageSelected++
	sliderItems[imageSelected].classList.add('slider__item_active')
	sliderDots[imageSelected].classList.add('slider__dot_active')
})

const sliderDots = document.querySelectorAll('.slider__dot')
for (let index = 0; index < sliderDots.length; index++) {
	sliderDots[index].addEventListener('click', () => {
		sliderItems[imageSelected].classList.remove('slider__item_active')
		sliderDots[imageSelected].classList.remove('slider__dot_active')
		imageSelected = index
		sliderItems[imageSelected].classList.add('slider__item_active')
		sliderDots[imageSelected].classList.add('slider__dot_active')
	})
}
