function setIndeterminateState(checkbox) {
	if (checkbox.closest('ul').previousElementSibling !== null) {
		const parentCheckbox = checkbox
			.closest('ul')
			.previousElementSibling.querySelector('.interest__check')
		const childCheckboxes = checkbox
			.closest('ul')
			.querySelectorAll('.interest__check')
		let allChecked = true
		let allUnchecked = true

		childCheckboxes.forEach(childCheckbox => {
			if (childCheckbox.checked) {
				allUnchecked = false
			} else {
				allChecked = false
			}
		})

		if (allChecked) {
			parentCheckbox.checked = true
			parentCheckbox.indeterminate = false
		} else if (allUnchecked) {
			parentCheckbox.checked = false
			parentCheckbox.indeterminate = false
		} else {
			parentCheckbox.checked = false
			parentCheckbox.indeterminate = true
		}

		if (parentCheckbox.closest('ul')) {
			setIndeterminateState(parentCheckbox)
		}
	}
}

const interestCheckboxes = document.querySelectorAll('.interest__check')
interestCheckboxes.forEach(checkbox => {
	checkbox.addEventListener('change', function () {
		if (checkbox.parentElement.nextElementSibling !== null) {
			if (checkbox.checked) {
				const nestedCheckboxes =
					checkbox.parentElement.nextElementSibling.querySelectorAll(
						'.interest__check'
					)
				nestedCheckboxes.forEach(nestedCheckbox => {
					nestedCheckbox.checked = true
				})
			} else {
				const nestedCheckboxes =
					checkbox.parentElement.nextElementSibling.querySelectorAll(
						'.interest__check'
					)
				nestedCheckboxes.forEach(nestedCheckbox => {
					nestedCheckbox.checked = false
				})
			}
		}
		setIndeterminateState(checkbox)
	})
})
