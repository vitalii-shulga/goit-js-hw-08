import throttle from 'lodash.throttle'

const STORAGE_KEY = 'feedback-form-state'
let formData = {}
const form = document.querySelector('.feedback-form')

form.addEventListener('input', throttle(onFormInput, 500))
form.addEventListener('submit', onFormSubmit)

populateForm()

function onFormInput() {
  formData = { email: form.email.value, message: form.message.value }

  const formDataStringified = JSON.stringify(formData)
  localStorage.setItem(STORAGE_KEY, formDataStringified)
}

function onFormSubmit(e) {
  e.preventDefault()

  if (e.target.email.value === '') {
    alert('Please enter your email')
    return
  }
  if (e.target.message.value === '') {
    alert('Please type your message')
    return
  }

  formData = { email: form.email.value, message: form.message.value }
  console.log(formData)

  e.currentTarget.reset()
  localStorage.removeItem(STORAGE_KEY)
}

function populateForm() {
  const storageValue = localStorage.getItem(STORAGE_KEY)
  const storageValueParsed = JSON.parse(storageValue)

  if (storageValueParsed) {
    form.email.value = storageValueParsed.email
    form.message.value = storageValueParsed.message
  }
}
