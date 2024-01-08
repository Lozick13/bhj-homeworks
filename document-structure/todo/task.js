function addTaskLogic(task) {
	const cross = task.querySelector('.task__remove')
	cross.addEventListener('click', () => {
		task.remove()
		save()
	})
}

function save() {
	const tasksHTML = tasks.innerHTML
	localStorage.setItem('tasks', tasksHTML)
}

const form = document.querySelector('#tasks__form')
const tasks = document.querySelector('#tasks__list')
if (localStorage.getItem('tasks') !== null) {
	tasks.innerHTML = localStorage.getItem('tasks')
	const taskElements = tasks.querySelectorAll('.task')
	taskElements.forEach(task => {
		addTaskLogic(task)
	})
}
form.addEventListener('submit', e => {
	e.preventDefault()
	const input = document.querySelector('#task__input')

	const newTask = document.createElement('div')
	newTask.className = 'task'
	newTask.innerHTML = `<div class="task__title">${input.value}</div>
	<a href="#" class="task__remove">&times;</a>`

	addTaskLogic(newTask)
	tasks.appendChild(newTask)
	input.value = ''
	save()
})
