let kill = 0
let miss = 0
const elementDead = document.getElementById('dead')
const elementLost = document.getElementById('lost')
for (let index = 1; index < 10; index++) {
	const elementHole = document.getElementById(`hole${index}`)
	elementHole.onclick = () => {
		elementHole.className.includes('hole_has-mole') ? kill++ : miss++
		if (kill === 10) {
			alert('Победа!')
			kill = 0
			miss = 0
		}
		if (miss === 5) {
			alert('Проигрыш!')
			kill = 0
			miss = 0
		}
		elementDead.textContent = kill
		elementLost.textContent = miss
	}
}
