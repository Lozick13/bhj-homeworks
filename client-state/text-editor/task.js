const editor = document.querySelector('#editor')
const editorGetText = localStorage.getItem('editor')
if (editorGetText) {
	editor.value = editorGetText
}

function saveEditorText() {
	const editorText = editor.value
	localStorage.setItem('editorText', editorText)
}
editor.addEventListener('change', saveEditorText())

const clearBtn = document.querySelector('.clear')
clearBtn.addEventListener('click', () => {
	clearBtn.previousElementSibling.value = ''
	saveEditorText()
})
