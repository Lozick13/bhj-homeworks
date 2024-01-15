const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll')
xhr.addEventListener('readystatechange', () => {
	if (xhr.readyState === xhr.DONE && xhr.status === 200) {
		const pollTitle = document.querySelector('#poll__title')
		const pollAnswers = document.querySelector('#poll__answers')
		const response = JSON.parse(xhr.responseText).data

		pollTitle.textContent = response.title
		for (let i = 0; i < response.answers.length; i++) {
			const newBtn = document.createElement('button')
			newBtn.className = 'poll__answer'
			newBtn.textContent = response.answers[i]
			newBtn.addEventListener('click', () => {
				const xhrPost = new XMLHttpRequest()

				alert('Спасибо, ваш голос засчитан!')
				xhrPost.open(
					'POST',
					'https://students.netoservices.ru/nestjs-backend/poll'
				)
				xhrPost.setRequestHeader(
					'Content-type',
					'application/x-www-form-urlencoded'
				)

				xhrPost.addEventListener('readystatechange', () => {
					if (xhrPost.readyState === xhrPost.DONE && xhrPost.status === 201) {
						console.table(JSON.parse(xhrPost.responseText))
						const stat = JSON.parse(xhrPost.responseText).stat

						pollAnswers.innerHTML = ''
						for (let i = 0; i < stat.length; i++) {
							const newStatRow = document.createElement('div')
							newStatRow.innerHTML = `${stat[i].answer}: 
							<strong>${stat[i].votes}</strong>`
							pollAnswers.appendChild(newStatRow)
						}
					}
				})
				xhrPost.send(`vote=${JSON.parse(xhr.responseText).id}&answer=${i}`)
			})
			pollAnswers.appendChild(newBtn)
		}
	}
})
xhr.send()
