class Game {
	constructor(container) {
		this.container = container
		this.wordElement = container.querySelector('.word')
		this.winsElement = container.querySelector('.status__wins')
		this.lossElement = container.querySelector('.status__loss')

		this.reset()
		this.registerEvents()
	}

	reset() {
		clearInterval(this.interval)
		this.setNewWord()
		this.winsElement.textContent = 0
		this.lossElement.textContent = 0
	}

	timer() {
		const timer = document.querySelector('.status__timer')
		let seconds = document.querySelectorAll('.symbol').length
		timer.textContent = seconds
		this.interval = setInterval(() => {
			seconds--
			timer.textContent = seconds
			if (seconds === 0) {
				this.fail()
			}
		}, 1000)
	}

	registerEvents() {
		document.addEventListener('keyup', event => {
			const letter = this.currentSymbol.textContent
			letter === event.key.toLowerCase() ? this.success() : this.fail()
		})
	}

	success() {
		if (this.currentSymbol.classList.contains('symbol_current'))
			this.currentSymbol.classList.remove('symbol_current')
		this.currentSymbol.classList.add('symbol_correct')
		this.currentSymbol = this.currentSymbol.nextElementSibling

		if (this.currentSymbol !== null) {
			this.currentSymbol.classList.add('symbol_current')
			return
		}

		if (++this.winsElement.textContent === 10) {
			alert('Победа!')
			this.reset()
		}
		clearInterval(this.interval)
		this.setNewWord()
	}

	fail() {
		if (++this.lossElement.textContent === 5) {
			alert('Вы проиграли!')
			this.reset()
		}
		clearInterval(this.interval)
		this.setNewWord()
	}

	setNewWord() {
		const word = this.getWord()

		this.renderWord(word)
		this.timer()
	}

	getWord() {
		const words = [
				'bob',
				'awesome',
				'netology',
				'hello',
				'kitty',
				'rock',
				'youtube',
				'popcorn',
				'cinema',
				'love',
				'javascript',
			],
			index = Math.floor(Math.random() * words.length)

		return words[index]
	}

	renderWord(word) {
		const html = [...word]
			.map(
				(s, i) =>
					`<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`
			)
			.join('')
		this.wordElement.innerHTML = html

		this.currentSymbol = this.wordElement.querySelector('.symbol_current')
	}
}

new Game(document.getElementById('game'))
