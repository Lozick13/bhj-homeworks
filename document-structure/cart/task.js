function save() {
	const cartProductsHTML = cartProducts.innerHTML
	localStorage.setItem('products', cartProductsHTML)
}

function delButton(del, cartProduct) {
	del.addEventListener('click', () => {
		cartProduct.outerHTML = ''
		checkCart()
		save()
	})
}

function checkCart() {
	cartProducts.childNodes.length === 0
		? (cart.style.display = 'none')
		: (cart.style.display = 'block')
}

const products = document.querySelectorAll('.product')
const cart = document.querySelector('.cart')
const cartProducts = document.querySelector('.cart__products')

if (localStorage.getItem('products') !== null) {
	cartProducts.innerHTML = localStorage.getItem('products')
	const products = cartProducts.querySelectorAll('.cart__product')
	products.forEach(product => {
		const del = product.querySelector('.cart__product-cross')
		delButton(del, product)
	})
}
checkCart()

products.forEach(product => {
	const value = product.querySelector('.product__quantity-value')
	const dec = product.querySelector('.product__quantity-control_dec')
	const inc = product.querySelector('.product__quantity-control_inc')
	const addProductButton = product.querySelector('.product__add')
	const id = product.getAttribute('data-id')
	const imgSrc = product.querySelector('.product__image').getAttribute('src')

	dec.addEventListener('click', () => {
		if (+value.textContent !== 1) {
			value.textContent = +value.textContent - 1
		}
	})

	inc.addEventListener('click', () => {
		value.textContent = +value.textContent + 1
	})

	addProductButton.addEventListener('click', () => {
		cart.style.display = 'block'
		let cartProduct = document.querySelector(`.cart__product[data-id="${id}"]`)
		if (cartProduct !== null) {
			const cartProductValue = cartProduct.querySelector('.cart__product-count')
			cartProductValue.textContent =
				+cartProductValue.textContent + +value.textContent
		} else {
			cartProduct = document.createElement('div')
			cartProduct.className = 'cart__product'
			cartProduct.setAttribute('data-id', id)
			cartProduct.innerHTML = `<img class="cart__product-image" src="${imgSrc}">
    <div class="cart__product-count">${value.textContent}</div>
	 <div class="cart__product-cross">&#10060;</div>`
			cartProducts.appendChild(cartProduct)

			const del = cartProduct.querySelector('.cart__product-cross')
			delButton(del, cartProduct)
		}
		save()
	})
})
