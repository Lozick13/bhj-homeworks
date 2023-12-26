const chatWidget = document.querySelector('.chat-widget')
chatWidget.addEventListener('click', () => {
	chatWidget.classList.add('chat-widget_active')
	resetTimeout()
})
const chatInput = document.querySelector('#chat-widget__input')
const chatMessages = document.querySelector('#chat-widget__messages')
const chatContainer = document.querySelector('.chat-widget__messages-container')
chatInput.addEventListener('keyup', event => {
	if (event.keyCode === 13 && chatInput.value.length > 0) {
		event.preventDefault()
		const time = new Date().getHours() + ':' + new Date().getMinutes()
		chatMessages.innerHTML += `<div class="message message_client">
                            <div class="message__time">${time}</div>
                            <div class="message__text">${chatInput.value}</div>
                        </div>`
		chatMessages.innerHTML += `<div class="message">
                            <div class="message__time">${time}</div>
                            <div class="message__text">Рандомное сообщение</div>
                        </div>`
		chatContainer.scrollTop = chatContainer.scrollHeight
		resetTimeout()
	}
})
let timeoutID
function resetTimeout() {
	clearTimeout(timeoutID)
	timeoutID = setTimeout(() => {
		const time = new Date().getHours() + ':' + new Date().getMinutes()
		chatMessages.innerHTML += `<div class="message">
                            <div class="message__time">${time}</div>
                            <div class="message__text">Не игнорь меня</div>
                        </div>`
	}, 30000) // 30 seconds
}