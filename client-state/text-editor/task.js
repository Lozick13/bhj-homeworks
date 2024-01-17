const editor = document.querySelector('#editor')
const editorGetText = localStorage.getItem('editorText') 
if (editorGetText) {
	editor.value = editorGetText
}

function saveEditorText() {
	const editorText = editor.value
	localStorage.setItem('editorText', editorText)
}
editor.addEventListener('input', saveEditorText)

const clearBtn = document.querySelector('.clear')
clearBtn.addEventListener('click', () => {
	editor.value = ''
	saveEditorText()
})
