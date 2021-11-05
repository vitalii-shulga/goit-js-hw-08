import throttle from 'lodash.throttle'

const STORAGE_KEY = 'feedback-form-state'
let formData = {}

const form = document.querySelector('.feedback-form')

form.addEventListener('input', throttle(onFormInput, 500))
form.addEventListener('submit', onFormSubmit)

populateForm()

function onFormInput(e) {
  formData[e.target.name] = e.target.value

  const dataToSave = JSON.stringify(formData)
  localStorage.setItem(STORAGE_KEY, dataToSave)
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

  const submittedData = { email: form.email.value, message: form.message.value }
  console.log(submittedData)

  e.currentTarget.reset()
  localStorage.removeItem(STORAGE_KEY)
}

function populateForm() {
  const storageValue = localStorage.getItem(STORAGE_KEY)
  const savedData = JSON.parse(storageValue)

  if (savedData) {
    form.email.value = savedData.email
    form.message.value = savedData.message
  }
}
