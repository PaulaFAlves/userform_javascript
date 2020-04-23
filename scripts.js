const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form_input');
const btnSubmit = document.querySelector('#btn_submit');

for (let i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener('keyup', function() {
		if (this.value.length >= 1) {
			this.nextElementSibling.classList.add('fixar')
		} else {
			this.nextElementSibling.classList.remove('fixar')
		}
	})
}
btnSubmit.addEventListener('click', event => {
	event.preventDefault();
	inputs.forEach(input => {
		if (input.value === '') {
			form.classList.add('validate-error')
		}
	})
	const error = document.querySelector('.validate-error');
	if (error) {
		error.addEventListener('animationend', event => {
			if (event.animationName === "nono") {
				error.classList.remove('validate-error')
			}
		})
	} else {
		inputs.forEach(input =>
			input.value = ''
		)
		alert('Thanks for your time!')
	}
})