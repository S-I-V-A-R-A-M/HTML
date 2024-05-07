const scriptURL = 'https://script.google.com/macros/s/AKfycbxpjJCvelH7v6BMd37buYJEbH0n14LGnOnhA444LeIUm0g5cfuskmcqbk_QD1iTnXXOBA/exec'

const form = document.forms['student_form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})